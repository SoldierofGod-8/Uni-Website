"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { NEWS_ITEMS } from "@/lib/constants";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCard from "../ui/AnimatedCard";
import Button from "../ui/Button";

export default function NewsSection() {
  return (
    <section className="section-padding bg-neutral-warm">
      <div className="container-max">
        <SectionHeading
          subtitle="Latest News"
          title="What's Happening at PU"
          description="Stay connected with the latest achievements, events, and stories from our university community."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item, index) => (
            <AnimatedCard
              key={item.id}
              delay={index * 0.15}
              className="overflow-hidden group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="relative h-52 bg-gradient-to-br from-primary-400 to-primary-700 overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-700">
                    <Tag className="w-3 h-3" />
                    {item.category}
                  </span>
                </div>

                {/* Zoom effect placeholder */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span>{item.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-primary-900 mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
                  {item.excerpt}
                </p>

                <motion.div
                  className="flex items-center gap-1 text-primary-500 text-sm font-semibold"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            href="/news"
            variant="ghost"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}