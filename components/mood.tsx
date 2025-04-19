"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock data for movies (replace with your own)
const movies = [
  { id: 1, title: "Comedy Hit", genre: "Comedy", thumbnail: "/comedy.jpg", mood: "Happy" },
  { id: 2, title: "Thriller Night", genre: "Thriller", thumbnail: "/thriller.jpg", mood: "Thriller" },
  { id: 3, title: "Romantic Getaway", genre: "Romance", thumbnail: "/romance.jpg", mood: "Romantic" },
  { id: 4, title: "Sci-Fi Adventure", genre: "Sci-Fi", thumbnail: "/scifi.jpg", mood: "Excited" },
];

// Available moods
const moods = ["Happy", "Thriller", "Romantic", "Excited"];

export default function MoodRecommendation() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<typeof movies>([]);

  // Mock AI logic to filter movies by mood
  const getRecommendations = (mood: string) => {
    const filtered = movies.filter((movie) => movie.mood === mood);
    setRecommendations(filtered);
  };

  // Handle mood selection
  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    getRecommendations(mood);
  };

  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Find Shows Based on Your Mood
        </h2>
        {/* Mood selection cards */}
        <div className="flex justify-center gap-4 mb-8">
          {moods.map((mood) => (
            <motion.button
              key={mood}
              className={`px-6 py-3 rounded-lg text-lg font-semibold ${
                selectedMood === mood
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => handleMoodSelect(mood)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {mood}
            </motion.button>
          ))}
        </div>
        {/* Recommendations */}
        <AnimatePresence>
          {selectedMood && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {recommendations.length > 0 ? (
                recommendations.map((movie) => (
                  <motion.div
                    key={movie.id}
                    className="relative overflow-hidden rounded-lg shadow-lg"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={movie.thumbnail}
                      alt={movie.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 bg-black bg-opacity-70 w-full p-4">
                      <h3 className="text-lg font-semibold">{movie.title}</h3>
                      <p className="text-sm text-gray-300">{movie.genre}</p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-center col-span-full text-gray-400">
                  No recommendations found for this mood.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}