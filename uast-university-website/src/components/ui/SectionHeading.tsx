"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <ScrollReveal>
          <span
            className={`inline-block text-sm font-semibold tracking-[0.2em] uppercase mb-4 ${
              light ? "text-accent-gold" : "text-primary-500"
            }`}
          >
            {subtitle}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-balance ${
            light ? "text-white" : "text-primary-900"
          }`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p
            className={`text-lg max-w-3xl leading-relaxed ${
              centered ? "mx-auto" : ""
            } ${light ? "text-gray-300" : "text-gray-600"}`}
          >
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}