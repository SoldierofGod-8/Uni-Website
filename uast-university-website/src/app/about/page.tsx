import Link from "next/link";
import PageShell from "@/components/layout/pageShell";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <div className="inline-flex items-center gap-2 rounded-[10px] bg-green-600/20 border border-green-500/30 px-4 py-2">
            <span className="inline-block h-2 w-2 rounded-full bg-green-300" />
            <span className="text-green-200 font-semibold text-sm">ABOUT UAST IHUGH</span>
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-white">
            About the University
          </h1>

          {/* Description */}
          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
            The University of Agriculture, Science and Technology (UAST), Ihugh, in
            Benue State is designed as a specialized institution focused on modernizing
            agricultural education, boosting food security, and driving technological
            innovation.
          </p>

          {/* Vision & Mission */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5 md:p-6">
              <h2 className="text-white font-semibold text-lg">Vision</h2>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                To be a Centre of Excellence in Agriculture, Science and Technology, driving
                transformative learning, innovation, and research to foster a sustainably
                prosperous society.
              </p>
            </div>

            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5 md:p-6">
              <h2 className="text-white font-semibold text-lg">Mission</h2>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                To advance knowledge, innovation, and leadership through transformative
                education, high-relevance research, and community engagement, equipping
                learners with practical skills to address local challenges.
              </p>
            </div>
          </div>

          {/* VC Message */}
          <div className="mt-8 rounded-[10px] border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Text */}
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold text-white">Vice-Chancellor&apos;s Message</h2>
                <p className="mt-1 text-green-300 font-semibold">
                  Prof. Leonard Karshima Shilgba
                </p>

                <div className="mt-4 text-white/80 space-y-4 leading-relaxed">
                  <p>
                    The motto of University of Agriculture, Science and Technology
                    (UAST)—&apos;Imagine, Aspire, Innovate, Create&apos;—derives naturally from
                    the expertise and efforts of every member of its academic community
                    and dedication to service of its owner, the Benue State Government
                    in Nigeria.
                  </p>
                  <p>
                    At UAST, we believe in the role and significance of entrepreneurship
                    for personal development, and are aware how much this is important
                    for the nation&apos;s success. Our prominent and acknowledged faculty
                    are accessible to mentor and guide you through your studies. Here,
                    you will be given the support to develop your ideas, knowledge,
                    skills, and initiatives. Our aim is to help you understand and
                    prepare for the challenges in the world of agriculture, science,
                    technology, entrepreneurship, and public life, and how these
                    challenges can become opportunities for you to become a
                    problem-solver and benefactor of your community; to help you
                    develop into the nation&apos;s next generation of leaders and
                    entrepreneurs, and to assist you to become the driving forces for
                    shaping tomorrow&apos;s Benue State, Nigeria, Africa, and the world
                    toward positive transformative impact.
                  </p>
                  <p>
                    UAST supports a modern Nigerian-, European-, and American-inspired
                    curriculum with emphasis on skills acquisition, industry-readiness
                    and a must-learn focus on technology and its connectedness to
                    various fields of human adventure. Small class sizes and a
                    guaranteed uninterrupted academic calendar enable you to graduate
                    on schedule. You also have access to options to complete part of
                    your degree study at partner universities in Europe, the UK,
                    EURASIA, Russia, as well as the USA.
                  </p>
                  <p>
                    UAST offers a serene campus with areas for recreational and sports
                    activities. You will enjoy access to state-of-the-art information
                    technology resources in addition to an exclusive access to
                    exceptional agriculture, science, allied health, and ICT
                    laboratories, among others. Modern cafés, restaurants serving
                    Nigerian and international cuisine, comfortable en-suite hostels,
                    on-campus well-grassed football field, track and field athletics
                    facilities, tennis and basketball courts, as well as a health care
                    centre, are all provided on campus, with expansion undertakings.
                    UAST supports a Wi-Fi (wireless)-enabled campus, and your security
                    is guaranteed 24-hours-seven days a week, by well-trained and
                    equipped UAST Campus Police, Benue State Police and complementary
                    security architecture.
                  </p>
                  <p>
                    A university should not just be a place that provides textbook-based
                    education, same as a library is not simply a place where books are
                    neatly arranged on shelves! We are committed to providing you a
                    place where you will exchange ideas, views, and experiences with
                    fellow students, your professors, and many international experts.
                    At UAST, you will be part of a wider academic community that has its
                    basis on the common values of honesty, integrity, responsibility,
                    partnership, respect for diversity, professionalism, open-mindedness,
                    community involvement and globalisation engagement.
                  </p>
                  <p>
                    My colleagues and I look forward to helping you create your own
                    unique stories and many meaningful moments at UAST, which you will
                    be proud of.
                  </p>
                  <p>
                    Once again, you are highly welcome to University of Agriculture,
                    Science and Technology (UAST), Ihugh, Benue State, Nigeria.
                  </p>
                </div>
              </div>

              {/* VC Image */}
              <div className="flex-shrink-0 w-full md:w-64 lg:w-72">
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
        </div>

        {/* ── UAST STIP ── */}
        <div id="stip" className="mt-12 scroll-mt-24">
          {/* Hero Image */}
          <div className="rounded-[10px] border border-white/10 overflow-hidden">
            <img
              src="/Uni-Website/labs-hero.png"
              alt="UAST Science and Technology Innovation Park"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Section Header */}
          <div className="mt-8 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-[10px] bg-green-600/20 border border-green-500/30 px-4 py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-green-300" />
              <span className="text-green-200 font-semibold text-sm">INNOVATION PARK</span>
            </div>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
              UAST STIP (Science and Technology Innovation Park)
            </h2>

            <p className="mt-2 text-green-300 font-semibold text-sm uppercase tracking-wide">
              Digital Agriculture &bull; Artificial Intelligence &bull; Renewable Energy &bull; Smart Manufacturing &bull; Advanced Computing
            </p>

            <p className="mt-4 text-white/80 max-w-3xl leading-relaxed">
              Rather than building a conventional laboratory complex, UAST is establishing an
              integrated ecosystem for teaching, research, innovation, consultancy, and
              entrepreneurship. The UAST STIP is not a collection of isolated teaching
              laboratories — it is a Science and Technology Innovation Park where students,
              researchers, industry partners, and communities collaborate to solve real-world
              challenges in agriculture, science, engineering, computing, health sciences,
              environmental management, renewable energy, and applied mathematics.
            </p>

            <p className="mt-3 text-white/60 text-sm max-w-3xl leading-relaxed">
              Proposed building: Ground Floor 1,887 m&sup2; + First Floor 1,887 m&sup2; = Total
              3,774 m&sup2;. Housing 8 large laboratories (200 seating capacity each), 16
              operational offices, seminar areas, and technical rooms.
            </p>
          </div>

          {/* The 8 Innovation Centres */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-white mb-4">The 8 Innovation Centres</h3>
            <p className="text-white/70 mb-6 max-w-3xl leading-relaxed">
              No one laboratory is assigned to one department. The building is organized around
              research and innovation clusters, allowing every laboratory to serve multiple
              programmes. This aligns with the interdisciplinary UAST proprietary curricula.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Centre 1 */}
              <div className="rounded-[10px] border border-white/10 bg-white/5 p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center text-green-300 text-sm font-bold shrink-0">1</span>
                  <div>
                    <h4 className="text-white font-bold">Digital Agriculture Innovation Centre</h4>
                    <p className="mt-1 text-white/60 text-xs">Precision Agriculture + Drone Technology + GIS + Agro-Meteorology</p>
                  </div>
                </div>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Supports Water Resources, Forestry, Agribusiness, Agro-Economics, Food Science, AI, and Computer Science.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Agricultural Drones", "RTK GPS", "Weather Stations", "IoT Sensors", "GIS Workstations", "Precision Irrigation"].map((e) => (
                    <span key={e} className="text-[10px] text-white/50 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">{e}</span>
                  ))}
                </div>
              </div>

              {/* Centre 2 */}
              <div className="rounded-[10px] border border-white/10 bg-white/5 p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center text-green-300 text-sm font-bold shrink-0">2</span>
                  <div>
                    <h4 className="text-white font-bold">Food Innovation and Bioeconomy Centre</h4>
                    <p className="mt-1 text-white/60 text-xs">Agro-Processing + Food Science + Nutrition + Product Development</p>
                  </div>
                </div>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Supports Food Science, Nutrition, Public Health, and Agribusiness programmes.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Food Processing Line", "Pilot Processing Plant", "Packaging Equipment", "Fermentation Systems", "Quality Control"].map((e) => (
                    <span key={e} className="text-[10px] text-white/50 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">{e}</span>
                  ))}
                </div>
              </div>

              {/* Centre 3 */}
              <div className="rounded-[10px] border border-white/10 bg-white/5 p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center text-green-300 text-sm font-bold shrink-0">3</span>
                  <div>
                    <h4 className="text-white font-bold">Environmental, Water and Climate Systems Centre</h4>
                    <p className="mt-1 text-white/60 text-xs">Soil + Water + Environmental + Toxicology Laboratories</p>
                  </div>
                </div>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Supports Water Resources, Forestry, Environmental Science, and Public Health.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["ICP-OES", "GC-MS", "HPLC", "Water Analyzers", "Climate Sensors"].map((e) => (
                    <span key={e} className="text-[10px] text-white/50 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">{e}</span>
                  ))}
                </div>
              </div>

              {/* Centre 4 */}
              <div className="rounded-[10px] border border-white/10 bg-white/5 p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center text-green-300 text-sm font-bold shrink-0">4</span>
                  <div>
                    <h4 className="text-white font-bold">Artificial Intelligence and Data Science Centre</h4>
                    <p className="mt-1 text-white/60 text-xs">AI + Data Science + HPC + Mathematical Modelling</p>
                  </div>
                </div>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  The flagship laboratory. Supports all initial-offering 21 programmes.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["GPU Cluster", "AI Servers", "Data Warehouse", "Visualization Wall", "Cloud Computing"].map((e) => (
                    <span key={e} className="text-[10px] text-white/50 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">{e}</span>
                  ))}
                </div>
              </div>

              {/* Centre 5 */}
              <div className="rounded-[10px] border border-white/10 bg-white/5 p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center text-green-300 text-sm font-bold shrink-0">5</span>
                  <div>
                    <h4 className="text-white font-bold">Computing and Cyber Innovation Centre</h4>
                    <p className="mt-1 text-white/60 text-xs">Software Engineering + Cyber Security + Cryptography + Networking + Hardware</p>
                  </div>
                </div>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Supports Computer Science, Software Engineering, Data Science, and Industrial Mathematics.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Cyber Range", "FPGA Boards", "Networking Racks", "IoT Lab", "DevOps Servers"].map((e) => (
                    <span key={e} className="text-[10px] text-white/50 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">{e}</span>
                  ))}
                </div>
              </div>

              {/* Centre 6 */}
              <div className="rounded-[10px] border border-white/10 bg-white/5 p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center text-green-300 text-sm font-bold shrink-0">6</span>
                  <div>
                    <h4 className="text-white font-bold">Smart Engineering and Renewable Energy Centre</h4>
                    <p className="mt-1 text-white/60 text-xs">Industrial Physics + Renewable Energy + Electronics + Automation + Robotics</p>
                  </div>
                </div>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Supports Scientific Engineering, Industrial Physics, AI, and Agriculture.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Solar Systems", "Wind Turbines", "Battery Systems", "Robotics", "Embedded Systems", "EVs"].map((e) => (
                    <span key={e} className="text-[10px] text-white/50 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">{e}</span>
                  ))}
                </div>
              </div>

              {/* Centre 7 */}
              <div className="rounded-[10px] border border-white/10 bg-white/5 p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center text-green-300 text-sm font-bold shrink-0">7</span>
                  <div>
                    <h4 className="text-white font-bold">Biomedical and Life Sciences Innovation Centre</h4>
                    <p className="mt-1 text-white/60 text-xs">Molecular Biology + Diagnostics + Public Health + Genomics + Bioinformatics</p>
                  </div>
                </div>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Supports Medical Laboratory Science, Nutrition, Public Health, Food Science, Biotechnology, and Environmental Health.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["PCR Systems", "DNA Sequencer", "ELISA", "Flow Cytometer", "Biosafety Cabinets", "qPCR"].map((e) => (
                    <span key={e} className="text-[10px] text-white/50 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">{e}</span>
                  ))}
                </div>
              </div>

              {/* Centre 8 */}
              <div className="rounded-[10px] border border-white/10 bg-white/5 p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center text-green-300 text-sm font-bold shrink-0">8</span>
                  <div>
                    <h4 className="text-white font-bold">Earth Resources and Digital Geoscience Centre</h4>
                    <p className="mt-1 text-white/60 text-xs">Mining + Geology + GIS + Remote Sensing + Environmental Mapping</p>
                  </div>
                </div>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Supports Geology &amp; Mining, Water Resources, Forestry, Industrial Physics, Industrial Chemistry, and Renewable Energy.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Mine Simulator", "Core Scanners", "Rock Mechanics", "VR Mine", "3D Geological Modelling", "pXRF"].map((e) => (
                    <span key={e} className="text-[10px] text-white/50 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">{e}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Living Laboratory Campus */}
          <div className="mt-8 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-white">A &ldquo;Living Laboratory&rdquo; Campus</h3>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Beyond the building itself, UAST adopts the concept of a Living Laboratory
                  Campus. The entire university becomes an extension of the Innovation Park —
                  students are not confined to scheduled laboratory sessions; instead, they
                  learn continuously from a campus designed as an integrated experimental
                  environment.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "The campus solar farm serves as a teaching and research laboratory for renewable energy",
                    "Smart irrigation systems across demonstration farms become practical laboratories for Water Resources Management and Agro-Meteorology",
                    "IoT sensors installed around the campus feed live data to AI, Data Science, and Mathematical Modelling laboratories",
                    "Buildings become testbeds for energy efficiency and smart building management",
                    "Drone flight corridors support precision agriculture, forestry, and geospatial mapping",
                    "Waste recycling and biodigester systems become laboratories for circular bioeconomy and environmental sustainability",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/70 text-sm">
                      <span className="text-green-400 mt-1 text-xs">&#9679;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 w-full md:w-64 lg:w-72">
                <div className="rounded-[10px] border border-white/10 bg-white/5 overflow-hidden">
                  <img
                    src="/Uni-Website/Solar-Farm.jpg"
                    alt="UAST Living Laboratory Campus - Solar Farm"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 text-center">
                    <p className="text-white/60 text-xs">UAST Campus Solar Farm — a living laboratory</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STIP CTA */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/partnership"
              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              Partner on the STIP <span aria-hidden>→</span>
            </Link>
            <Link
              href="/endowment#laboratories"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
            >
              Endow a Laboratory
            </Link>
          </div>
        </div>

        {/* Next actions */}
        <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              Explore Programmes <span aria-hidden>→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </PageShell>
    </div>
  );
}