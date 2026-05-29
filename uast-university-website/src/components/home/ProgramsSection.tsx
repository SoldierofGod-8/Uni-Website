"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { PROGRAMS } from "@/lib/constants";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCard from "../ui/AnimatedCard";
import Button from "../ui/Button";

export default function ProgramsSection() {
  return (
    <section className="section-padding bg-neutral-warm">
      <div className="container-max">
        <SectionHeading
          subtitle="Academic Programs"
          title="Discover Your Path"
          description="Explore our diverse range of programs designed to prepare you for success in an ever-changing world."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program, index) => (
            <AnimatedCard
              key={program.title}
              delay={index * 0.1}
              className="overflow-hidden group cursor-pointer"
            >
              {/* Gradient Top Bar */}
              <div
                className={`h-2 bg-gradient-to-r ${program.color}`}
              />

              <div className="p-8">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <program.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-primary-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{program.students} students</span>
                  </div>
                  <motion.div
                    className="flex items-center gap-1 text-primary-500 text-sm font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            href="/academics"
            variant="ghost"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}