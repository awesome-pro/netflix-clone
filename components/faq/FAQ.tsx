"use client";

import { useRef, useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <section className="py-16 md:py-20 bg-black text-white border-b-8 border-[#222]">
      <div className="container mx-auto px-4 md:px-16">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-gradient-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mx-auto mb-12">
          <Accordion type="single" collapsible className="w-full">
            <AnimatePresence>
              {FAQS.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-none mb-2 rounded-2xl"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <AccordionTrigger className="bg-[#1a1b1d] hover:bg-[#1c1d1d] py-5 px-6 text-xl md:text-2xl font-medium rounded-2xl">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="bg-[#1f2022] mt-px px-6 py-5 text-lg md:text-xl rounded-2xl">
                      {faq.answer}
                    </AccordionContent>
                  </motion.div>
                </AccordionItem>
              ))}
            </AnimatePresence>
          </Accordion>
        </div>

        <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg mb-5 text-white/90">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col md:flex-row gap-2 justify-center items-center lg:max-w-[600px] mx-auto">
          {/* Custom input with floating label */}
          <div className="relative w-full md:flex-grow">
            <div className={`relative h-14 md:h-16 w-full md:w-[400px] rounded-full overflow-hidden ${isFocused ? 'ring-2 ring-white' : ''}`}>
              <input
                ref={inputRef}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="h-full w-full md:w-[400px] px-4 pt-5 pb-2 bg-gray-600/60 backdrop-blur-sm text-white border border-gray-600 text-lg outline-none rounded-full"
              />
              <label 
                htmlFor="email"
                className={`absolute text-gray-400 duration-150 transform ${isFocused ? 'text-xs top-2 left-4' : 'text-lg top-1/2 -translate-y-1/2 left-4'}`}
              >
                Email address
              </label>
            </div>
          </div>
          <Button 
            className="h-14 md:h-16 bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 text-xl font-semibold transition-all duration-300 ease-in-out rounded-full w-full md:w-[200px]"
          >
            Get Started
            <ChevronRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
        </div>
      </div>
    </section>
  );
}