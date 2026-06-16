"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/layout/pageShell";

const endowmentTypes = [
  {
    category: "Academic & Research Endowments",
    items: [
      {
        title: "Endowed Chairs",
        description:
          "The highest honor for faculty. Provides permanent funding for professor salaries, research, and teaching resources. Helps recruit and retain top-tier global scholars, elevating the university's academic standing.",
        icon: "🎓",
      },
      {
        title: "Named Laboratories",
        description:
          "Funds physical research facilities with state-of-the-art equipment. Covers advanced instrumentation, maintenance, and supply costs. Pairs a donor's name with cutting-edge scientific discovery.",
        icon: "🔬",
      },
      {
        title: "Named Innovation Centers",
        description:
          "Financial engines for entrepreneurship. Supports hubs where students and faculty build startups, design technology, and patent inventions. Drives real-world impact from academic research.",
        icon: "💡",
      },
    ],
  },
  {
    category: "Student Support Endowments",
    items: [
      {
        title: "Scholarship Endowments",
        description:
          "Permanent financial aid for students. Covers tuition for undergraduate or graduate students based on merit or financial need. Ensures deserving students have access to quality education regardless of economic background.",
        icon: "📚",
      },
      {
        title: "Endowed Fellowships",
        description:
          "Financial trust for graduate or post-doctoral students. Covers living stipends, tuition, and research costs for advanced degrees. Enables the next generation of researchers and innovators.",
        icon: "🏆",
      },
    ],
  },
  {
    category: "Infrastructure Endowments",
    items: [
      {
        title: "Named Hostels",
        description:
          "Funds student residential buildings. Covers the construction, modernization, or maintenance of student housing and dormitories. Creates a conducive living environment that supports academic success.",
        icon: "🏠",
      },
    ],
  },
];

const opportunities = [
  {
    title: "Endowed Chairs",
    tag: "Highest Faculty Honor",
    items: [
      "Funds professor salaries and research",
      "Recruits top-tier global scholars",
      "Elevates academic standing",
    ],
  },
  {
    title: "Named Laboratories",
    tag: "Research Infrastructure",
    items: [
      "State-of-the-art equipment funding",
      "Maintenance and supply coverage",
      "Named in perpetuity",
    ],
  },
  {
    title: "Named Innovation Centers",
    tag: "Entrepreneurship Hub",
    items: [
      "Startup incubation support",
      "Patent and invention funding",
      "Industry partnership catalyst",
    ],
  },
  {
    title: "Scholarship Endowments",
    tag: "Student Access",
    items: [
      "Merit and need-based aid",
      "Undergraduate and graduate support",
      "Permanent legacy for donors",
    ],
  },
  {
    title: "Endowed Fellowships",
    tag: "Advanced Research",
    items: [
      "Graduate and post-doctoral support",
      "Living stipends and tuition",
      "Deep research cost coverage",
    ],
  },
  {
    title: "Named Hostels",
    tag: "Student Housing",
    items: [
      "Construction and modernization",
      "Maintenance of dormitories",
      "Conducive living environment",
    ],
  },
];

export default function EndowmentPage() {
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
            <span className="text-green-200 font-semibold text-sm">
              ENDOWMENT OPPORTUNITIES
            </span>
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-white">
            Invest in the Future of UAST Ihugh
          </h1>

          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
            Endowment opportunities are philanthropic gifts that provide permanent
            financial support for specific academic, research, or student needs. The
            university invests the initial donation and uses the annual investment
            earnings to fund the designated purpose, ensuring the donor&apos;s legacy is
            preserved indefinitely.
          </p>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="mt-4 text-white font-semibold">1. Donate</h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">
              A philanthropic gift is made to establish the endowment fund.
            </p>
          </div>

          <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="mt-4 text-white font-semibold">2. Invest</h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">
              The university invests the principal, generating annual earnings.
            </p>
          </div>

          <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="mt-4 text-white font-semibold">3. Fund</h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">
              Annual investment earnings fund the designated purpose in perpetuity.
            </p>
          </div>
        </motion.div>

        {/* Endowment Categories */}
        {endowmentTypes.map((category, ci) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 + ci * 0.05 }}
            className="mt-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {category.category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-all hover:border-green-500/30"
                >
                  <div className="w-12 h-12 rounded-[10px] bg-green-600/20 border border-green-500/30 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-white font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Opportunities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Naming Opportunities at a Glance
          </h2>
          <p className="text-white/70 mb-6">
            Each endowment can be named in honor of the donor or a loved one,
            creating a lasting legacy at UAST Ihugh.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {opportunities.map((opp) => (
              <div
                key={opp.title}
                className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-all"
              >
                <div className="inline-flex items-center gap-2 rounded-[10px] bg-green-600/20 border border-green-500/30 px-3 py-1">
                  <span className="text-green-200 font-semibold text-xs">
                    {opp.tag}
                  </span>
                </div>
                <h3 className="mt-3 text-white font-semibold">{opp.title}</h3>
                <ul className="mt-3 space-y-2">
                  {opp.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-white/70 text-sm"
                    >
                      <span className="text-green-400 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 rounded-[10px] border border-green-500/20 bg-gradient-to-br from-green-900/20 to-[#04130b] p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Ready to Make a Lasting Impact?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Partner with UAST Ihugh to create a legacy that transforms lives.
            Contact our development office to discuss endowment opportunities
            tailored to your philanthropic vision.
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
