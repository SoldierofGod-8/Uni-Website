"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import type { StaffMember } from "@/lib/staff";

export default function StaffCard({ member }: { member: StaffMember }) {
  const [expanded, setExpanded] = useState(false);
  const featured = member.featured;

  return (
    <div
      className={[
        "rounded-[10px] border transition-colors duration-300",
        expanded
          ? "border-green-500/40 bg-white/[0.08]"
          : "border-white/10 bg-white/5 hover:bg-white/10",
        featured && expanded ? "ring-1 ring-green-500/30" : "",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="w-full text-left p-5 md:p-6"
      >
        <span className="flex items-start gap-4">
          {featured && member.image ? (
            <span className="w-16 h-16 md:w-24 md:h-24 rounded-[10px] border border-green-500/30 overflow-hidden flex-shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </span>
          ) : (
            <span className="w-12 h-12 rounded-[10px] bg-green-600/20 border border-green-500/30 flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image src="/logo.png" alt="" width={44} height={44} className="w-8 h-8" />
            </span>
          )}

          <span className="flex-1 min-w-0">
            <span className="flex items-center justify-between gap-3">
              <span className="min-w-0">
                <span className="block text-white font-bold text-lg">{member.name}</span>
                <span className="block text-green-300 text-sm font-semibold mt-1">
                  {member.role}
                </span>
              </span>
              <span
                className={[
                  "flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
                  expanded
                    ? "border-green-500/40 bg-green-600/20 rotate-180"
                    : "border-white/15 bg-white/5",
                ].join(" ")}
              >
                <ChevronDown className="w-4 h-4 text-white/80" />
              </span>
            </span>
            <span className="block text-white/60 text-sm mt-2">{member.dept}</span>
          </span>
        </span>

        <span className="block mt-4 text-white/70 text-sm leading-relaxed">
          {member.summary}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-6 pt-5 border-t border-white/10">
              {member.sections && member.sections.length > 0 ? (
                <div className="space-y-7">
                  {member.sections.map((section) => (
                    <div key={section.heading}>
                      <h4 className="text-white font-bold text-base flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400" />
                        {section.heading}
                      </h4>

                      <div className="mt-3 space-y-3">
                        {section.paragraphs?.map((p, i) => (
                          <p key={i} className="text-white/75 text-sm leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>

                      {section.intro && (
                        <p className="mt-3 text-white/75 text-sm leading-relaxed">
                          {section.intro}
                        </p>
                      )}

                      {section.bullets && (
                        <ul className="mt-3 space-y-1.5">
                          {section.bullets.map((b, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-white/75 text-sm leading-relaxed"
                            >
                              <span className="text-green-400 mt-1 text-xs">●</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.afterBullets && (
                        <div className="mt-3 space-y-3">
                          {section.afterBullets.map((p, i) => (
                            <p key={i} className="text-white/75 text-sm leading-relaxed">
                              {p}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-white/60 text-sm leading-relaxed">
                  Profile, contact and further information will be published when operational
                  information is verified.
                </p>
              )}

              {member.footerNote && (
                <p className="mt-7 text-white/75 text-sm leading-relaxed border-t border-white/10 pt-5">
                  {member.footerNote}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
