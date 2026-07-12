"use client";

import Link from "next/link";
import { institutionLinks } from "@/lib/programmeDetails";

const sortedInstitutions = Object.keys(institutionLinks).sort((a, b) => b.length - a.length);
const pattern = new RegExp(`(${sortedInstitutions.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");

export default function LinkedText({ text }: { text: string }) {
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        const url = institutionLinks[part];
        if (url) {
          return (
            <Link
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 underline decoration-green-500/40 underline-offset-2 hover:decoration-green-300 hover:text-green-200 transition-colors"
            >
              {part}
            </Link>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
