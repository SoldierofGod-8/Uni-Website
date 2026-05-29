"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/layout/pageShell";

type Phase = 1 | 2 | 3;
type PhaseFilter = "all" | "p1" | "p2" | "p3";

type Programme = {
  id: string;
  name: string;
  phase: Phase;
};

type Department = {
  id: string;
  name: string;
  programmes: Programme[];
};

type College = {
  id: string;
  name: string;
  departments: Department[];
};

const collegesData: College[] = [
  {
    id: "college-agri",
    name: "College of Agriculture (Placeholder)",
    departments: [
      {
        id: "dept-agri-tech",
        name: "Department of Agriculture Technology (Placeholder)",
        programmes: [
          { id: "p-agri-1", name: "B.Sc. Agriculture Technology (Placeholder)", phase: 1 },
          { id: "p-agri-2", name: "M.Sc. Applied Plant Studies (Placeholder)", phase: 2 },
          { id: "p-agri-3", name: "Ph.D. Crop Innovation (Placeholder)", phase: 3 },
        ],
      },
      {
        id: "dept-food-security",
        name: "Department of Food Security & Value Chain (Placeholder)",
        programmes: [
          { id: "p-food-1", name: "B.Sc. Food Security & Value Chain (Placeholder)", phase: 1 },
          { id: "p-food-2", name: "M.Sc. Food Systems Innovation (Placeholder)", phase: 2 },
        ],
      },
    ],
  },
  {
    id: "college-scitech",
    name: "College of Science & Technology (Placeholder)",
    departments: [
      {
        id: "dept-agri-eng",
        name: "Department of Agricultural Engineering (Placeholder)",
        programmes: [
          { id: "p-eng-1", name: "B.Sc. Agricultural Engineering (Placeholder)", phase: 1 },
          { id: "p-eng-2", name: "M.Sc. Smart Farm Systems (Placeholder)", phase: 2 },
        ],
      },
      {
        id: "dept-tech-innovation",
        name: "Department of Technology & Innovation (Placeholder)",
        programmes: [
          { id: "p-tech-1", name: "B.Sc. Technology for Agriculture (Placeholder)", phase: 2 },
          { id: "p-tech-2", name: "Ph.D. AgriTech Innovation (Placeholder)", phase: 3 },
        ],
      },
    ],
  },
];

function phaseFilterToPhase(filter: PhaseFilter): Phase | null {
  if (filter === "p1") return 1;
  if (filter === "p2") return 2;
  if (filter === "p3") return 3;
  return null;
}

function phaseLabel(phase: Phase) {
  if (phase === 1) return "Phase 1 (Available)";
  if (phase === 2) return "Phase 2 (Upcoming)";
  return "Phase 3 (Planned)";
}

function phaseBadgeClass(phase: Phase) {
  if (phase === 1) return "bg-green-600/20 border-green-500/30 text-green-200";
  if (phase === 2) return "bg-yellow-600/20 border-yellow-500/30 text-yellow-200";
  return "bg-white/5 border-white/10 text-white/70";
}

export default function ProgrammesPage() {
  const [collegeId, setCollegeId] = useState(collegesData[0]?.id ?? "");
  const [departmentId, setDepartmentId] = useState(collegesData[0]?.departments?.[0]?.id ?? "");
  const [phaseFilter, setPhaseFilter] = useState<PhaseFilter>("all");

  const selectedCollege = useMemo(() => {
    return collegesData.find((c) => c.id === collegeId) ?? collegesData[0];
  }, [collegeId]);

  const departments = selectedCollege?.departments ?? [];

  const selectedDepartment = useMemo(() => {
    return departments.find((d) => d.id === departmentId) ?? departments[0];
  }, [departments, departmentId]);

  const programmes = useMemo(() => {
    const list = selectedDepartment?.programmes ?? [];
    const p = phaseFilterToPhase(phaseFilter);
    if (!p) return list;
    return list.filter((x) => x.phase === p);
  }, [phaseFilter, selectedDepartment]);

  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        {/* Header with Phase Legend */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Colleges → Departments → Programmes</h1>
              <p className="mt-3 text-white/80 max-w-3xl leading-relaxed">
                Explore programmes using a phased presentation. Use the filter to view by phase.
                Programme details are shown as placeholders and will be updated later.
              </p>
            </div>

            {/* Phase Legend */}
            <div className="flex-shrink-0 rounded-[10px] border border-white/10 bg-[#0b2e19]/40 p-4">
              <p className="text-xs text-white/70 font-semibold uppercase tracking-wide">
                Phase Legend
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <span className={`inline-flex items-center px-3 py-1 rounded-full font-semibold border ${phaseBadgeClass(1)}`}>Phase 1 (Available)</span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full font-semibold border ${phaseBadgeClass(2)}`}>Phase 2 (Upcoming)</span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full font-semibold border ${phaseBadgeClass(3)}`}>Phase 3 (Planned)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Colleges, Departments, and Filter Controls */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold">Colleges</h2>
            <p className="mt-2 text-white/70 text-sm">
              Select a college (placeholder structure).
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {collegesData.map((c) => {
                const active = c.id === selectedCollege.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      setCollegeId(c.id);
                      const firstDept = c.departments?.[0]?.id;
                      if (firstDept) setDepartmentId(firstDept);
                    }}
                    className={[
                      "text-left rounded-[10px] border p-4 transition-all",
                      active
                        ? "bg-green-600/20 border-green-500/30"
                        : "bg-white/5 border-white/10 hover:bg-white/10",
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    <p className="font-semibold">{c.name}</p>
                    <p className="mt-2 text-xs text-white/60">{c.departments.length} Departments</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold">Departments</h2>
                <p className="mt-2 text-white/70 text-sm">Select a department.</p>
              </div>

              <div className="min-w-[220px]">
                <p className="text-xs text-white/70 font-semibold uppercase tracking-wide mb-2">
                  Phase filter
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setPhaseFilter("all")}
                    className={`px-3 py-2 rounded-[10px] border text-sm font-semibold transition-all ${phaseFilter === "all" ? "bg-green-600 text-white border-green-500/30" : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"}`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setPhaseFilter("p1")}
                    className={`px-3 py-2 rounded-[10px] border text-sm font-semibold transition-all ${phaseFilter === "p1" ? "bg-green-600/80 text-white border-green-500/30" : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"}`}
                  >
                    Phase 1
                  </button>
                  <button
                    onClick={() => setPhaseFilter("p2")}
                    className={`px-3 py-2 rounded-[10px] border text-sm font-semibold transition-all ${phaseFilter === "p2" ? "bg-yellow-600/80 text-yellow-50 border-yellow-500/30" : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"}`}
                  >
                    Phase 2
                  </button>
                  <button
                    onClick={() => setPhaseFilter("p3")}
                    className={`px-3 py-2 rounded-[10px] border text-sm font-semibold transition-all ${phaseFilter === "p3" ? "bg-white/10 text-white border-white/15" : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"}`}
                  >
                    Phase 3
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {departments.map((d) => {
                const active = d.id === selectedDepartment?.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => setDepartmentId(d.id)}
                    className={`text-left rounded-[10px] border p-4 transition-all ${active ? "bg-green-600/20 border-green-500/30" : "bg-white/5 border-white/10 hover:bg-white/10"}`}
                    aria-pressed={active}
                  >
                    <p className="font-semibold">{d.name}</p>
                    <p className="mt-2 text-xs text-white/60">{d.programmes.length} Programmes</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Programmes List */}
        <div className="mt-8 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Programmes</h2>
              <p className="mt-2 text-white/70 text-sm">
                Showing <span className="text-white font-semibold">{programmes.length}</span> programme(s).
              </p>
            </div>
          </div>

          <div className="mt-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedDepartment?.id ?? "dept"}-${phaseFilter}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {programmes.map((p) => (
                  <div key={p.id} className="rounded-[10px] border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{p.name}</h3>
                        <p className="mt-2 text-sm text-white/70 leading-relaxed">
                          Coming soon / Placeholder — programme details will be updated with verified operational information.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <p className="text-xs text-white/60 font-semibold">{phaseLabel(p.phase)}</p>
                      <Link
                        href="/admissions"
                        className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-4 py-2 text-sm font-semibold transition-all"
                      >
                        Admissions info <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
            {programmes.length === 0 && (
              <div className="mt-6 rounded-[10px] border border-white/10 bg-white/5 p-6 text-white/70">
                No programmes match this phase filter yet (placeholder dataset).
              </div>
            )}
          </div>
        </div>
      </PageShell>
    </div>
  );
}