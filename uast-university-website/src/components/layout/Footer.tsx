import Link from "next/link";
import { Facebook, X, Instagram, Youtube } from "./socialIcons";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Endowment", href: "/endowment" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
  { label: "Visit us", href: "/contact" },
  { label: "All University Departments", href: "/academics" },
];

const STUDY = [
  { label: "Undergraduate", href: "/programs" },
  { label: "Pre-Degree", href: "/programs" },
  { label: "International Collaborations", href: "/endowment" },
  { label: "Short Courses", href: "/programs" },
  { label: "Open Learning", href: "/programs" },
];

const INFORMATION = [
  { label: "Privacy and cookies", href: "/about" },
  { label: "Equality, Diversity and inclusion", href: "/about" },
  { label: "University Policies and Procedures", href: "/about" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61574473251747",
    icon: Facebook,
  },
  { label: "X", href: "https://x.com/uast_official", icon: X },
  {
    label: "Instagram",
    href: "https://www.instagram.com/uast_ihugh/",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@uast_official",
    icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-900/30 border border-green-400/20 overflow-hidden">
                <img
                  src="/Uni-Website/logo.png"
                  alt="UAST Ihugh"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="leading-tight">
                <p className="text-lg font-semibold">
                  <span className="block">University of</span>
                  <span className="block">Agriculture, Science &amp; Technology,Ihugh</span>
                  <span className="block"></span>
                </p>
              </div>
            </div>

            <div className="text-[15px] leading-relaxed">
              <p className="text-yellow-300 font-semibold">
                Takeoff Campus, Ihugh-Korinya Road,</p>
              <p className="text-yellow-300 font-semibold">Vandeikya LGA, Benue State</p>
            </div>

            <div className="space-y-3 text-sm">
              <p className="text-white/90">info@uast.edu.ng</p>

              <div className="flex items-center gap-3">
                {SOCIALS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={`${s.label}-${s.href}`}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-600/30 transition-colors"
                      aria-label={s.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={`${l.label}-${l.href}`}>
                  <Link
                    href={l.href}
                    className="text-white/85 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Study</h3>
            <ul className="space-y-3">
              {STUDY.map((l) => (
                <li key={`${l.label}-${l.href}`}>
                  <Link
                    href={l.href}
                    className="text-white/85 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Information</h3>
            <ul className="space-y-3">
              {INFORMATION.map((l) => (
                <li key={`${l.label}-${l.href}`}>
                  <Link
                    href={l.href}
                    className="text-white/85 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="text-white/70 text-sm">
            © UAST copyright {new Date().getFullYear()}, All Rights Reserved
          </p>

          <div className="flex gap-4 text-sm">
            <Link href="/about" className="text-white/70 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/about" className="text-white/70 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}