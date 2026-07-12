"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/layout/pageShell";

type Track = "academic" | "non-academic";

type JobCategory = {
  title: string;
  track: Track;
  type: string;
  description: string;
  requirements: string[];
};

const jobCategories: JobCategory[] = [
  // ── Academic Staff ──────────────────────────────────────────────
  {
    title: "Senior Lecturer (Assistant Professor)",
    track: "academic",
    type: "Full-time / Tenure-track",
    description:
      "Senior academic cadre responsible for teaching, research, graduate supervision, and curriculum development. UAST seeks scholars who can teach across clusters of degree programmes within Centres of Excellence.",
    requirements: [
      "PhD from a reputable university",
      "Strong publication record with emerging research niche",
      "Evidence of excellent classroom teaching and student mentorship",
      "Digital competence: AI-assisted teaching tools, LMS, statistical and research software",
      "Evidence of participation in research grants, consultancy, or collaborative projects",
      "Integrity, collegiality, and emotional intelligence",
    ],
  },
  {
    title: "Associate Professor",
    track: "academic",
    type: "Full-time / Tenure-track",
    description:
      "Established scholars with recognised research leadership, international collaborations, and graduate supervision experience. Expected to secure external grants and provide academic leadership.",
    requirements: [
      "Strong publication and citation record",
      "Recognised research leadership with international collaborations",
      "Successful supervision of MSc and PhD students",
      "Evidence of PI or Co-PI roles on external grants",
      "Leadership experience (HOD, Programme Coordinator, Faculty Committee Chair)",
      "Desirable: sabbaticals, visiting appointments, editorial board membership",
    ],
  },
  {
    title: "Professor",
    track: "academic",
    type: "Full-time / Tenure-track",
    description:
      "UAST does not merely recruit professors — it recruits academic institution builders. Professors are expected to be recognised authorities in their specialisation, with international reputation and ability to build research groups.",
    requirements: [
      "International reputation with significant citation impact",
      "Evidence of international collaborations, keynote presentations, and invited lectures",
      "Successful supervision of MSc and PhD theses with graduates in academia, government, or industry",
      "Academic leadership experience (Dean, Director, Deputy Vice-Chancellor)",
      "Evidence of attracting substantial research funding",
      "Evidence of patents, commercialisation, technology transfer, or startup incubation",
      "Commitment to mentoring younger academics (core performance indicator)",
    ],
  },
  {
    title: "International Research Fellow",
    track: "academic",
    type: "Two-year fellowship / Non-tenure track",
    description:
      "A separate category for expatriate early-career scholars. Fellows are mentored by a Professor and receive competitive salary, housing, and research grant support. Conversion to Senior Lecturer possible after satisfying UAST promotion criteria.",
    requirements: [
      "PhD completed within the last 5 years",
      "Excellent publication record",
      "Strong teaching potential",
      "Willingness to be mentored by a Professor",
    ],
  },
  {
    title: "Distinguished Visiting Professor",
    track: "academic",
    type: "Visiting (2 weeks – 3 months annually)",
    description:
      "Globally recognised scholars who visit UAST annually to teach intensive postgraduate modules, supervise PhD students, deliver public lectures, build international collaborations, and mentor younger staff.",
    requirements: [
      "Global recognition in a relevant academic discipline",
      "Willingness to undertake short-term residencies (2 weeks, 1 month, or 3 months)",
      "Track record of graduate supervision and international collaboration",
    ],
  },

  // ── Non-Academic Staff ──────────────────────────────────────────
  {
    title: "Laboratory Technologists & Technicians",
    "track": "non-academic",
    type: "Full-time",
    description:
      "The largest non-academic category at UAST (25% of support staff). Responsible for maintaining and operating agriculture, science, allied health, and ICT laboratories. Critical to the university's hands-on learning mission.",
    requirements: [
      "HND or Bachelor's degree in a relevant science or technology field",
      "Experience with laboratory equipment calibration, maintenance, and safety",
      "Familiarity with digital laboratory systems",
    ],
  },
  {
    title: "ICT and Digital Services",
    "track": "non-academic",
    type: "Full-time",
    description:
      "Supports UAST's technology-enabled administrative model (15% of support staff). Manages ERP, Student Information System (SIS), Learning Management System (LMS), HRIS, and digital infrastructure.",
    requirements: [
      "Bachelor's degree or HND in Computer Science, ICT, or related field",
      "Experience with enterprise systems, cloud infrastructure, or network administration",
      "Familiarity with ERP, LMS, SIS, or HRIS platforms",
    ],
  },
  {
    title: "Library and Information Services",
    "track": "non-academic",
    type: "Full-time",
    description:
      "Manages UAST's digital and physical library services (10% of support staff). Responsible for digital library platforms, information resources, and research support.",
    requirements: [
      "Bachelor's degree or HND in Library and Information Science",
      "Experience with digital library systems and academic databases",
      "Knowledge of research data management",
    ],
  },
  {
    title: "Registry and Academic Planning",
    "track": "non-academic",
    type: "Full-time",
    description:
      "Core in-house function responsible for student records, examinations, academic planning, and timetabling (10% of support staff). Central to academic quality and institutional integrity.",
    requirements: [
      "Bachelor's degree in Administration, Social Sciences, or related field",
      "Strong organisational and data management skills",
      "Experience with student information systems",
    ],
  },
  {
    title: "Finance and Procurement",
    "track": "non-academic",
    type: "Full-time",
    description:
      "Manages financial operations, budgeting, and digital procurement systems (10% of support staff).",
    requirements: [
      "Bachelor's degree in Accounting, Finance, or related field",
      "Professional certification (ICAN, ACCA) is an advantage",
      "Experience with digital procurement and financial management systems",
    ],
  },
  {
    title: "Quality Assurance, Grants & Research Administration",
    "track": "non-academic",
    type: "Full-time",
    description:
      "Supports UAST's research mission through grant development, research compliance, intellectual property management, industry partnerships, and international collaborations (5% of support staff).",
    requirements: [
      "Bachelor's or Master's degree in a relevant field",
      "Experience with grant writing, research administration, or quality assurance",
      "Knowledge of research ethics, compliance, and intellectual property frameworks",
    ],
  },
  {
    title: "Student Affairs",
    "track": "non-academic",
    type: "Full-time",
    description:
      "Supports student welfare, campus life, recreational activities, and student engagement (10% of support staff).",
    requirements: [
      "Bachelor's degree in Social Sciences, Education, or related field",
      "Experience with student services, counselling, or campus life management",
      "Strong interpersonal and communication skills",
    ],
  },
];

const academicCategories = jobCategories.filter((j) => j.track === "academic");
const nonAcademicCategories = jobCategories.filter((j) => j.track === "non-academic");

const chairedEndowments = [
  "Chair in Artificial Intelligence for Agriculture",
  "Chair in Climate-Smart Agriculture",
  "Chair in Food Security and Nutrition",
  "Chair in Water Resources Engineering",
  "Chair in Mathematical Modelling",
  "Chair in Precision Agriculture",
  "Chair in Agribusiness Innovation",
  "Chair in Sustainable Forestry",
  "Chair in Renewable Energy Systems",
  "Chair in Data Science",
];

export default function CareersPage() {
  const [track, setTrack] = useState<Track>("academic");

  const activeCategories = track === "academic" ? academicCategories : nonAcademicCategories;

  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <div className="inline-flex items-center gap-2 rounded-[10px] bg-green-600/20 border border-green-500/30 px-4 py-2">
            <span className="inline-block h-2 w-2 rounded-full bg-green-300" />
            <span className="text-green-200 font-semibold text-sm">CAREERS AT UAST</span>
          </div>

          <h1 className="mt-6 text-3xl md:text-4xl font-bold">Job Opportunities</h1>

          <p className="mt-3 text-white/80 max-w-3xl leading-relaxed">
            UAST seeks to recruit academic leaders and professional support staff who share our
            vision of building Africa&apos;s premier university for digital agriculture, science,
            technology, and innovation. We maintain a lean, technology-enabled administrative
            structure and offer competitive opportunities across academic and non-academic tracks.
          </p>
        </motion.div>

        {/* Track tabs */}
        <div className="mt-8 flex flex-wrap gap-3">
          {([
            { id: "academic" as Track, label: "Academic Staff", count: academicCategories.length },
            { id: "non-academic" as Track, label: "Non-Academic Staff", count: nonAcademicCategories.length },
          ]).map((t) => (
            <button
              key={t.id}
              onClick={() => setTrack(t.id)}
              className={[
                "rounded-[10px] border px-5 py-3 text-sm font-semibold transition-all",
                track === t.id
                  ? "bg-green-600/20 border-green-500/30 text-green-200"
                  : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10",
              ].join(" ")}
            >
              {t.label}
              <span className="ml-2 text-xs opacity-60">({t.count})</span>
            </button>
          ))}
        </div>

        {/* Job listings */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={track}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-4"
            >
              {activeCategories.map((job) => (
                <div
                  key={job.title}
                  className="rounded-[10px] border border-white/10 bg-white/5 p-5 md:p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border bg-green-600/20 border-green-500/30 text-green-200">
                          {job.type}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border bg-white/10 border-white/10 text-white/70">
                          {track === "academic" ? "Academic" : "Non-Academic"}
                        </span>
                      </div>
                      <p className="mt-3 text-white/70 text-sm leading-relaxed">
                        {job.description}
                      </p>
                      <div className="mt-4">
                        <p className="text-xs text-white/60 font-semibold uppercase tracking-wide mb-2">
                          Requirements
                        </p>
                        <ul className="space-y-1">
                          {job.requirements.map((req) => (
                            <li key={req} className="text-white/70 text-sm flex items-start gap-2">
                              <span className="text-green-400 mt-1 text-xs">●</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 text-sm font-semibold transition-all whitespace-nowrap"
                      >
                        Apply Now <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Chaired Endowments ── */}
        <div className="mt-12 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold">Chaired Endowments</h2>
          <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
            UAST establishes endowed or strategic chairs to enhance prestige and attract
            internationally accomplished scholars. These positions are housed within Centres
            of Excellence and serve multiple degree programmes.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {chairedEndowments.map((chair) => (
              <div
                key={chair}
                className="rounded-[10px] border border-white/10 bg-white/5 p-4 flex items-start gap-3"
              >
                <span className="text-green-400 mt-0.5 text-sm">●</span>
                <span className="text-white/90 text-sm font-semibold">{chair}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Staffing Philosophy ── */}
        <div className="mt-8 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold">Staffing Philosophy</h2>
          <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
            UAST deliberately avoids replicating the staffing structures of many public
            universities in Nigeria, where support staff often outnumber academic staff by a
            wide margin. Instead, UAST adopts a lean, technology-enabled administrative model.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">Long-term Target</h3>
              <p className="mt-2 text-white/70 text-sm">
                One non-teaching staff member for every academic staff member (1:1). This is
                ambitious but achievable by investing early in digital systems and process
                redesign.
              </p>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">Support Staff Composition</h3>
              <p className="mt-2 text-white/70 text-sm">
                Laboratory technologists (25%), ICT &amp; digital services (15%), library (10%),
                student affairs (10%), finance &amp; procurement (10%), registry (10%), physical
                planning (10%), quality assurance &amp; research admin (5%), security (5%).
              </p>
            </div>
          </div>

          {/* Ratio evolution */}
          <div className="mt-6">
            <h3 className="font-semibold text-white mb-3">Staffing Ratio Evolution</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { year: "Year 1", ratio: "1.30 : 1" },
                { year: "Year 2", ratio: "1.20 : 1" },
                { year: "Year 3", ratio: "1.10 : 1" },
                { year: "Year 4", ratio: "1 : 1" },
                { year: "Year 5", ratio: "2 : 3" },
              ].map((r) => (
                <div
                  key={r.year}
                  className="rounded-[10px] border border-white/10 bg-white/5 p-4 text-center"
                >
                  <p className="text-xs text-white/60 font-semibold">{r.year}</p>
                  <p className="mt-1 text-lg font-bold text-green-300">{r.ratio}</p>
                  <p className="text-[10px] text-white/50">Support : Faculty</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Technology as Workforce Multiplier ── */}
        <div className="mt-8 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold">Technology as a Workforce Multiplier</h2>
          <p className="mt-3 text-white/70 max-w-3xl leading-relaxed">
            To sustain a lean staffing model, UAST invests in integrated digital systems from
            the outset, reducing manual processes, staff wage bill, and improving service quality.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              "Enterprise Resource Planning (ERP)",
              "Student Information System (SIS)",
              "Learning Management System (LMS)",
              "Human Resources Information System (HRIS)",
              "Electronic Document Management",
              "Digital Procurement",
              "Electronic Payroll",
              "Research Management Systems",
              "Digital Library Services",
              "Timetabling &amp; Examination Management",
            ].map((sys) => (
              <div
                key={sys}
                className="rounded-[10px] border border-white/10 bg-white/5 p-3 text-center"
              >
                <span className="text-white/80 text-xs font-semibold">{sys}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Outsourced Functions ── */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h2 className="text-xl font-bold">Outsourced Services</h2>
            <p className="mt-2 text-white/70 text-sm">
              These functions require oversight but do not require large permanent establishments.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Routine security services",
                "Cleaning and janitorial services",
                "Grounds and landscaping",
                "Catering and cafeterias",
                "Shuttle and transport operations",
                "Routine building maintenance",
                "Waste management",
                "Printing and reprographic services",
              ].map((item) => (
                <li key={item} className="text-white/70 text-sm flex items-start gap-2">
                  <span className="text-green-400 mt-1 text-xs">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h2 className="text-xl font-bold">Retained In-House</h2>
            <p className="mt-2 text-white/70 text-sm">
              Functions central to academic quality and institutional integrity remain within the
              University.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Registry and academic planning",
                "Examinations and records",
                "Library services",
                "ICT governance",
                "Research administration, consultancy &amp; linkages",
                "Laboratory technologists",
                "Internal audit",
                "Legal services",
                "Quality assurance",
                "Health and safety",
              ].map((item) => (
                <li key={item} className="text-white/70 text-sm flex items-start gap-2">
                  <span className="text-green-400 mt-1 text-xs">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Apply CTA ── */}
        <div className="mt-10 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 text-center">
          <h2 className="text-2xl font-bold">Interested in Joining UAST?</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto leading-relaxed">
            UAST recruits scholars and professionals who are internationally competitive,
            research-active, student-centred, technologically proficient, and committed to
            solving African development challenges. Express your interest by contacting us.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              Contact Us <span aria-hidden>→</span>
            </Link>
            <Link
              href="/endowment"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
            >
              Endowed Chairs
            </Link>
          </div>
        </div>
      </PageShell>
    </div>
  );
}
