"use client";

import Link from "next/link";

export default function BackToProgrammes() {
  return (
    <Link
      href="/programs"
      className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6"
    >
      <span aria-hidden>←</span> Back to Programmes
    </Link>
  );
}
