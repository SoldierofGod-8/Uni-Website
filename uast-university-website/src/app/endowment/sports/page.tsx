"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageShell from "@/components/layout/pageShell";
import {
  Trophy,
  Medal,
  Users,
  Building2,
  GraduationCap,
  Target,
  TrendingUp,
  HandCoins,
  MapPin,
} from "lucide-react";

const sportsEndowmentFunds = [
  {
    name: "Sports Infrastructure Endowment Fund",
    icon: Building2,
    purpose:
      "Finance the construction, upgrade, and maintenance of sports facilities — including a modern sports complex, indoor gymnasium, Olympic-standard athletics track, and multi-sport courts.",
    minimum: "₦200 million",
    duration: "Perpetual",
  },
  {
    name: "Student-Athlete Scholarship Fund",
    icon: GraduationCap,
    purpose:
      "Provide financial support to talented student-athletes who demonstrate academic promise alongside athletic ability, ensuring no student is forced to choose between sport and study.",
    minimum: "₦100 million",
    duration: "25 years",
  },
  {
    name: "Coaching Excellence Endowment Fund",
    icon: Users,
    purpose:
      "Fund the recruitment, training, and retention of qualified coaching staff across all sports programmes, including international coaching certifications and exchange programmes.",
    minimum: "₦150 million",
    duration: "Perpetual",
  },
  {
    name: "Sports Science Research Fund",
    icon: Target,
    purpose:
      "Support research in sports science, exercise physiology, biomechanics, nutrition for athletes, and injury prevention — integrating academic research with practical athletics development.",
    minimum: "₦100 million",
    duration: "Perpetual",
  },
  {
    name: "Athletic Competition & Travel Fund",
    icon: Trophy,
    purpose:
      "Cover costs for UAST teams to participate in inter-university, national, and international competitions, including travel, accommodation, equipment, and team preparation.",
    minimum: "₦50 million",
    duration: "15 years",
  },
];

const donationTiers = [
  {
    tier: "Platinum Patron",
    range: "₦100 million and above",
    recognition: [
      "Named sports facility (e.g., 'The [Donor Name] Sports Complex')",
      "Permanent naming on facility for the duration of the endowment",
      "VIP seating at all UAST sporting events",
      "Annual recognition ceremony invitation",
      "Feature in UAST Endowment Annual Report",
      "Named seat/block in the main sports venue",
    ],
  },
  {
    tier: "Gold Patron",
    range: "₦50 million – ₦99 million",
    recognition: [
      "Named element within a sports facility (e.g., 'The [Donor Name] Court')",
      "Annual recognition at UAST Sports Awards",
      "VIP seating at home matches",
      "Feature in UAST Endowment Annual Report",
    ],
  },
  {
    tier: "Silver Patron",
    range: "₦10 million – ₦49 million",
    recognition: [
      "Named scholarship for student-athletes",
      "Recognition on the UAST Sports Honour Board",
      "Invitation to annual Sports Endowment Gala",
      "Feature in UAST Endowment Annual Report",
    ],
  },
  {
    tier: "Bronze Patron",
    range: "₦1 million – ₦9 million",
    recognition: [
      "Name inscribed on the UAST Sports Benefactors Wall",
      "Invitation to annual Sports Endowment Gala",
      "Certificate of Recognition from UAST",
    ],
  },
];

const howItWorks = [
  {
    step: "1. Choose a Fund",
    description:
      "Select from five endowment funds, each targeting a specific area of sports development at UAST.",
    icon: Target,
  },
  {
    step: "2. Make Your Gift",
    description:
      "Contribute a minimum amount to establish or contribute to an endowment. The principal is permanently preserved.",
    icon: HandCoins,
  },
  {
    step: "3. Invest & Grow",
    description:
      "Professional fund managers invest the principal. Only 40%–50% of annual returns are spent on the designated purpose.",
    icon: TrendingUp,
  },
  {
    step: "4. Impact in Perpetuity",
    description:
      "Your gift generates ongoing returns that fund sports development forever. The principal stays intact.",
    icon: Medal,
  },
];

export default function SportsEndowmentPage() {
  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-[10px] bg-green-600/20 border border-green-500/30 px-4 py-2">
            <span className="inline-block h-2 w-2 rounded-full bg-green-300" />
            <span className="text-green-200 font-semibold text-sm">SPORTS ENDOWMENT</span>
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-white">
            Sports Endowment Fund
          </h1>

          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
            The UAST Sports Endowment Fund is a dedicated financial vehicle designed to
            ensure the long-term sustainability and excellence of athletics and sports
            development at the University of Agriculture, Science and Technology, Ihugh.
            Your contribution creates a permanent legacy that benefits student-athletes
            for generations.
          </p>
        </motion.div>

        {/* Hero Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 rounded-[10px] border border-white/10 overflow-hidden"
        >
          <div className="w-full aspect-[16/7] bg-white/5 flex items-center justify-center">
            <div className="text-center text-white/40">
              <MapPin className="w-10 h-10 mx-auto mb-3" />
              <p className="text-sm font-semibold">UAST Sports Campus Vision</p>
              <p className="text-xs mt-1">Image placeholder — replace with sports endowment hero image</p>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            How the Sports Endowment Works
          </h2>
          <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
            Like all UAST endowments, the Sports Endowment Fund operates on the
            principle of perpetual capital preservation. The principal is never spent —
            only investment returns fund the designated purpose.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {howItWorks.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.05 }}
                className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-green-300" />
                </div>
                <h3 className="mt-4 text-white font-semibold">{item.step}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Five Endowment Funds */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Five Sports Endowment Funds
          </h2>
          <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
            Donors may contribute to any of the five named endowment funds. Each fund
            targets a specific area of sports development. All funds operate under the
            same governance and financial safeguards as the general UAST Endowment Fund.
          </p>
        </motion.div>

        <div className="mt-8 space-y-4">
          {sportsEndowmentFunds.map((fund, i) => {
            const Icon = fund.icon;
            return (
              <motion.div
                key={fund.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.05 }}
                className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[10px] bg-green-600/20 border border-green-500/30 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-green-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white">{fund.name}</h3>
                    <div className="mt-1 flex flex-wrap gap-3 text-xs">
                      <span className="text-green-300/80 font-semibold">
                        Minimum: {fund.minimum}
                      </span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/50">Duration: {fund.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-white/70 text-sm leading-relaxed">
                  {fund.purpose}
                </p>
                <div className="mt-4 rounded-[10px] border border-white/10 bg-white/5 aspect-[16/9] flex items-center justify-center">
                  <div className="text-center text-white/30">
                    <MapPin className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-[11px]">Image placeholder — {fund.name}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Recognition Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Donor Recognition
          </h2>
          <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
            UAST recognises the generosity of sports endowment donors through a tiered
            recognition system. All donors receive public acknowledgement and are
            invited to the annual UAST Sports Endowment Gala.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {donationTiers.map((tier, i) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.05 }}
              className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-[10px] bg-green-600/20 border border-green-500/30 flex items-center justify-center shrink-0">
                  <Medal className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{tier.tier}</h3>
                  <p className="mt-1 text-green-300/80 text-xs font-semibold">
                    {tier.range}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {tier.recognition.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-green-400 mt-1 text-xs">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Financial Safeguards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <h3 className="text-xl font-bold text-white">Financial Safeguards</h3>
          <p className="mt-2 text-white/70 text-sm leading-relaxed max-w-3xl">
            The Sports Endowment Fund operates under the same rigorous financial
            governance as the general UAST Endowment Fund:
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "Annual audited reports by auditors approved by the Board of Trustees",
              "Capital preservation policy — the principal is never spent",
              "Spending limited to 40%–50% of annual investment returns",
              "Diversified portfolio: bonds, treasury bills, equities, agro-allied ventures",
              "Target annual return: 10%–18%",
              "Ring-fenced accounts with legal protection",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/80 text-sm">
                <span className="text-green-400 mt-0.5 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 rounded-[10px] border border-green-500/20 bg-gradient-to-br from-green-900/20 to-[#04130b] p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Invest in UAST Sports Forever
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your gift to the Sports Endowment Fund creates a permanent legacy. Every
            contribution, regardless of size, brings us closer to building a world-class
            athletics programme.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              Contact Development Office <span aria-hidden>→</span>
            </Link>

            <Link
              href="/endowment"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
            >
              View All Endowments
            </Link>
          </div>
        </motion.div>
      </PageShell>
    </div>
  );
}
