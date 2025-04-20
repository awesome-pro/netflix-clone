"use client";

import { useState } from "react";
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

  return (
    <section className="py-16 md:py-20 bg-black text-white border-b-8 border-[#222]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-gradient-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-4xl mx-auto mb-12">
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
          <p className="text-lg md:text-xl mb-5">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
            <Input
              type="email"
              placeholder="Email address"
              className="h-14 md:h-16 bg-black/60 border-[1px] border-gray-600 text-white text-lg rounded-full w-full md:flex-grow focus-visible:ring-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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