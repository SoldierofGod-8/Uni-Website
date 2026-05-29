"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

// Updated menu groups to include Staff & Student Life
const MENU_GROUPS = [
  {
    title: "About",
    items: [
      { href: "/about", label: "About Us" },
      { href: "/news", label: "News & Events" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Academics",
    items: [
      { href: "/programs", label: "Programmes" },
      { href: "/admissions", label: "Admissions" },
      { href: "/research", label: "Research & Innovation" },
    ],
  },
  {
    title: "Campus",
    items: [
      { href: "/student-life", label: "Student Life" },
      { href: "/staff", label: "Staff" },
      { href: "/partnership", label: "Partnerships" },
      { href: "/athletics", label: "Athletics" },
    ],
  },
];

// Flat list for desktop navbar
const ALL_LINKS = MENU_GROUPS.flatMap((g) => g.items);

export default function Navbar() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const groups = useMemo(() => MENU_GROUPS, []);

  useEffect(() => {
    const onResize = () => {
      // close dropdown when switching to desktop layout
      if (window.innerWidth >= 1024) setOpenGroup(null);
    };

    const onMouseDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpenGroup(null);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div ref={wrapRef} className="mx-auto max-w-7xl">
        <div className="rounded-[10px] bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="UAST Ihugh"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
                priority
              />
            </div>

            <div className="text-white leading-tight hidden sm:block">
              <p className="text-sm md:text-base font-semibold">
                <span className="block">University of Agriculture,</span>
                <span className="block">Science & Technology</span>
              </p>
              <p className="text-xs text-green-300">Ihugh</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {ALL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "px-3 py-2 rounded-[10px] text-xs font-semibold transition-all whitespace-nowrap",
                  pathname === l.href
                    ? "bg-green-600 text-white shadow-lg shadow-green-500/20"
                    : "text-white/80 hover:text-white hover:bg-white/10",
                ].join(" ")}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile/tablet dropdown groups */}
          <div className="lg:hidden flex items-center gap-2">
            {groups.map((g) => {
              const isOpen = openGroup === g.title;

              return (
                <div key={g.title} className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenGroup(isOpen ? null : g.title)}
                    className={[
                      "flex items-center gap-1 px-3 py-2 rounded-[10px] text-xs font-semibold transition-all border",
                      isOpen
                        ? "bg-green-600 text-white border-green-400/20"
                        : "bg-white/5 text-white/85 border-white/10 hover:bg-white/10",
                    ].join(" ")}
                    aria-expanded={isOpen}
                    aria-label={`Open ${g.title} menu`}
                  >
                    {g.title}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-52 rounded-[10px] border border-white/10 bg-[#0b2e19]/95 backdrop-blur-md overflow-hidden shadow-xl">
                      <div className="px-4 py-3 border-b border-white/10">
                        <p className="text-white/80 text-xs font-bold uppercase tracking-[0.12em]">
                          {g.title}
                        </p>
                      </div>

                      <ul className="p-2 space-y-1">
                        {g.items.map((item) => {
                          const active = pathname === item.href;
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => setOpenGroup(null)}
                                className={[
                                  "block px-3 py-2 rounded-[10px] text-sm font-semibold transition-all",
                                  active
                                    ? "bg-green-600 text-white"
                                    : "text-white/80 hover:text-white hover:bg-white/10",
                                ].join(" ")}
                              >
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}