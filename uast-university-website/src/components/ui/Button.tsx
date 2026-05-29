"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl shadow-primary-500/25",
    secondary:
      "bg-accent-gold text-primary-900 hover:bg-accent-goldLight shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-primary-900",
    ghost:
      "text-primary-500 hover:bg-primary-50",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = href ? motion.create(Link) : motion.button;

  return (
    <MotionComponent
      href={href || ""}
      onClick={onClick}
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </MotionComponent>
  );
}