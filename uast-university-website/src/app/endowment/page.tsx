"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/layout/pageShell";
import {
  GraduationCap,
  BookOpen,
  FlaskConical,
  Building2,
  Landmark,
  HandCoins,
  TrendingUp,
  Target,
} from "lucide-react";

const endowedChairs = [
  "Chair in Data Science",
  "Chair in Software Engineering and Drone/Robotics Technology",
  "Chair in Food Science and Technology",
  "Chair in Water Resources Management & Agro-Meteorology",
  "Chair in General STEM Fields",
  "Chair in Geology and Mining",
];

const endowedScholarships = [
  "Benue State Excellence Scholarship",
  "Women in Agricultural Sciences Scholarship",
  "Host Community Scholarship Scheme",
];

const endowedLabs = [
  "Agro-Processing Innovation Laboratory",
  "Soil & Water Analysis Laboratory",
  "Precision Agriculture & Drone Technology Laboratory",
  "Mine Simulation and Digital Geoscience Laboratory",
  "GIS Laboratory",
  "Toxicology Laboratory",
  "Software Engineering Laboratory",
  "High-Performance Computing Laboratory",
  "Hardware Computing Laboratory",
  "Computer Vision Laboratory",
  "Cyber Security Laboratory",
  "Cryptography Laboratory",
  "Networked Computer Laboratory",
  "Advanced AI and Data Science Laboratory",
  "Modern ICT Laboratory",
];

const endowedCenters = [
  "Center for Food Security & Rural Development",
  "Center for Climate-Smart Agriculture",
  "Center for Agro-Entrepreneurship",
];

const endowedBuildings = [
  "Named Academic Buildings",
  "Lecture Theatre Complexes",
  "Innovation Hubs",
  "Student Hostels",
  "Staff Quarters",
];

const objectives = [
  "Ensure long-term financial sustainability",
  "Promote academic excellence",
  "Encourage private sector and philanthropic participation",
  "Build institutional resilience",
];

const governanceStructure = [
  {
    role: "Board of Trustees",
    members: "7 members",
    details:
      "Appointed by the Visitor of UAST and confirmed by Corporate Affairs Commission. Comprises a Chairman (respected figure), Finance expert, Legal expert, Academic representative, Private sector/donor representative, African/Nigerian/Benue Diaspora representative, and Secretary (respected retired Permanent Secretary).",
  },
  {
    role: "Investment Committee",
    members: "At most 5 members",
    details:
      "Appointed by the Board of Trustees. Determines and oversees investment allocation and expenditure of returns. Interfaces with Fund Managers and reports to the Board of Trustees.",
  },
  {
    role: "Fund Managers",
    members: "Professional firms",
    details:
      "Licensed by the Securities and Exchange Commission (SEC). Manages investments on behalf of the endowment and reports to the Investment Committee.",
  },
];

const namingThresholds = [
  { type: "Endowed Chair", duration: "Perpetual", minimum: "₦500 million+" },
  { type: "Centre/Institute", duration: "Perpetual", minimum: "₦1 billion+" },
  { type: "Laboratory", duration: "Perpetual", minimum: "Below ₦500 million" },
  { type: "Scholarship Fund", duration: "15–25 years", minimum: "₦500 million+" },
  { type: "Lecture Theatre", duration: "Perpetual", minimum: "₦500 million – ₦2 billion" },
  { type: "Faculty Building", duration: "25–50 years", minimum: "₦2 billion – ₦10 billion" },
  { type: "Other Physical Building / Infrastructure", duration: "Perpetual", minimum: "Above ₦10 billion" },
];

const financialSafeguards = [
  "Annual audited reports by auditors approved by the Board of Trustees",
  "Transparent fund utilization",
  "Capital preservation policy — the principal is never spent",
  "Ring-fenced accounts with legal protection",
  "Spending limited to 40%–50% of annual investment returns",
  "Diversified portfolio: bonds, treasury bills, equities, agro-allied ventures",
  "Target annual return: 10%–18%",
  "Thresholds reviewed periodically by the Board of Trustees to compensate for inflationary real value depreciation",
];

export default function EndowmentPage() {
  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-[10px] bg-green-600/20 border border-green-500/30 px-4 py-2">
            <span className="inline-block h-2 w-2 rounded-full bg-green-300" />
            <span className="text-green-200 font-semibold text-sm">ENDOWMENT POLICY</span>
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-white">
            What Is an Endowment?
          </h1>

          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
            An endowment is a financial gift or asset given to an institution to provide
            ongoing income. The principal (capital) is preserved permanently. Only the
            annual investment returns are used. The fund is named after the donor or
            honoree. For UAST, endowments are instruments for financial sustainability,
            institutional autonomy, and long-term academic excellence.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 rounded-[10px] border border-white/10 overflow-hidden"
        >
          <img
            src="/Uni-Website/Endowment.jpg"
            alt="UAST Endowment"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* ── How It Works ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center">
              <HandCoins className="w-6 h-6 text-green-300" />
            </div>
            <h3 className="mt-4 text-white font-semibold">1. Give</h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">
              A financial gift or asset is given to UAST to establish the endowment fund.
            </p>
          </div>

          <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-300" />
            </div>
            <h3 className="mt-4 text-white font-semibold">2. Invest</h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">
              Professional fund managers invest the principal. The capital is never spent — only
              returns are used.
            </p>
          </div>

          <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center">
              <Target className="w-6 h-6 text-green-300" />
            </div>
            <h3 className="mt-4 text-white font-semibold">3. Fund</h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">
              40%–50% of annual returns fund the designated purpose in perpetuity. The
              principal stays intact forever.
            </p>
          </div>
        </motion.div>

        {/* ── Section 1: Types of Endowments ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Types of Endowments at UAST
          </h2>
          <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
            UAST establishes five categories of named endowments. Each serves a distinct
            purpose and operates under the same principle: the principal is preserved, and
            only investment returns are spent.
          </p>
        </motion.div>

        {/* Endowed Chairs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[10px] bg-green-600/20 border border-green-500/30 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6 text-green-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Endowed Chairs</h3>
              <p className="mt-1 text-white/70 text-sm">
                Support distinguished professors in key disciplines. Minimum ₦500 million.
                Perpetual naming.
              </p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {endowedChairs.map((chair) => (
              <div key={chair} className="rounded-[10px] border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                <span className="text-green-400 mt-0.5 text-xs">●</span>
                <span className="text-white/90 text-sm font-semibold">{chair}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Endowed Scholarships */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[10px] bg-green-600/20 border border-green-500/30 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-green-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Endowed Scholarships</h3>
              <p className="mt-1 text-white/70 text-sm">
                Provide financial support to students. Minimum ₦500 million. 15–25 year naming
                duration.
              </p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {endowedScholarships.map((s) => (
              <div key={s} className="rounded-[10px] border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                <span className="text-green-400 mt-0.5 text-xs">●</span>
                <span className="text-white/90 text-sm font-semibold">{s}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Endowed Laboratories */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[10px] bg-green-600/20 border border-green-500/30 flex items-center justify-center shrink-0">
              <FlaskConical className="w-6 h-6 text-green-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Endowed Laboratories</h3>
              <p className="mt-1 text-white/70 text-sm">
                Fund equipment, maintenance, and upgrades. Perpetual naming. Below ₦500 million
                minimum.
              </p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {endowedLabs.map((lab) => (
              <div key={lab} className="rounded-[10px] border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                <span className="text-green-400 mt-0.5 text-xs">●</span>
                <span className="text-white/90 text-sm font-semibold">{lab}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Endowed Centers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[10px] bg-green-600/20 border border-green-500/30 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-green-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Endowed Centers / Institutes</h3>
              <p className="mt-1 text-white/70 text-sm">
                Support full research units. Minimum ₦1 billion. Perpetual naming.
              </p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {endowedCenters.map((c) => (
              <div key={c} className="rounded-[10px] border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                <span className="text-green-400 mt-0.5 text-xs">●</span>
                <span className="text-white/90 text-sm font-semibold">{c}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Endowed Buildings */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[10px] bg-green-600/20 border border-green-500/30 flex items-center justify-center shrink-0">
              <Landmark className="w-6 h-6 text-green-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Endowed Buildings</h3>
              <p className="mt-1 text-white/70 text-sm">
                Fund infrastructure development and maintenance. Perpetual naming. Minimum ₦500
                million – ₦10 billion depending on scope.
              </p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {endowedBuildings.map((b) => (
              <div key={b} className="rounded-[10px] border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                <span className="text-green-400 mt-0.5 text-xs">●</span>
                <span className="text-white/90 text-sm font-semibold">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Section 2: Policy Framework ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Policy Framework
          </h2>
          <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
            The UAST Endowment Fund is governed by a formal policy framework established
            under Section 26(2)(c) of the UAST Law. The following sections outline the
            objectives, governance structure, naming thresholds, and financial safeguards.
          </p>
        </motion.div>

        {/* Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <h3 className="text-xl font-bold text-white">Objectives</h3>
          <ul className="mt-4 space-y-3">
            {objectives.map((obj) => (
              <li key={obj} className="flex items-start gap-3 text-white/80 text-sm">
                <span className="text-green-400 mt-0.5 text-xs">●</span>
                {obj}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Governance Structure */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <h3 className="text-xl font-bold text-white">Governance Structure</h3>
          <p className="mt-2 text-white/70 text-sm leading-relaxed max-w-3xl">
            The UAST Endowment Fund operates under a three-tier governance structure designed
            to ensure independence, transparency, and professional management.
          </p>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {governanceStructure.map((g) => (
              <div key={g.role} className="rounded-[10px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs text-green-400 font-semibold uppercase tracking-wide">
                  {g.members}
                </p>
                <h4 className="mt-2 text-white font-semibold">{g.role}</h4>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{g.details}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Naming Thresholds */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <h3 className="text-xl font-bold text-white">Naming Policy &amp; Thresholds</h3>
          <p className="mt-2 text-white/70 text-sm leading-relaxed max-w-3xl">
            Each endowment type has a minimum contribution and naming duration. Thresholds are
            reviewed periodically by the Board of Trustees to compensate for inflationary real
            value depreciation.
          </p>

          {/* Desktop table */}
          <div className="mt-5 hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/60 font-semibold py-3 px-4">Endowment Type</th>
                  <th className="text-left text-white/60 font-semibold py-3 px-4">Duration</th>
                  <th className="text-left text-white/60 font-semibold py-3 px-4">Minimum Contribution</th>
                </tr>
              </thead>
              <tbody>
                {namingThresholds.map((row) => (
                  <tr key={row.type} className="border-b border-white/5">
                    <td className="text-white/90 py-3 px-4 font-semibold">{row.type}</td>
                    <td className="text-white/70 py-3 px-4">{row.duration}</td>
                    <td className="text-white/70 py-3 px-4">{row.minimum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-5 md:hidden space-y-3">
            {namingThresholds.map((row) => (
              <div key={row.type} className="rounded-[10px] border border-white/10 bg-white/5 p-4">
                <p className="text-white font-semibold text-sm">{row.type}</p>
                <p className="text-white/70 text-xs mt-1">Duration: {row.duration}</p>
                <p className="text-white/70 text-xs mt-1">Minimum: {row.minimum}</p>
              </div>
            ))}
          </div>

          {/* Naming Rights Conditions */}
          <div className="mt-6 rounded-[10px] border border-white/10 bg-white/5 p-5">
            <h4 className="text-white font-semibold">Naming Rights Conditions</h4>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <span className="text-green-400 mt-1 text-xs">●</span>
                Must align with university values
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <span className="text-green-400 mt-1 text-xs">●</span>
                No politically controversial or unethical associations
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <span className="text-green-400 mt-1 text-xs">●</span>
                Subject to approval by Governing Authority (Governing Council and Board of Trustees)
              </li>
            </ul>
          </div>
        </motion.div>

        {/* ── Financial Safeguards ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <h3 className="text-xl font-bold text-white">Financial Safeguards</h3>
          <p className="mt-2 text-white/70 text-sm leading-relaxed max-w-3xl">
            The endowment fund is protected by multiple layers of financial governance to
            ensure transparency, sustainability, and long-term value preservation.
          </p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {financialSafeguards.map((item) => (
              <div key={item} className="rounded-[10px] border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                <span className="text-green-400 mt-0.5 text-xs">●</span>
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Strategic Importance ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <h3 className="text-xl font-bold text-white">Strategic Importance for UAST</h3>
          <ul className="mt-4 space-y-3">
            {[
              "Reduces dependence on government funding",
              "Ensures stability across political transitions",
              "Attracts global partnerships",
              "Builds institutional prestige",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/80 text-sm">
                <span className="text-green-400 mt-0.5 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 rounded-[10px] border border-green-500/20 bg-gradient-to-br from-green-900/20 to-[#04130b] p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Ready to Make a Lasting Impact?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Partner with UAST Ihugh to create a legacy that transforms lives. Contact our
            development office to discuss endowment opportunities tailored to your vision.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              Contact Development Office <span aria-hidden>→</span>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
            >
              Learn More About UAST
            </Link>
          </div>
        </motion.div>
      </PageShell>
    </div>
  );
}
