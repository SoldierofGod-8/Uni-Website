"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageShell from "@/components/layout/pageShell";
import {
  Trophy,
  Users,
  Dumbbell,
  Timer,
  Target,
  MapPin,
  Medal,
  Star,
  Shield,
  Handshake,
} from "lucide-react";

const sportsProgrammes = [
  {
    title: "Football",
    icon: Target,
    description:
      "UAST operates a competitive men's football programme competing in regional university leagues. Training takes place on our well-grassed regulation-size football pitch with coaching staff dedicated to player development alongside academic commitments.",
    schedule: "Monday, Wednesday & Friday — 4:00 PM",
    imagePlaceholder: true,
  },
  {
    title: "Track & Field Athletics",
    icon: Timer,
    description:
      "Our athletics programme covers sprint events, middle-distance running, relay races, long jump, high jump, javelin, shot put, and discus. The campus track and field facilities support both competitive training and general fitness.",
    schedule: "Tuesday & Thursday — 4:00 PM",
    imagePlaceholder: true,
  },
  {
    title: "Basketball",
    icon: Trophy,
    description:
      "The UAST basketball teams train on campus courts and participate in inter-university competitions across Benue State and beyond. Both men's and women's teams are active.",
    schedule: "Monday & Wednesday — 4:00 PM",
    imagePlaceholder: true,
  },
  {
    title: "Tennis",
    icon: Users,
    description:
      "Tennis courts on campus are available for competitive play and recreational use. Coaching is available for beginners and intermediate players.",
    schedule: "Tuesday & Thursday — 4:00 PM",
    imagePlaceholder: true,
  },
  {
    title: "Volleyball",
    icon: Dumbbell,
    description:
      "UAST volleyball teams compete in regional tournaments. The programme focuses on teamwork, agility, and competitive fitness.",
    schedule: "Wednesday & Friday — 4:00 PM",
    imagePlaceholder: true,
  },
  {
    title: "Fitness & Wellness",
    icon: Dumbbell,
    description:
      "Beyond competitive sports, UAST promotes a culture of fitness and wellness. Students have access to recreational spaces, jogging trails across campus, and wellness programmes organised throughout the academic year.",
    schedule: "Open access daily",
    imagePlaceholder: true,
  },
];

const sportsInfrastructure = [
  {
    name: "Football Pitch",
    details: "Well-grassed regulation-size pitch, suitable for competitive matches",
  },
  {
    name: "Track & Field Facilities",
    details: "Running track and field event areas for athletics competitions",
  },
  {
    name: "Basketball Courts",
    details: "Outdoor courts with professional-grade surfaces",
  },
  {
    name: "Tennis Courts",
    details: "Maintained courts for singles and doubles play",
  },
  {
    name: "Recreational Spaces",
    details: "Open areas for fitness activities, group exercise, and wellness events",
  },
];

const ncsDetails = [
  {
    title: "Inter-University Competition",
    description:
      "Structured league fixtures across multiple sports, enabling universities and colleges nationwide to compete in a formalised, professionally organised framework.",
  },
  {
    title: "National Championship",
    description:
      "An annual NCSL Championship bringing together the best collegiate athletes from across Nigeria for a premier sporting spectacle.",
  },
  {
    title: "Governance & Standards",
    description:
      "A centralised governance body comprising vice chancellors and college presidents to ensure fair play, anti-doping compliance, and academic eligibility standards.",
  },
  {
    title: "Broadcasting & Exposure",
    description:
      "Media partnerships to broadcast NCSL competitions nationally, giving student-athletes unprecedented visibility and career opportunities.",
  },
  {
    title: "Infrastructure Development",
    description:
      "A shared investment framework enabling member institutions to upgrade sports facilities to meet national and international competition standards.",
  },
  {
    title: "Career Pathways",
    description:
      "Scouting networks and professional development pipelines linking collegiate athletes to national teams, professional clubs, and international opportunities.",
  },
];

const scholarshipTiers = [
  {
    name: "Full Sports Scholarship",
    coverage: "100% Tuition & Accommodation",
    benefits: [
      "Full tuition fee waiver for the duration of the degree programme",
      "On-campus accommodation at no cost",
      "Monthly living stipend",
      "Priority access to coaching and training facilities",
      "Sports equipment and kit provided",
      "Academic tutoring and mentorship",
    ],
    criteria: "Top-tier athletes who meet UAST academic admission requirements and demonstrate exceptional sporting potential.",
  },
  {
    name: "Partial Sports Scholarship",
    coverage: "50% Tuition Fee Waiver",
    benefits: [
      "50% reduction in tuition fees",
      "Priority access to coaching and training facilities",
      "Sports equipment and kit provided",
      "Academic tutoring support",
    ],
    criteria: "Athletes who demonstrate strong sporting ability and meet minimum academic admission standards.",
  },
  {
    name: "Sports Bursary",
    coverage: "Training & Equipment Support",
    benefits: [
      "Free access to all sports facilities and coaching sessions",
      "Sports equipment and kit provided",
      "Nutritional support during competition periods",
      "Transport support for away fixtures",
    ],
    criteria: "Students who actively participate in UAST sports programmes and maintain satisfactory academic progress.",
  },
];

const developmentGoals = [
  "Establish inter-university competitive teams across multiple sports",
  "Develop scholarship pathways for talented student-athletes",
  "Build state-of-the-art sports facilities through endowment funding",
  "Create partnerships with professional sports organisations",
  "Promote inclusive participation across all student demographics",
  "Integrate sports science research into training programmes",
];

export default function AthleticsPage() {
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
            <span className="text-green-200 font-semibold text-sm">ATHLETICS & SPORTS</span>
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-white">
            Sports Development at UAST
          </h1>

          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
            The University of Agriculture, Science and Technology, Ihugh, is committed
            to holistic student development. Sports and athletics form a vital part of
            campus life, promoting physical fitness, teamwork, discipline, and school
            pride. UAST provides facilities and coaching infrastructure to support both
            competitive and recreational sports.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            NCSL — MAJOR FEATURE
        ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 rounded-[10px] border-2 border-green-500/30 bg-gradient-to-br from-green-900/40 to-[#04130b] overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-[10px] bg-green-500/20 border border-green-400/30 px-4 py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-green-300" />
              <span className="text-green-200 font-bold text-xs uppercase tracking-wider">
                Spearheaded by UAST
              </span>
            </div>

            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Nigerian Collegiate
              <br />
              Sports League
              <span className="text-green-400"> (NCSL)</span>
            </h2>

            <p className="mt-6 text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl">
              <strong className="text-white">UAST is spearheading the creation of the
              Nigerian Collegiate Sports League (NCSL)</strong> — a groundbreaking national
              initiative in partnership with university vice chancellors and college presidents
              across Nigeria. The NCSL will establish the first formalised, professionally
              governed inter-university sports league in the country, giving student-athletes
              a structured pathway to compete, excel, and be discovered.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-green-500/10 border border-green-500/20 px-4 py-1.5 text-green-300 text-xs font-semibold">
                UAST-Led Initiative
              </span>
              <span className="rounded-full bg-green-500/10 border border-green-500/20 px-4 py-1.5 text-green-300 text-xs font-semibold">
                Vice-Chancellor Partnership
              </span>
              <span className="rounded-full bg-green-500/10 border border-green-500/20 px-4 py-1.5 text-green-300 text-xs font-semibold">
                National Scale
              </span>
            </div>
          </div>

          {/* NCSL Image Placeholder */}
          <div className="mx-8 mb-8 rounded-[10px] border border-white/10 overflow-hidden">
            <div className="w-full aspect-[16/7] bg-white/5 flex items-center justify-center">
              <div className="text-center text-white/40">
                <Shield className="w-12 h-12 mx-auto mb-3" />
                <p className="text-sm font-semibold">Nigerian Collegiate Sports League — Official Branding</p>
                <p className="text-xs mt-1">Image placeholder — replace with NCSL logo or launch event photo</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* NCSL Details */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10"
        >
          <h3 className="text-2xl font-bold text-white">What the NCSL Will Deliver</h3>
          <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
            The Nigerian Collegiate Sports League is designed to transform university
            sports from ad hoc fixtures into a national spectacle. UAST, as the founding
            institution, is working with partners to establish the following pillars.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ncsDetails.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.05 }}
              className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6"
            >
              <h4 className="text-white font-bold text-lg">{item.title}</h4>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            SPORTS SCHOLARSHIPS — MAJOR FEATURE
        ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 rounded-[10px] border-2 border-green-500/30 bg-gradient-to-br from-green-900/40 to-[#04130b] p-8 md:p-12"
        >
          <div className="inline-flex items-center gap-2 rounded-[10px] bg-green-500/20 border border-green-400/30 px-4 py-2">
            <span className="inline-block h-2 w-2 rounded-full bg-green-300" />
            <span className="text-green-200 font-bold text-xs uppercase tracking-wider">
              Financial Support
            </span>
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-white">
            Sports Scholarships
          </h2>
          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
            UAST is committed to ensuring that talented student-athletes are never
            forced to choose between their sport and their education. Through a tiered
            scholarship programme, UAST provides financial support to athletes who
            demonstrate both sporting excellence and academic promise.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-green-500/10 border border-green-500/20 px-4 py-1.5 text-green-300 text-xs font-semibold flex items-center gap-1.5">
              <Medal className="w-3.5 h-3.5" /> Full Scholarships Available
            </span>
            <span className="rounded-full bg-green-500/10 border border-green-500/20 px-4 py-1.5 text-green-300 text-xs font-semibold flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5" /> Partial Scholarships Available
            </span>
            <span className="rounded-full bg-green-500/10 border border-green-500/20 px-4 py-1.5 text-green-300 text-xs font-semibold flex items-center gap-1.5">
              <Handshake className="w-3.5 h-3.5" /> Sports Bursaries
            </span>
          </div>
        </motion.div>

        {/* Scholarship Tiers */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {scholarshipTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.05 }}
              className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6"
            >
              <h3 className="text-xl font-bold text-white">{tier.name}</h3>
              <p className="mt-1 text-green-300 text-sm font-semibold">{tier.coverage}</p>
              <p className="mt-3 text-white/60 text-xs italic leading-relaxed">
                {tier.criteria}
              </p>
              <ul className="mt-4 space-y-2">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-white/80 text-sm">
                    <span className="text-green-400 mt-1 text-xs">●</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Image Placeholder for Scholarships */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 rounded-[10px] border border-white/10 overflow-hidden"
        >
          <div className="w-full aspect-[16/6] bg-white/5 flex items-center justify-center">
            <div className="text-center text-white/40">
              <Trophy className="w-10 h-10 mx-auto mb-3" />
              <p className="text-sm font-semibold">UAST Student-Athletes in Action</p>
              <p className="text-xs mt-1">Image placeholder — replace with student-athlete photo</p>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            SPORTS PROGRAMMES
        ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Sports Programmes
          </h2>
          <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
            UAST offers a growing portfolio of sports programmes designed to engage
            students in competitive and recreational physical activity. Each programme
            includes structured training sessions led by qualified coaches.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {sportsProgrammes.map((sport, i) => {
            const Icon = sport.icon;
            return (
              <motion.div
                key={sport.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.05 }}
                className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[10px] bg-green-600/20 border border-green-500/30 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-green-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white">{sport.title}</h3>
                    <p className="mt-1 text-green-300/80 text-xs font-semibold">
                      {sport.schedule}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-white/70 text-sm leading-relaxed">
                  {sport.description}
                </p>

                {sport.imagePlaceholder && (
                  <div className="mt-4 rounded-[10px] border border-white/10 bg-white/5 aspect-[16/9] flex items-center justify-center">
                    <div className="text-center text-white/30">
                      <MapPin className="w-6 h-6 mx-auto mb-2" />
                      <p className="text-[11px]">Image placeholder</p>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════
            SPORTS INFRASTRUCTURE
        ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Campus Sports Infrastructure
          </h2>
          <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
            UAST provides dedicated sports infrastructure on campus to support both
            competitive athletics and recreational physical activity.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sportsInfrastructure.map((facility, i) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.05 }}
                className="rounded-[10px] border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-white font-semibold">{facility.name}</h3>
                <p className="mt-2 text-white/60 text-sm leading-relaxed">
                  {facility.details}
                </p>
                <div className="mt-3 rounded-[10px] border border-white/10 bg-white/5 aspect-[16/9] flex items-center justify-center">
                  <div className="text-center text-white/30">
                    <MapPin className="w-5 h-5 mx-auto mb-1" />
                    <p className="text-[10px]">Photo placeholder</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Goals */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <h2 className="text-2xl font-bold text-white">Sports Development Goals</h2>
          <p className="mt-2 text-white/70 text-sm leading-relaxed max-w-3xl">
            UAST is committed to growing its sports programme into a fully competitive and
            inclusive athletics department. Key goals include:
          </p>
          <ul className="mt-5 space-y-3">
            {developmentGoals.map((goal) => (
              <li key={goal} className="flex items-start gap-3 text-white/80 text-sm">
                <span className="text-green-400 mt-0.5 text-xs">●</span>
                {goal}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 rounded-[10px] border border-green-500/20 bg-gradient-to-br from-green-900/20 to-[#04130b] p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Support UAST Athletics
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Help us build world-class sports facilities, fund the NCSL, and develop the
            next generation of student-athletes. Explore endowment and partnership
            opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/endowment/sports"
              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              Sports Endowment Fund <span aria-hidden>→</span>
            </Link>

            <Link
              href="/partnership"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
            >
              Partner with Athletics
            </Link>
          </div>
        </motion.div>
      </PageShell>
    </div>
  );
}
