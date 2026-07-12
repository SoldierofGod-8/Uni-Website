export type ProgrammeDetail = {
  slug: string;
  programmeId: string;
  name: string;
  school: string;
  overview: string;
  distinctiveness: { heading: string; body: string }[];
  competencies: string[];
  structure: { year: string; title: string; courses: string[] }[];
  careers: { sector: string; description: string }[];
  fastTrack: string;
};

export const programmeDetails: ProgrammeDetail[] = [
  {
    slug: "environmental-management-and-toxicology",
    programmeId: "sci-5",
    name: "B.Sc. Environmental Management and Toxicology",
    school: "School of Science and Technology",
    overview:
      "The Environmental Management and Toxicology programme at the University of Agriculture, Science and Technology, Ihugh (UAST) consists of a comprehensive undergraduate education in the environmental sciences, integrating toxicology, ecology, public health, geospatial technologies, environmental biotechnology, climate science, environmental law, and sustainability management. For students in the programme, a core learning objective is building and demonstrating foundational competencies in environmental toxicology, pollution assessment, risk analysis, environmental monitoring, and sustainable resource management through the successful completion of rigorous coursework, laboratory investigations, field studies, and a capstone research project. Students are also prepared for professional practice in environmental consulting, regulatory agencies, industry, research institutions, and international development organizations.",
    distinctiveness: [
      {
        heading: "A Curriculum Benchmark Internationally",
        body: "The UAST Environmental Management and Toxicology curriculum is benchmarked against leading environmental science and toxicology programmes at institutions including Harvard T.H. Chan School of Public Health, Johns Hopkins Bloomberg School of Public Health, University of California-Davis, Wageningen University & Research, Imperial College London, and University of Queensland, while addressing environmental challenges specific to Nigeria and Africa.",
      },
      {
        heading: "A Programme Rooted in National Priorities",
        body: "While maintaining international standards, the programme equips graduates to address Nigeria's most pressing environmental challenges: petroleum pollution, artisanal and industrial mining impacts, pesticide contamination, industrial emissions, e-waste, deforestation, flooding, erosion, and environmental health inequities affecting vulnerable communities.",
      },
      {
        heading: "Integrated with National Academic Standards",
        body: "The programme is structured around the National Universities Commission (NUC) Core Curriculum and Minimum Academic Standards (CCMAS), with a distinctive 30% UAST proprietary component that substantially strengthens competencies in environmental toxicology, ecotoxicology, industrial and occupational toxicology, environmental risk assessment, GIS and remote sensing, environmental informatics, environmental artificial intelligence, environmental biotechnology, climate change adaptation, environmental forensics, ESG reporting, green innovation, circular bioeconomy, professional practice, and capstone research.",
      },
    ],
    competencies: [
      "Environmental toxicology and human health risk assessment",
      "Ecotoxicology and ecosystem health evaluation",
      "Industrial and occupational toxicology for workplace safety",
      "Environmental risk assessment and chemical safety management",
      "GIS, remote sensing, and environmental informatics",
      "Environmental artificial intelligence and smart monitoring systems",
      "Environmental biotechnology and bioremediation techniques",
      "Climate change adaptation and carbon management",
      "Environmental forensics and pollution source identification",
      "Environmental governance, law, and ESG reporting",
      "Green innovation, circular bioeconomy, and entrepreneurship",
      "Professional practice and independent research",
    ],
    structure: [
      {
        year: "Year One",
        title: "Foundations",
        courses: [
          "Introduction to Environmental Management and Toxicology",
          "Environmental Observation, Field Techniques and Scientific Communication",
          "Digital Environmental Skills, GIS Fundamentals and Environmental Data Literacy",
          "Sustainable Development, Environmental Ethics and Circular Economy",
        ],
      },
      {
        year: "Year Two",
        title: "Core Environmental Competencies",
        courses: [
          "Principles of Environmental Toxicology",
          "Environmental Pollution Monitoring and Instrumentation",
          "Geospatial Analysis and Environmental Remote Sensing",
          "Environmental Statistics, Modelling and Decision Support",
        ],
      },
      {
        year: "Year Three",
        title: "Advanced Environmental Management and Toxicology",
        courses: [
          "Ecotoxicology and Environmental Health",
          "Environmental Risk Assessment and Chemical Safety",
          "Environmental Biotechnology, Bioremediation and Restoration Ecology",
          "Climate Change Adaptation, Carbon Management and Nature-Based Solutions",
          "Environmental Forensics, Compliance and ESG Reporting",
        ],
      },
      {
        year: "Year Four",
        title: "Professional Specialization",
        courses: [
          "Industrial Toxicology and Occupational Environmental Health",
          "Advanced Environmental Impact Assessment and Strategic Environmental Assessment",
          "Integrated Environmental Management Systems, ISO 14001 and Sustainability Auditing",
          "Environmental Modelling, Artificial Intelligence and Smart Environmental Systems",
        ],
      },
      {
        year: "Year Five",
        title: "Leadership and Research",
        courses: [
          "Advanced Environmental Governance, Environmental Law and Regulatory Toxicology",
          "Green Innovation, Circular Bioeconomy and Environmental Entrepreneurship",
          "Emerging Environmental Technologies and Professional Practice",
          "Environmental Management and Toxicology Capstone Project",
        ],
      },
    ],
    careers: [
      {
        sector: "Environmental Consulting Firms",
        description: "Environmental impact assessment, risk assessment, compliance auditing, and remediation services",
      },
      {
        sector: "Government Regulatory Agencies",
        description: "Environmental protection, pollution control, and natural resource management",
      },
      {
        sector: "Petroleum and Mining Industries",
        description: "Environmental management, occupational health, and regulatory compliance",
      },
      {
        sector: "Manufacturing and Industrial Sectors",
        description: "Environmental management systems, sustainability reporting, and pollution prevention",
      },
      {
        sector: "International Development Organizations",
        description: "Climate change adaptation, environmental health, and sustainable development programmes",
      },
      {
        sector: "Research and Academic Institutions",
        description: "Environmental science, toxicology, and sustainability research",
      },
      {
        sector: "Non-Governmental Organizations",
        description: "Environmental advocacy, community engagement, and conservation programmes",
      },
      {
        sector: "Entrepreneurship and Green Innovation",
        description: "Environmental technology enterprises, circular economy ventures, and sustainability consulting",
      },
    ],
    fastTrack:
      "Qualified students are eligible for accelerated pathways, including the opportunity to progress to postgraduate research or professional practice through advanced course placements, industrial internships, and research assistantships.",
  },
];

export function getProgrammeDetailBySlug(slug: string): ProgrammeDetail | undefined {
  return programmeDetails.find((p) => p.slug === slug);
}

export function getProgrammeSlugs(): string[] {
  return programmeDetails.map((p) => p.slug);
}
