"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "../ui/SectionHeading";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );

  return (
    <section className="section-padding gradient-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <SectionHeading
          subtitle="Student Stories"
          title="Hear From Our Students"
          description="Discover how Prestige University has transformed the lives and careers of our graduates."
          light
        />

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-accent-gold/50 mx-auto mb-8" />

              {/* Quote Text */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-white font-heading leading-relaxed mb-10">
                &ldquo;{TESTIMONIALS[current].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 rounded-full bg-accent-gold/20 border-2 border-accent-gold/50 flex items-center justify-center text-accent-gold text-xl font-bold mb-4">
                  {TESTIMONIALS[current].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="text-white font-semibold text-lg">
                  {TESTIMONIALS[current].name}
                </div>
                <div className="text-white/60 text-sm">
                  {TESTIMONIALS[current].role}
                </div>
                <div className="text-accent-gold text-sm mt-1">
                  Now: {TESTIMONIALS[current].now}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-8 bg-accent-gold"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}