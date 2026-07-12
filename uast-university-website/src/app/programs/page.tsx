"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/layout/pageShell";

type Programme = {
  id: string;
  name: string;
  department: string;
  slug?: string;
};

type School = {
  id: string;
  name: string;
  programmes: Programme[];
};

const schoolsData: School[] = [
  {
    id: "school-agri",
    name: "School of Agriculture",
    programmes: [
      { id: "agri-1", name: "B.Sc. Food Science and Technology", department: "Dept. of Food Science and Technology", slug: "food-science-and-technology" },
      { id: "agri-2", name: "B.Sc. Agricultural Economics and Farm Management", department: "Dept. of Agricultural Economics and Farm Management", slug: "agro-economics-and-farm-management" },
      { id: "agri-3", name: "B.Sc. Agricultural Extension and Rural Sociology", department: "Dept. of Agricultural Extension and Rural Sociology", slug: "agricultural-extension-and-rural-sociology" },
      { id: "agri-4", name: "B.Sc. Agribusiness", department: "Dept. of Agribusiness", slug: "agribusiness" },
      { id: "agri-5", name: "B.Sc. Forestry Resources and Wildlife Management", department: "Dept. of Forestry Resources and Wildlife Management", slug: "forest-resources-and-wildlife-management" },
      { id: "agri-6", name: "B.Sc. Water Resources Management and Agro-Meteorology", department: "Dept. of Water Resources Management and Agro-Meteorology", slug: "water-resources-management-and-agro-meteorology" },
    ],
  },
  {
    id: "school-scitech",
    name: "School of Science and Technology",
    programmes: [
      { id: "sci-1", name: "B.Sc. Industrial Mathematics", department: "Dept. of Industrial Mathematics", slug: "industrial-mathematics" },
      { id: "sci-2", name: "B.Sc. Industrial Physics", department: "Dept. of Industrial Physics", slug: "industrial-physics" },
      { id: "sci-3", name: "B.Sc. Industrial Chemistry", department: "Dept. of Industrial Chemistry", slug: "industrial-chemistry" },
      { id: "sci-4", name: "B.Sc. Microbiology", department: "Dept. of Microbiology", slug: "microbiology" },
      { id: "sci-5", name: "B.Sc. Environmental Management and Toxicology", department: "Dept. of Environmental Management and Toxicology", slug: "environmental-management-and-toxicology" },
      { id: "sci-7", name: "B.Sc. Geology and Mining", department: "Dept. of Geology and Mining", slug: "geology-and-mining" },
    ],
  },
  {
    id: "school-health",
    name: "School of Allied Health Sciences",
    programmes: [
      { id: "health-1", name: "B.Sc. Human Nutrition and Dietetics", department: "Dept. of Human Nutrition and Dietetics", slug: "nutrition-and-dietetics" },
      { id: "health-2", name: "B.MLS Medical Laboratory Technology", department: "Dept. of Medical Laboratory Technology", slug: "medical-laboratory-technology" },
      { id: "health-3", name: "B.NSc. Nursing Science", department: "Dept. of Nursing Science", slug: "nursing-science" },
    ],
  },
  {
    id: "school-computing",
    name: "School of Computing",
    programmes: [
      { id: "comp-1", name: "B.Sc. Computer Science", department: "Dept. of Computer Science", slug: "computer-science" },
      { id: "comp-2", name: "B.Sc. Data Science", department: "Dept. of Data Science", slug: "data-science" },
      { id: "comp-3", name: "B.Sc. Software Engineering", department: "Dept. of Software Engineering", slug: "software-engineering" },
      { id: "comp-4", name: "B.Sc. Cyber Security", department: "Dept. of Cyber Security", slug: "cyber-security" },
      { id: "comp-5", name: "B.Sc. Information and Communication Technology", department: "Dept. of Information and Communication Technology", slug: "information-and-communication-technology" },
    ],
  },
];

const totalProgrammes = schoolsData.reduce((sum, s) => sum + s.programmes.length, 0);

export default function ProgrammesPage() {
  const [schoolId, setSchoolId] = useState(schoolsData[0].id);
  const [search, setSearch] = useState("");

  const selectedSchool = useMemo(
    () => schoolsData.find((s) => s.id === schoolId) ?? schoolsData[0],
    [schoolId],
  );

  const filteredProgrammes = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return selectedSchool.programmes;
    return selectedSchool.programmes.filter((p) => p.name.toLowerCase().includes(q));
  }, [search, selectedSchool]);

  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Pioneer Academic Programmes
              </h1>
              <p className="mt-3 text-white/80 max-w-3xl leading-relaxed">
                Explore our pioneer academic structure across four schools offering{" "}
                <span className="text-white font-semibold">{totalProgrammes}</span>{" "}
                undergraduate programmes. Select a school below to view its
                programmes.
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex-shrink-0 rounded-[10px] border border-white/10 bg-[#0b2e19]/40 p-4">
              <p className="text-xs text-white/70 font-semibold uppercase tracking-wide">
                At a glance
              </p>
              <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
                <span className="text-white/60">Schools</span>
                <span className="font-semibold text-white">{schoolsData.length}</span>
                <span className="text-white/60">Programmes</span>
                <span className="font-semibold text-white">{totalProgrammes}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── School selector + Search ── */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Schools */}
          <div className="lg:col-span-1 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold">Schools</h2>
            <p className="mt-2 text-white/70 text-sm">
              Select a school to view its programmes.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3">
              {schoolsData.map((s) => {
                const active = s.id === selectedSchool.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSchoolId(s.id);
                      setSearch("");
                    }}
                    className={[
                      "text-left rounded-[10px] border p-4 transition-all",
                      active
                        ? "bg-green-600/20 border-green-500/30"
                        : "bg-white/5 border-white/10 hover:bg-white/10",
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    <p className="font-semibold">{s.name}</p>
                    <p className="mt-2 text-xs text-white/60">
                      {s.programmes.length} Programme{s.programmes.length !== 1 ? "s" : ""}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Programmes */}
          <div className="lg:col-span-2 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold">
                  {selectedSchool.name}
                </h2>
                <p className="mt-2 text-white/70 text-sm">
                  Showing{" "}
                  <span className="text-white font-semibold">
                    {filteredProgrammes.length}
                  </span>{" "}
                  of{" "}
                  <span className="text-white font-semibold">
                    {selectedSchool.programmes.length}
                  </span>{" "}
                  programme{selectedSchool.programmes.length !== 1 ? "s" : ""}.
                </p>
              </div>

              {/* Search */}
              <div className="min-w-[220px]">
                <label
                  htmlFor="prog-search"
                  className="text-xs text-white/70 font-semibold uppercase tracking-wide block mb-2"
                >
                  Search programmes
                </label>
                <input
                  id="prog-search"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="e.g. Biotechnology"
                  className="w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30 transition-all"
                />
              </div>
            </div>

            <div className="mt-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedSchool.id}-${search}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {filteredProgrammes.map((p) => {
                    const CardContent = (
                      <>
                        <div>
                          <p className="text-xs text-green-400/80 font-semibold uppercase tracking-wide mb-1">
                            {p.department}
                          </p>
                          <h3 className="text-lg font-bold text-white">{p.name}</h3>
                          <p className="mt-2 text-sm text-white/70 leading-relaxed">
                            {p.slug
                              ? "Click to view full programme details."
                              : "Pioneer programme — additional details will be published as they become available."}
                          </p>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border bg-green-600/20 border-green-500/30 text-green-200">
                            Pioneer Programme
                          </span>
                          {p.slug ? (
                            <span className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-4 py-2 text-sm font-semibold transition-all">
                              View details <span aria-hidden>→</span>
                            </span>
                          ) : (
                            <Link
                              href="/admissions"
                              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-4 py-2 text-sm font-semibold transition-all"
                            >
                              Admissions info <span aria-hidden>→</span>
                            </Link>
                          )}
                        </div>
                      </>
                    );

                    return p.slug ? (
                      <Link
                        key={p.id}
                        href={`/programs/${p.slug}`}
                        className="rounded-[10px] border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors block"
                      >
                        {CardContent}
                      </Link>
                    ) : (
                      <div
                        key={p.id}
                        className="rounded-[10px] border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
                      >
                        {CardContent}
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {filteredProgrammes.length === 0 && (
                <div className="mt-6 rounded-[10px] border border-white/10 bg-white/5 p-6 text-white/70">
                  No programmes match your search. Try a different keyword.
                </div>
              )}
            </div>
          </div>
        </div>
      </PageShell>
    </div>
  );
}