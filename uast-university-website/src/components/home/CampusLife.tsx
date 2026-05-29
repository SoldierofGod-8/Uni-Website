"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function CampusLife() {
  const images = [
    {
      title: "Modern Facilities",
      description: "State-of-the-art labs and learning spaces",
      color: "from-blue-600/80 to-blue-900/80",
      span: "col-span-2 row-span-2",
    },
    {
      title: "Student Life",
      description: "200+ clubs and organizations",
      color: "from-emerald-600/80 to-emerald-900/80",
      span: "col-span-1 row-span-1",
    },
    {
      title: "Athletics",
      description: "25 varsity sports teams",
      color: "from-orange-600/80 to-orange-900/80",
      span: "col-span-1 row-span-1",
    },
    {
      title: "Research Labs",
      description: "Cutting-edge discoveries daily",
      color: "from-purple-600/80 to-purple-900/80",
      span: "col-span-1 row-span-1",
    },
    {
      title: "Global Community",
      description: "Students from 45+ countries",
      color: "from-pink-600/80 to-pink-900/80",
      span: "col-span-1 row-span-1",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <SectionHeading
          subtitle="Campus Life"
          title="Experience Life at Prestige"
          description="Our vibrant campus community offers endless opportunities to learn, grow, and connect."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((image, index) => (
            <ScrollReveal
              key={image.title}
              delay={index * 0.1}
              className={`${image.span} rounded-2xl overflow-hidden relative group cursor-pointer`}
            >
              {/* Placeholder gradient background - replace with actual images */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${image.color}`}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <motion.div
                  initial={{ y: 10, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  <h3 className="text-lg md:text-xl font-heading font-bold mb-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.description}
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            href="/campus-life"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Explore Campus
          </Button>
        </div>
      </div>
    </section>
  );
}