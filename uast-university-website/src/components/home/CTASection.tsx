"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, FileText } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

export default function CTASection() {
  const actions = [
    {
      icon: FileText,
      title: "Apply Now",
      description: "Start your application for Fall 2025",
      href: "/admissions#apply",
      color: "from-primary-500 to-primary-700",
    },
    {
      icon: MapPin,
      title: "Visit Campus",
      description: "Schedule a guided tour today",
      href: "/admissions#visit",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      icon: Calendar,
      title: "Attend an Event",
      description: "Join upcoming info sessions",
      href: "/events",
      color: "from-accent-gold to-accent-goldDark",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="bg-primary-900 rounded-3xl overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-700/50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent-gold/10 rounded-full blur-3xl" />

          <div className="relative z-10 p-8 md:p-16">
            <div className="text-center mb-12">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                  Ready to Begin Your Journey?
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                  Take the first step toward an extraordinary education. Our
                  admissions team is here to guide you every step of the way.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {actions.map((action, index) => (
                <ScrollReveal key={action.title} delay={index * 0.15}>
                  <motion.a
                    href={action.href}
                    className="block p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group text-center"
                    whileHover={{ y: -5 }}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${action.color} text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <action.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {action.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4">
                      {action.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent-gold text-sm font-semibold group-hover:gap-2 transition-all">
                      Get Started <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}