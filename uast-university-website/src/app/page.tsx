"use client";

import Link from "next/link";
import Logo3D from "@/components/3d/Logo3D";
import { motion } from "framer-motion";

export default function Home() {
  const vision = {
    title: "Vision",
    text: "To be a Centre of Excellence in Agriculture, Science and Technology, driving transformative learning, innovation, and research to foster a sustainably prosperous society.",
  };

  const mission = {
    title: "Mission",
    text: "To advance knowledge, innovation, and leadership through transformative education, high-relevance research, and community engagement, equipping learners with practical skills to address local challenges.",
  };

  const vcMessage = {
    name: "Prof. Leonard Karshima Shilgba",
    paragraphs: [
      "The motto of University of Agriculture, Science and Technology (UAST)—'Imagine, Aspire, Innovate, Create'—derives naturally from the expertise and efforts of every member of its academic community and dedication to service of its owner, the Benue State Government in Nigeria.",
      "At UAST, we believe in the role and significance of entrepreneurship for personal development, and are aware how much this is important for the nation's success. Our prominent and acknowledged faculty are accessible to mentor and guide you through your studies. Here, you will be given the support to develop your ideas, knowledge, skills, and initiatives. Our aim is to help you understand and prepare for the challenges in the world of agriculture, science, technology, entrepreneurship, and public life, and how these challenges can become opportunities for you to become a problem-solver and benefactor of your community; to help you develop into the nation's next generation of leaders and entrepreneurs, and to assist you to become the driving forces for shaping tomorrow's Benue State, Nigeria, Africa, and the world toward positive transformative impact.",
      "UAST supports a modern Nigerian-, European-, and American-inspired curriculum with emphasis on skills acquisition, industry-readiness and a must-learn focus on technology and its connectedness to various fields of human adventure. Small class sizes and a guaranteed uninterrupted academic calendar enable you to graduate on schedule. You also have access to options to complete part of your degree study at partner universities in Europe, the UK, EURASIA, Russia, as well as the USA.",
      "A university should not just be a place that provides textbook-based education, same as a library is not simply a place where books are neatly arranged on shelves! We are committed to providing you a place where you will exchange ideas, views, and experiences with fellow students, your professors, and many international experts. At UAST, you will be part of a wider academic community that has its basis on the common values of honesty, integrity, responsibility, partnership, respect for diversity, professionalism, open-mindedness, community involvement and globalisation engagement.",
      "My colleagues and I look forward to helping you create your own unique stories and many meaningful moments at UAST, which you will be proud of. Once again, you are highly welcome to University of Agriculture, Science and Technology (UAST), Ihugh, Benue State, Nigeria.",
    ],
  };

  const announcements = [
    {
      title: "Key announcement (Coming soon)",
      date: "Date to be confirmed",
      excerpt: "This section will be updated with verified announcements as they are released.",
    },
    {
      title: "Institutional update (Coming soon)",
      date: "Date to be confirmed",
      excerpt: "Updates on campus activities, research, and institutional initiatives will appear here.",
    },
    {
      title: "Programmes & admissions update (Coming soon)",
      date: "Date to be confirmed",
      excerpt: "Explore official admissions and programme information as they become available.",
    },
  ];

  const highlights = [
    {
      title: "Programmes",
      value: "Phased presentation (Phase 1 available • Phases 2–3 coming)",
      status: "Operational structure ready — details to be updated",
      href: "/programs",
    },
    {
      title: "Partnerships",
      value: "Partner with Us",
      status: "Partnership Help Desk operational — contact for collaboration opportunities",
      href: "/partnership",
    },
    {
      title: "Funding",
      value: "Coming Soon",
      status: "Funding information will be updated when operational",
      href: "/news",
    },
    {
      title: "Endowment Funding",
      value: "Endowment funding details ",
      status: "	Endowed Chairs, Endowed Fellowships, Named Laboratories, Named Hostels, Named Innovation Centers, Scholarship Endowments ",
      href: "/endowment"
    },
  ];

  return (
    <main className="min-h-screen bg-[#04130b] text-white">
      {/* HERO (visual only — no globe-driven navigation) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-70"
            style={{
              background:
                "radial-gradient(circle at center, rgba(34,197,94,0.40), rgba(34,197,94,0.14) 38%, rgba(34,197,94,0.0) 70%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 h-full"
            >
              <p className="text-green-300 text-sm font-semibold uppercase tracking-wide mb-3">
                University of Agriculture, Science & Technology, Ihugh
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Transformative learning • Innovation • Community impact
              </h1>
              <p className="mt-4 text-white/80 leading-relaxed max-w-xl">
                Specialised in modernising agricultural education, boosting food security, and driving technological innovation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
                >
                  Explore Programmes
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
                >
                  About UAST Ihugh
                </Link>
              </div>
            </motion.div>

            {/* Right card (MATCH HEIGHT with left via items-stretch) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-3 md:p-4 h-full"
            >
              <Logo3D className="w-full h-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{vision.title}</h2>
            <p className="text-white/80 leading-relaxed">{vision.text}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{mission.title}</h2>
            <p className="text-white/80 leading-relaxed">{mission.text}</p>
          </motion.div>
        </div>

        {/* VC Message */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-8 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Text */}
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Vice-Chancellor&apos;s Message</h2>
              <p className="text-green-300 font-semibold mb-4">{vcMessage.name}</p>
              <div className="text-white/80 space-y-4 leading-relaxed">
                {vcMessage.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* VC Image */}
            <div className="flex-shrink-0 w-full md:w-56 lg:w-64">
              <div className="rounded-[10px] border border-white/10 bg-white/5 overflow-hidden">
                <img
                  src="/Uni-Website/Vice-Chancellor.jpeg"
                  alt="Prof. Leonard Karshima Shilgba, Vice-Chancellor of UAST Ihugh"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 text-center">
                  <p className="text-white font-semibold text-sm">Prof. Leonard Karshima Shilgba</p>
                  <p className="text-white/60 text-xs mt-1">Vice-Chancellor</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Announcements */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Announcements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {announcements.map((a) => (
              <div
                key={a.title}
                className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors"
              >
                <div className="text-xs text-white/60 font-semibold">{a.date}</div>
                <div className="mt-2 text-white font-semibold leading-snug">{a.title}</div>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">{a.excerpt}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              Visit News & Events
            </Link>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <Link
                key={h.title}
                href={h.href}
                className="group rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-green-300 text-sm font-semibold uppercase tracking-wide">
                      {h.title}
                    </div>
                    <div className="mt-2 text-white text-xl font-bold">{h.value}</div>
                    <div className="mt-2 text-white/70 text-sm">{h.status}</div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                    <span className="text-green-300 font-bold">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

      </section>
    </main>
  );
}