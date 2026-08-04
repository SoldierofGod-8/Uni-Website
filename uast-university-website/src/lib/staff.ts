export type StaffSection = {
  heading: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  afterBullets?: string[];
};

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  dept: string;
  image?: string;
  summary: string;
  featured?: boolean;
  website?: { links: { url: string; label: string }[] };
  sections?: StaffSection[];
  footerNote?: string;
};

export const staffMembers: StaffMember[] = [
  {
    id: "vice-chancellor",
    name: "Prof. Leonard Karshima Shilgba",
    role: "Acting Vice Chancellor",
    dept: "University of Agriculture, Science and Technology (UAST), Ihugh, Benue State, Nigeria",
    image: "/Uni-Website/Vice-Chancellor.jpeg",
    featured: true,
    summary:
      "Professor Leonard Karshima Shilgba is a Nigerian Professor of Mathematics, university administrator, scholar, author, educationist, and academic leader, and the Acting Vice Chancellor of the University of Agriculture, Science and Technology (UAST), Ihugh, Benue State, having been appointed by the Visitor of the University and Executive Governor of Benue State, His Excellency, Rev. Fr. Dr. Hyacinth Iormem Alia.",
    website: {
      links: [
        { url: "https://leonardshilgba.com/", label: "Personal Website" },
        {
          url: "https://www.researchgate.net/profile/Leonard-Shilgba",
          label: "ResearchGate Profile",
        },
        {
          url: "https://scholar.google.com/citations?user=m9umE4kAAAAJ&hl=en",
          label: "Google Scholar Profile",
        },
      ],
    },
    sections: [
      {
        heading: "Academic Background",
        paragraphs: [
          "Professor Shilgba began his professional education with a Nigeria Certificate in Education (NCE) from the Institute of Education, Ahmadu Bello University, Zaria, in 1989 with overall distinction in Mathematics. He subsequently obtained a Bachelor of Science (B.Sc.) degree in Mathematics from Ahmadu Bello University, Zaria, in 1993 after finishing top of his class in 1992, followed by a Master of Science (M.Sc.) degree in Mathematics from the same university in 1997 on a fellowship by his University as a Graduate Assistant.",
          "He proceeded to Yokohama National University, Japan, where he earned a Doctor of Philosophy (Ph.D.) in Mathematics in 2005, specializing in Dynamical Systems as a Monbusho Scholar under the Japanese Government sponsorship.",
          "His academic formation has also included advanced postdoctoral research experience. In 2009, he was awarded a Japan Student Services Organization (JASSO) Fellowship, through which he undertook postdoctoral research in Japan.",
          "In recognition of his commitment to the advancement of higher education and quality assurance, Professor Shilgba obtained a Certificate in AI and Quality Higher Education from VICBHE in 2024.",
        ],
      },
      {
        heading: "Academic Career",
        paragraphs: [
          "Professor Shilgba has served in several Nigerian universities and has risen through the academic ranks to become a Professor of Mathematics.",
          "His university career includes service at the American University of Nigeria, where he served in various academic capacities between 2006 and 2013. He subsequently joined Kwararafa University, Wukari as a Visiting Professor in the 2013/2014 academic session before proceeding to Federal University Otuoke, Bayelsa State, where he served as a Professor between 2014 and 2018.",
          "In 2018, he joined the Admiralty University of Nigeria (ADUN), as its pioneer academic staff where he has served as Professor of Mathematics and held several senior academic and administrative positions.",
        ],
        intro: "At ADUN, his responsibilities have included serving as:",
        bullets: [
          "Pioneering Acting Vice Chancellor/President, January–July 2019",
          "Pioneer Vice President for Academic Affairs, February 2019–2023",
          "Director, Academic Planning and Quality Assurance, July 2021–August 2023",
          "Member, Governing Council, from September 2021",
          "First elected Dean, Faculty of Science, in a two-year tenure preceding his appointment as Acting Vice Chancellor of UAST",
        ],
        afterBullets: [
          "These appointments have given him extensive experience in university governance, academic planning, curriculum development, quality assurance, institutional accreditation, staff development, academic administration and strategic university development.",
        ],
      },
      {
        heading: "Research and Scholarly Contributions",
        paragraphs: [
          "Professor Shilgba's primary academic field is Mathematics, with research interests in areas including Dynamical Systems, Hamiltonian Systems, Calculus of Variations, the Mountain Pass Theorem, Palais–Smale conditions, Sobolev Spaces and p-Laplacian problems.",
          "His scholarship combines theoretical mathematical research with a strong interest in the application of mathematics to scientific, technological and developmental problems.",
          "He has authored and co-authored numerous scholarly works and has written more than ten books, including his well-known Complete Calculus Series and Advancements in Hamiltonian Systems and Critical Points Theory which have contributed to mathematics teaching and learning at both undergraduate and graduate levels of tertiary education.",
          "His continuing research interests include the development of new mathematical ideas and methods, including work associated with Basket Residue Theory (BRT), which he developed recently (2026).",
          "Professor Shilgba has also supervised and mentored students and younger academics, and has contributed to professorial assessments and the development of curricula, teaching materials and academic programmes across several areas of university education.",
        ],
      },
      {
        heading: "University Administration and Academic Leadership",
        paragraphs: [
          "Professor Shilgba has extensive experience in the design and implementation of university academic systems. His administrative experience encompasses academic planning, curriculum development, quality assurance, accreditation, faculty administration, institutional policy, staff development and university governance.",
          "As Director of Academic Planning and Quality Assurance and as Vice President for Academic Affairs at ADUN, he was involved in matters relating to academic standards, programme development, quality assurance, academic calendars, curriculum implementation, and programmes accreditation and institutional compliance.",
          "His experience in university leadership has also included participation in strategic planning and institutional development at a period of significant transformation in Nigerian higher education.",
        ],
      },
      {
        heading: "Contribution to the Establishment of UAST, Ihugh",
        paragraphs: [
          "Prior to his appointment as Acting Vice Chancellor, Professor Shilgba was appointed Chairman of the University of Agriculture, Science and Technology, Ihugh Implementation Taskforce by the Governor of Benue State.",
          "In that capacity, he led multidisciplinary work aimed at preparing the University for effective take-off and the development of an institution capable of meeting the educational, scientific, technological and agricultural development needs of Benue State and Nigeria.",
          "His work on UAST has encompassed academic programmes and curriculum development, staffing and human-resource planning, infrastructure and facilities, partnerships and funding, academic quality assurance, institutional systems and strategic planning.",
          "Under the take-off planning process, particular attention has been given to the development of programmes aligned with the National Universities Commission (NUC) Core Curriculum and Minimum Academic Standards (CCMAS), while also developing institution-specific academic content intended to give UAST a distinctive identity.",
          "Professor Shilgba has also been involved in the development of academic recovery and transition arrangements, institutional structures, staffing plans, laboratory requirements, academic calendars and other foundational systems necessary for the emergence of UAST as a credible university.",
          "His appointment as Acting Vice Chancellor therefore places him in the unique position of moving from the planning and implementation phase into the leadership of the University's full institutional establishment and development.",
        ],
      },
      {
        heading: "Vision for UAST",
        paragraphs: [
          "As Acting Vice Chancellor, Professor Shilgba is expected to lead the development of UAST as a modern, innovative and development-oriented university with strong foundations in agriculture, science, technology and entrepreneurship.",
          "His academic and administrative philosophy emphasizes quality, innovation, integrity, relevance, interdisciplinarity, employability, research, and community impact.",
          "He believes that a contemporary university should not merely transmit knowledge but should also generate knowledge, solve problems, develop human capacity and contribute directly to the economic and technological transformation of its host community and society.",
          "The emerging vision for UAST places particular emphasis on the integration of agriculture, science, technology, digital innovation, entrepreneurship and sustainable development, with strong links between academic programmes, research and the practical needs of society.",
        ],
      },
      {
        heading: "Professional and Educational Leadership",
        paragraphs: [
          "Beyond conventional university administration, Professor Shilgba has maintained a longstanding interest in the advancement of education at different levels.",
          "He is the founder of BCM Shilgba Academy, a K–12 educational institution established in 2013, reflecting his commitment to broad-based education and human-capital development.",
          "He has also contributed to academic and educational development through teaching, curriculum design, scholarly writing, mentoring and institutional leadership.",
        ],
      },
      {
        heading: "Service and Leadership",
        paragraphs: [
          "Professor Shilgba's career reflects a combination of scholarship, university administration, educational entrepreneurship and public service.",
          "His leadership experience includes service in university management, academic planning, quality assurance, faculty administration and university governance. He has also participated in initiatives directed at strengthening higher education institutions, developing academic programmes and improving institutional systems.",
          "He is widely interested in the role of higher education as an instrument for human-capital development, scientific advancement, technological innovation and sustainable socio-economic transformation.",
          "In 2017, President Buhari appointed Professor Shilgba as the Chairman of the 9th Governing Board of the National Business and Technical Examinations Board (NABTEB), where he served with vision, distinction, and uncompromising disposition.",
        ],
      },
      {
        heading: "Personal and Professional Philosophy",
        paragraphs: [
          "Professor Shilgba is committed to the ideals of academic excellence, institutional integrity, responsible leadership, merit, innovation and service to society.",
          "His approach to university leadership is founded on the conviction that institutions of higher learning must be built on sound governance, credible academic standards, transparent systems, strong human resources and a culture of continuous improvement.",
          "He sees the establishment of UAST, Ihugh, as an opportunity to build, from the ground up, a university that is academically credible, technologically relevant, globally connected and firmly rooted in the developmental needs of Benue State and Nigeria.",
        ],
      },
      {
        heading: "Appointment as Acting Vice Chancellor",
        paragraphs: [
          "Professor Leonard Karshima Shilgba was appointed Acting Vice Chancellor of the University of Agriculture, Science and Technology, Ihugh, Benue State, by the Visitor of the University and Executive Governor of Benue State, His Excellency, Rev. Fr. Dr. Hyacinth Iormem Alia.",
          "His appointment brings to the leadership of the young university a scholar with extensive experience in mathematics and scientific research, university teaching, academic planning, quality assurance, curriculum development, university governance, institutional development and higher-education administration.",
          "As Acting Vice Chancellor, Professor Shilgba assumes responsibility for leading UAST through the critical formative years of its development, with the objective of establishing a strong institutional foundation upon which future generations of students, scholars and researchers can build.",
        ],
      },
      {
        heading: "Selected Academic Qualifications",
        bullets: [
          "Ph.D. Mathematics (Dynamical Systems) — Yokohama National University, Japan, 2005",
          "M.Sc. Mathematics — Ahmadu Bello University, Zaria, 1997",
          "B.Sc. (Hons.) Mathematics — Ahmadu Bello University, Zaria, 1993",
          "NCE — Institute of Education, Ahmadu Bello University, Zaria, 1989",
          "JASSO Postdoctoral Research Fellowship — Japan, 2009",
          "Certificate in AI & Quality Higher Education, VICBHE — 2024, Distinction in capstone project",
        ],
      },
      {
        heading: "Selected Areas of Expertise",
        paragraphs: [
          "Mathematics • Dynamical Systems • Hamiltonian Systems • Calculus of Variations • Functional Analysis • Mathematical Analysis • Academic Planning • Quality Assurance • Curriculum Development • University Governance • Higher-Education Administration • Institutional Development",
        ],
      },
    ],
    footerNote:
      "Professor Leonard Karshima Shilgba is married to Engr. Oluwakemi Temitope Shilgba and is blessed with three children—Winnie, Mabel, and Leonard Jr. He is a Christian minister and educationist, and remains committed to the ideals of scholarship, service, faith, leadership and the development of human capacity.",
  },
  {
    id: "registrar",
    name: "Dr Johnson Ijale Echor",
    role: "Pioneer Registrar",
    dept: "University of Agriculture, Science and Technology (UAST), Ihugh, Vandeikya, Benue State",
    image: "/Uni-Website/Registrar.png",
    featured: true,
    summary:
      "Dr Johnson Ijale Echor is a Nigerian University Administrator and a Public Administration professional who is currently serving as the Registrar of the University of Agriculture Science and Technology, Ihugh, Vandeikya, in Benue State.",
    sections: [
      {
        heading: "Professional Experience",
        paragraphs: [
          "He previously served as the Deputy Registrar and Secretary, Academic Planning and Quality Assurance at Benue State University (now Rev Fr Moses Orshio Adasu University), Makurdi, where he contributed to academic planning, institutional accreditation, quality assurance and university governance.",
        ],
      },
      {
        heading: "Education and Academic Interests",
        paragraphs: [
          "Dr Echor holds a Bachelor's degree in Theatre Arts, Master's degrees in Theatre Arts and Public Administration from Benue State University and pursued a Doctoral degree in Public Administration at the University of Nigeria, Nsukka. His academic interest includes public administration, governance, electronic governance and public service delivery.",
        ],
      },
      {
        heading: "Professional Memberships",
        paragraphs: [
          "Dr Johnson Ijale Echor is a member of the Association of Nigerian University Professional Administrators (ANUPA), Nigerian Institute of Management (NIM), African Association of Public Administration and Management (AAPAM) and the Association of University Administration (now Association of Higher Education Practitioners) of the United Kingdom. He is a dedicated university administrator whose career has focused on strengthening higher education management, institutional quality assurance and effective public administration in Nigeria.",
        ],
      },
    ],
  },
  {
    id: "placeholder-1",
    name: "Prof. Placeholder",
    role: "Key Academic Staff (Coming soon)",
    dept: "Department/College (To be confirmed)",
    summary:
      "Profile details for this role will be published as soon as verified operational information is available.",
  },
  {
    id: "placeholder-2",
    name: "Dr. Placeholder",
    role: "Senior Lecturer (Coming soon)",
    dept: "Department/College (To be confirmed)",
    summary:
      "Profile details for this role will be published as soon as verified operational information is available.",
  },
  {
    id: "placeholder-3",
    name: "Lecturer Placeholder",
    role: "Lecturer (Coming soon)",
    dept: "Department/College (To be confirmed)",
    summary:
      "Profile details for this role will be published as soon as verified operational information is available.",
  },
  {
    id: "placeholder-4",
    name: "Research Lead Placeholder",
    role: "Research Lead (Coming soon)",
    dept: "Department/College (To be confirmed)",
    summary:
      "Profile details for this role will be published as soon as verified operational information is available.",
  },
];
