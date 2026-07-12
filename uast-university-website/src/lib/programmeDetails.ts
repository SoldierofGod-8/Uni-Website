export type FastTrackItem = { heading?: string; items: string[] };

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
  fastTrack: string | FastTrackItem[];
};

export const programmeDetails: ProgrammeDetail[] = [
  // ── School of Agriculture ──────────────────────────────────────────────
  {
    slug: "food-science-and-technology",
    programmeId: "agri-1",
    name: "B.Sc. Food Science and Technology",
    school: "School of Agriculture",
    overview:
      "The Food Science and Technology programme at the University of Agriculture, Science and Technology, Ihugh (UAST) consists of a comprehensive undergraduate education in the scientific, technological, and managerial aspects of food production, processing, quality assurance, and innovation. For students in the programme, a core learning objective is building and demonstrating foundational competencies in food chemistry, microbiology, engineering, processing, nutrition, food safety systems, and sustainable manufacturing through the successful completion of rigorous coursework, laboratory investigations, industrial experiences, and a capstone professional integration project. Students are also eligible for advanced professional pathways, including postgraduate research, industry leadership, and entrepreneurial ventures in the global food sector.",
    distinctiveness: [
      {
        heading: "A Curriculum Benchmark Internationally",
        body: "The UAST Food Science and Technology curriculum is benchmarked against leading food science programmes at institutions including Wageningen University & Research, Cornell University, University of California-Davis, and University of Reading, while addressing food security, processing, and value-addition challenges specific to Nigeria and Africa.",
      },
      {
        heading: "A Programme Rooted in National Priorities",
        body: "While maintaining international standards, the programme equips graduates to address Nigeria's most pressing food system challenges: post-harvest losses, food safety, food fortification, export competitiveness, sustainable processing, climate-resilient food production, and food entrepreneurship.",
      },
      {
        heading: "Integrated with National Academic Standards",
        body: "The programme is structured around the National Universities Commission (NUC) Core Curriculum and Minimum Academic Standards (CCMAS), with a distinctive 30% UAST proprietary component that substantially strengthens competencies in digital food analytics, artificial intelligence in food manufacturing, smart food factories, functional foods and nutraceuticals, food supply chain management, food entrepreneurship, sustainable food processing, international food trade, food industry consultancy, and executive leadership.",
      },
    ],
    competencies: [
      "Food Systems and Value Chain Analysis",
      "Food Chemistry and Product Development",
      "Food Microbiology and Safety Systems",
      "Food Process Engineering and Technology",
      "Digital Transformation and Smart Manufacturing",
      "Food Data Analytics and Statistical Computing",
      "Sustainable Food Processing",
      "Food Entrepreneurship and Innovation",
      "International Food Trade and Regulatory Affairs",
      "Executive Leadership and Corporate Governance",
    ],
    structure: [
      {
        year: "Year One",
        title: "Foundations",
        courses: [
          "Introduction to Food Systems and the Food Industry",
          "Digital Literacy and ICT Applications in Food Science",
          "Professional Communication and Scientific Writing",
          "Climate Change, Food Security and Sustainable Food Systems",
        ],
      },
      {
        year: "Year Two",
        title: "Analytical Foundations",
        courses: [
          "Food Data Analytics and Statistical Computing",
          "Food Supply Chain Management and Digital Traceability",
          "Programming Fundamentals for Food Science Applications",
          "Food Product Innovation and Design Thinking",
          "Research Methods and Experimental Design in Food Science",
        ],
      },
      {
        year: "Year Three",
        title: "Core Emerging Technologies",
        courses: [
          "Artificial Intelligence and Smart Food Manufacturing",
          "Functional Foods, Nutraceuticals and Personalized Nutrition",
          "Food Entrepreneurship, Innovation and Venture Development",
          "Food Safety Management Systems, HACCP and Global Standards",
          "Sustainable Food Processing, Circular Bioeconomy and Green Manufacturing",
        ],
      },
      {
        year: "Year Four",
        title: "Advanced Industrial Applications",
        courses: [
          "Food Industry Consultancy and Project Management",
          "Smart Food Factories, Automation and Digital Transformation",
          "Food Business Strategy, International Trade and Regulatory Affairs",
          "Leadership, Quality Culture and Food Industry Governance",
          "Professional Practice and Contemporary Issues in Food Science",
        ],
      },
      {
        year: "Year Five",
        title: "Executive and Professional Integration",
        courses: [
          "Advanced Food Quality Systems, Accreditation and Laboratory Management",
          "Strategic Innovation, Technology Transfer and Commercialization",
          "Emerging Food Technologies and Future Food Systems",
          "Executive Leadership in Food Enterprises",
          "Capstone Professional Integration and Industry Futures",
        ],
      },
    ],
    careers: [
      { sector: "Food Manufacturing Industries", description: "Production management, quality assurance, product development, and process optimization" },
      { sector: "Government Regulatory Agencies", description: "NAFDAC, SON, Federal Ministry of Agriculture, and state food safety agencies" },
      { sector: "Export and International Trade", description: "Quality compliance, export documentation, and international market access" },
      { sector: "Research and Academic Institutions", description: "Food science research, product innovation, and postgraduate studies" },
      { sector: "Food Safety Consultancy", description: "HACCP implementation, auditing, and food safety management systems" },
      { sector: "Agribusiness and Supply Chain Management", description: "Logistics, procurement, and traceability systems" },
      { sector: "Food Entrepreneurship", description: "Establishing food processing enterprises and value-added food businesses" },
      { sector: "Nutrition and Public Health Organizations", description: "Nutrition programmes and food fortification initiatives" },
      { sector: "International Development Organizations", description: "Food security, sustainable agriculture, and nutrition programmes" },
    ],
    fastTrack: [
      { heading: "Industrial Training (SIWES)", items: ["Supervised internships in food manufacturing, quality assurance laboratories, and regulatory agencies"] },
      { heading: "Professional Certifications", items: ["Preparation for certifications including HACCP, ISO 22000, and food safety auditing"] },
      { heading: "Entrepreneurship Incubation", items: ["Access to food pilot plants, innovation hubs, and business incubation services"] },
      { heading: "Postgraduate Pathways", items: ["Progression to M.Sc. and Ph.D. programmes in Food Science, Food Technology, and related disciplines"] },
    ],
  },
  {
    slug: "agro-economics-and-farm-management",
    programmeId: "agri-2",
    name: "B.Sc. Agro-Economics and Farm Management",
    school: "School of Agriculture",
    overview:
      "The Agro-Economics and Farm Management programme at the University of Agriculture, Science and Technology, Ihugh (UAST) consists of a comprehensive undergraduate education in the economic, financial, managerial, and technological dimensions of agricultural production, farm enterprise development, agribusiness management, and food systems. For students in the programme, a core learning objective is building and demonstrating foundational competencies in agricultural economics, farm business management, agricultural finance, commodity market analysis, policy evaluation, data analytics, and sustainable enterprise development through the successful completion of rigorous coursework, field investigations, business simulations, and a capstone professional integration project. Students are also eligible for accelerated professional pathways, including postgraduate research, industry leadership, consultancy practice, and entrepreneurial ventures in the agricultural sector.",
    distinctiveness: [
      {
        heading: "A Curriculum Benchmark Internationally",
        body: "The UAST Agro-Economics and Farm Management curriculum is benchmarked against leading agricultural economics and farm management programmes at institutions including Wageningen University & Research, Cornell University, University of California-Davis, and University of Reading, while addressing agricultural production systems, market dynamics, and rural enterprise challenges specific to Nigeria and Africa.",
      },
      {
        heading: "A Programme Rooted in National Priorities",
        body: "While maintaining international standards, the programme equips graduates to address Nigeria's most pressing agricultural economic challenges: farm productivity and profitability, agricultural finance and financial inclusion, commodity market development, value chain competitiveness, agricultural policy formulation, climate-smart investment, export development under AfCFTA, and sustainable agricultural transformation.",
      },
      {
        heading: "Integrated with National Academic Standards",
        body: "The programme is structured around the National Universities Commission (NUC) Core Curriculum and Minimum Academic Standards (CCMAS), with a distinctive 30% UAST proprietary component that substantially strengthens competencies in agricultural data analytics, programming for agro economists, artificial intelligence for decision support, agricultural finance and investment analysis, commodity market forecasting, agricultural policy analysis and economic modelling, precision agriculture economics, sustainable agribusiness and circular bioeconomy, AfCFTA and global value chains, agribusiness consultancy, project management, leadership, and professional practice.",
      },
    ],
    competencies: [
      "Agro-Economic Analysis",
      "Farm Business Management",
      "Agricultural Data Analytics",
      "Programming and Computational Economics",
      "Artificial Intelligence for Decision Support",
      "Agricultural Finance and Investment Analysis",
      "Commodity Market Analysis and Price Forecasting",
      "Agricultural Policy Analysis and Economic Modelling",
      "Precision Agriculture Economics",
      "International Agricultural Trade and AfCFTA",
      "Sustainable Agribusiness and Circular Bioeconomy",
      "Agribusiness Consultancy and Project Management",
      "Leadership and Corporate Governance",
    ],
    structure: [
      {
        year: "Year One",
        title: "Foundations",
        courses: [
          "Introduction to Agro Economics, Farm Management and Food Systems",
          "Digital Literacy and ICT Applications in Agro Economics",
          "Professional Communication and Scientific Writing",
          "Climate Change, Food Security and Sustainable Agricultural Development",
          "Entrepreneurship Mindset and Innovation in Agriculture",
        ],
      },
      {
        year: "Year Two",
        title: "Analytical and Digital Foundations",
        courses: [
          "Agricultural Data Analytics and Decision Support",
          "Programming for Agro Economists",
          "Agricultural Value Chain Analysis and Market Intelligence",
          "Agribusiness Innovation and Design Thinking",
          "Research Methods and Experimental Design in Agro Economics and Farm Management",
        ],
      },
      {
        year: "Year Three",
        title: "Core Emerging Competencies",
        courses: [
          "Artificial Intelligence for Agricultural Decision Support",
          "Agricultural Finance and Investment Analysis",
          "Commodity Markets and Price Forecasting",
          "Agricultural Policy Analysis and Economic Modelling",
          "Sustainable Agribusiness, Climate Finance and Circular Bioeconomy",
        ],
      },
      {
        year: "Year Four",
        title: "Advanced Professional Integration",
        courses: [
          "Agribusiness Consultancy and Project Management",
          "Precision Agriculture Economics and Digital Agriculture",
          "International Agricultural Trade, AfCFTA and Global Value Chains",
          "Leadership, Corporate Governance and Strategic Agribusiness Management",
          "Professional Practice and Contemporary Issues in Agro Economics and Farm Management",
        ],
      },
    ],
    careers: [
      { sector: "Agricultural Financial Institutions", description: "Agricultural banking, investment analysis, credit evaluation, and financial inclusion programmes" },
      { sector: "Government Ministries and Agencies", description: "Agricultural policy analysis, economic planning, commodity regulation, and trade promotion" },
      { sector: "International Organizations", description: "FAO, World Bank, IFAD, UNDP, and regional development banks" },
      { sector: "Agribusiness Enterprises", description: "Farm management, agribusiness strategy, supply chain economics, and business development" },
      { sector: "Commodity Marketing and Trading Firms", description: "Market analysis, price forecasting, and commodity trading" },
      { sector: "Agricultural Consultancy", description: "Feasibility studies, investment advisory, policy analysis, and project evaluation" },
      { sector: "Research and Academic Institutions", description: "Agricultural economics research, postgraduate studies, and teaching" },
      { sector: "Development Finance Institutions", description: "Project appraisal, impact assessment, and development programme management" },
      { sector: "Agritech and Digital Agriculture Firms", description: "Precision agriculture economics, digital farm management, and data analytics" },
      { sector: "Non-Governmental Organizations", description: "Agricultural development, food security, and sustainable livelihood programmes" },
    ],
    fastTrack: [
      { heading: "Industrial Training (SIWES)", items: ["Supervised internships in agricultural finance institutions, commodity exchanges, government agencies, and consultancy firms"] },
      { heading: "Professional Certifications", items: ["Preparation for certifications in project management, financial analysis, and data analytics"] },
      { heading: "Entrepreneurship Incubation", items: ["Access to agribusiness innovation hubs and enterprise development support"] },
      { heading: "Postgraduate Pathways", items: ["Progression to M.Sc. and Ph.D. programmes in Agricultural Economics, Agribusiness, Development Economics, and related disciplines"] },
    ],
  },
  {
    slug: "agricultural-extension-and-rural-sociology",
    programmeId: "agri-3",
    name: "B.Sc. Agricultural Extension and Rural Sociology",
    school: "School of Agriculture",
    overview:
      "The Agricultural Extension and Rural Sociology programme at the University of Agriculture, Science and Technology, Ihugh (UAST) consists of a comprehensive undergraduate education in the facilitation of agricultural innovation, community development, rural transformation, and sustainable livelihoods. For students in the programme, a core learning objective is building and demonstrating foundational competencies in agricultural extension methodologies, rural sociology, communication strategies, innovation systems, programme management, and digital advisory services through the successful completion of rigorous coursework, field investigations, community engagement, and a capstone professional integration project. Students are also eligible for accelerated professional pathways, including postgraduate research, development practice, policy advocacy, and entrepreneurial ventures in the agricultural development sector.",
    distinctiveness: [
      {
        heading: "A Curriculum Benchmark Internationally",
        body: "The UAST Agricultural Extension and Rural Sociology curriculum is benchmarked against leading extension and rural development programmes at institutions including Wageningen University & Research, Cornell University, University of Reading, and University of California-Davis, while addressing rural development, agricultural innovation, and community transformation challenges specific to Nigeria and Africa.",
      },
      {
        heading: "A Programme Rooted in National Priorities",
        body: "While maintaining international standards, the programme equips graduates to address Nigeria's most pressing rural development challenges: agricultural technology adoption, climate adaptation, food security, rural entrepreneurship, farmer–herder conflicts, natural resource governance, youth engagement in agriculture, gender equity, and sustainable rural livelihoods.",
      },
      {
        heading: "Integrated with National Academic Standards",
        body: "The programme is structured around the National Universities Commission (NUC) Core Curriculum and Minimum Academic Standards (CCMAS), with a distinctive 30% UAST proprietary component that substantially strengthens competencies in digital agricultural extension, artificial intelligence and advisory services, GIS and participatory rural resource mapping, rural data analytics, climate-smart extension, agricultural innovation systems, social and behaviour change communication, monitoring and evaluation, agricultural policy advocacy, smart rural development, e-governance, consultancy, and professional practice.",
      },
    ],
    competencies: [
      "Agricultural Innovation Systems",
      "Digital Agricultural Extension",
      "Artificial Intelligence and Advisory Services",
      "GIS and Participatory Rural Resource Mapping",
      "Rural Data Analytics",
      "Climate-Smart Extension",
      "Agricultural Innovation and Value Chain Development",
      "Social and Behaviour Change Communication",
      "Monitoring, Evaluation and Impact Assessment",
      "Agricultural Policy Communication and Advocacy",
      "Extension Leadership and Conflict Management",
      "Smart Rural Development and E-Governance",
      "Consultancy and Project Management",
    ],
    structure: [
      {
        year: "Year One",
        title: "Foundations",
        courses: [
          "Introduction to Agricultural Innovation Systems",
          "Digital Literacy and ICT for Agricultural Extension",
          "Communication Skills for Extension Professionals",
          "Agriculture, Climate Change and Sustainable Rural Development",
        ],
      },
      {
        year: "Year Two",
        title: "Analytical and Digital Foundations",
        courses: [
          "Digital Agricultural Extension Methods",
          "Rural Data Analytics and Survey Design",
          "GIS and Participatory Rural Resource Mapping",
          "Programming Fundamentals for Agricultural Data Analysis",
          "Research Methods in Agricultural Extension and Rural Sociology",
        ],
      },
      {
        year: "Year Three",
        title: "Core Emerging Competencies",
        courses: [
          "Artificial Intelligence and Digital Advisory Services in Agriculture",
          "Climate-Smart Extension and Community Resilience",
          "Agricultural Innovation, Entrepreneurship and Value Chain Development",
          "Social and Behaviour Change Communication and Development Facilitation",
          "Monitoring, Evaluation and Impact Assessment of Rural Development Programmes",
        ],
      },
      {
        year: "Year Four",
        title: "Advanced Professional Integration",
        courses: [
          "Agricultural Policy Communication and Advocacy",
          "Extension Leadership, Conflict Management and Community Negotiation",
          "Smart Rural Development Systems and E-Governance",
          "Agricultural Consultancy, Agritech Entrepreneurship and Project Management",
          "Professional Practice and Contemporary Issues in Agricultural Extension",
        ],
      },
    ],
    careers: [
      { sector: "Government Extension Services", description: "Federal, state, and local government agricultural extension departments" },
      { sector: "International Development Organizations", description: "FAO, UNDP, World Bank, IFAD, and bilateral development agencies" },
      { sector: "Non-Governmental Organizations", description: "Agricultural development, food security, and rural livelihood programmes" },
      { sector: "Agricultural Research Institutes", description: "Technology transfer, farmer participatory research, and innovation platforms" },
      { sector: "Agribusiness and Private Sector", description: "Agricultural advisory services, market linkage facilitation, and value chain development" },
      { sector: "Monitoring and Evaluation Consultancy", description: "Programme evaluation, impact assessment, and results-based management" },
      { sector: "Climate Adaptation and Resilience Programmes", description: "Climate-smart agriculture, disaster risk reduction, and community resilience" },
      { sector: "Agricultural Policy and Advocacy", description: "Policy analysis, advocacy campaigns, and stakeholder engagement" },
      { sector: "Agritech and Digital Extension Platforms", description: "Digital advisory services, mobile applications, and e-extension systems" },
      { sector: "Postgraduate Studies", description: "M.Sc. and Ph.D. programmes in Agricultural Extension, Rural Sociology, Development Studies, and related fields" },
    ],
    fastTrack: [
      { heading: "Industrial Training (SIWES)", items: ["Supervised internships in extension agencies, development organizations, and agritech firms"] },
      { heading: "Professional Certifications", items: ["Preparation for certifications in project management, monitoring and evaluation, and development practice"] },
      { heading: "Entrepreneurship Incubation", items: ["Access to agritech innovation hubs and enterprise development support"] },
      { heading: "Postgraduate Pathways", items: ["Progression to M.Sc. and Ph.D. programmes in Agricultural Extension, Rural Development, Development Studies, and related disciplines"] },
    ],
  },
  {
    slug: "agribusiness",
    programmeId: "agri-4",
    name: "B.Sc. Agribusiness",
    school: "School of Agriculture",
    overview:
      "The Agribusiness programme at the University of Agriculture, Science and Technology, Ihugh (UAST) consists of a comprehensive undergraduate education in the business, financial, technological, and managerial aspects of agricultural value chains, food systems, and rural enterprise development. For students in the programme, a core learning objective is building and demonstrating foundational competencies in agribusiness management, agricultural finance, supply chain management, marketing analytics, business intelligence, and sustainable enterprise development through the successful completion of rigorous coursework, field investigations, business simulations, and a capstone professional integration project. Students are also eligible for accelerated professional pathways, including postgraduate research, industry leadership, and entrepreneurial ventures in the global agrifood sector.",
    distinctiveness: [
      {
        heading: "A Curriculum Benchmark Internationally",
        body: "The UAST Agribusiness curriculum is benchmarked against leading agribusiness and agricultural economics programmes at institutions including Wageningen University & Research, Cornell University, University of California-Davis, and University of Reading, while addressing agricultural value chains, market systems, and enterprise development challenges specific to Nigeria and Africa.",
      },
      {
        heading: "A Programme Rooted in National Priorities",
        body: "While maintaining international standards, the programme equips graduates to address Nigeria's most pressing agribusiness challenges: post-harvest losses, agricultural finance and financial inclusion, market access, value addition, export competitiveness, digital transformation, sustainable agriculture, and rural enterprise development.",
      },
      {
        heading: "Integrated with National Academic Standards",
        body: "The programme is structured around the National Universities Commission (NUC) Core Curriculum and Minimum Academic Standards (CCMAS), with a distinctive 30% UAST proprietary component that substantially strengthens competencies in agribusiness data analytics, artificial intelligence and decision support, agricultural finance and FinTech, digital supply chain management, international agricultural trade, agritech entrepreneurship, ESG and carbon economy, business strategy, corporate governance, consultancy, and professional practice.",
      },
    ],
    competencies: [
      "Agribusiness Systems and Value Chain Analysis",
      "Business Intelligence and Data Analytics",
      "Agricultural Marketing and Consumer Behaviour",
      "Digital Supply Chain Management",
      "Agricultural Finance and FinTech",
      "Agritech Entrepreneurship and Innovation",
      "International Agricultural Trade",
      "Sustainability and ESG",
      "Strategic Management and Governance",
      "Consultancy and Project Management",
    ],
    structure: [
      {
        year: "Year One",
        title: "Foundations",
        courses: [
          "Introduction to Agribusiness Systems and Agricultural Value Chains",
          "Digital Literacy and ICT Applications in Agribusiness",
          "Business Communication and Professional Development",
          "Climate Change, Sustainability and the Green Economy",
        ],
      },
      {
        year: "Year Two",
        title: "Analytical Foundations",
        courses: [
          "Agribusiness Data Analytics and Business Intelligence",
          "Agricultural Marketing Analytics and Consumer Behaviour",
          "Digital Supply Chain Management and Logistics",
          "Programming Fundamentals for Agribusiness Analytics",
          "Research Methods and Business Statistics for Agribusiness",
        ],
      },
      {
        year: "Year Three",
        title: "Core Emerging Technologies",
        courses: [
          "Artificial Intelligence and Decision Support in Agribusiness",
          "Agritech Entrepreneurship, Innovation and Venture Development",
          "Agricultural Finance, FinTech and Digital Payment Systems",
          "International Agricultural Trade and Export Development",
          "Business Strategy, Risk Management and Corporate Governance",
        ],
      },
      {
        year: "Year Four",
        title: "Advanced Professional Integration",
        courses: [
          "Agribusiness Consultancy and Project Management",
          "Sustainable Agribusiness, ESG and Carbon Economy",
          "Smart Agribusiness Systems and Digital Transformation",
          "Leadership, Negotiation and Agribusiness Policy Advocacy",
          "Professional Practice and Contemporary Issues in Agribusiness",
        ],
      },
    ],
    careers: [
      { sector: "Agribusiness Enterprises", description: "Management, operations, marketing, and business development roles" },
      { sector: "Agricultural Finance Institutions", description: "Agricultural banking, investment analysis, financial inclusion programmes, and FinTech ventures" },
      { sector: "Government Ministries and Agencies", description: "Agricultural policy, trade promotion, rural development, and regulatory agencies" },
      { sector: "International Organizations", description: "Development agencies, multilateral institutions, and international agricultural trade organizations" },
      { sector: "Agritech and Digital Agriculture Firms", description: "Technology platforms, precision agriculture, IoT applications, and business intelligence services" },
      { sector: "Agribusiness Consulting", description: "Feasibility studies, investment advisory, supply chain optimization, and market intelligence" },
      { sector: "Export and International Trade", description: "Export management, quality compliance, and international market development" },
      { sector: "Non-Governmental Organizations", description: "Agricultural development programmes, sustainability initiatives, and community enterprise projects" },
      { sector: "Agribusiness Entrepreneurship", description: "Establishing agricultural processing, marketing, technology, and service enterprises" },
      { sector: "Postgraduate Studies", description: "M.Sc. and Ph.D. programmes in Agribusiness, Agricultural Economics, Business Administration, and related disciplines" },
    ],
    fastTrack: [
      { heading: "Industrial Training (SIWES)", items: ["Supervised internships in agribusiness firms, financial institutions, regulatory agencies, and development organizations"] },
      { heading: "Professional Certifications", items: ["Preparation for certifications in business analytics, project management, supply chain management, and financial analysis"] },
      { heading: "Entrepreneurship Incubation", items: ["Access to agritech innovation hubs, business incubation services, and venture development support"] },
      { heading: "Postgraduate Pathways", items: ["Progression to M.Sc. and Ph.D. programmes in Agribusiness, Agricultural Economics, Business Administration, and related disciplines"] },
    ],
  },
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
      { sector: "Environmental Consulting Firms", description: "Environmental impact assessment, risk assessment, compliance auditing, and remediation services" },
      { sector: "Government Regulatory Agencies", description: "Environmental protection, pollution control, and natural resource management" },

      { sector: "Petroleum and Mining Industries", description: "Environmental management, occupational health, and regulatory compliance" },
      { sector: "Manufacturing and Industrial Sectors", description: "Environmental management systems, sustainability reporting, and pollution prevention" },
      { sector: "International Development Organizations", description: "Climate change adaptation, environmental health, and sustainable development programmes" },
      { sector: "Research and Academic Institutions", description: "Environmental science, toxicology, and sustainability research" },
      { sector: "Non-Governmental Organizations", description: "Environmental advocacy, community engagement, and conservation programmes" },
      { sector: "Entrepreneurship and Green Innovation", description: "Environmental technology enterprises, circular economy ventures, and sustainability consulting" },
    ],
    fastTrack:
      "Qualified students are eligible for accelerated pathways, including the opportunity to progress to postgraduate research or professional practice through advanced course placements, industrial internships, and research assistantships.",
  },

  // ── School of Computing ────────────────────────────────────────────────
  {
    slug: "computer-science",
    programmeId: "comp-1",
    name: "B.Sc. Computer Science",
    school: "School of Computing",
    overview:
      "The Computer Science programme at the University of Agriculture, Science and Technology, Ihugh (UAST) consists of a comprehensive undergraduate education in the scientific foundations of computation, algorithms, artificial intelligence, systems programming, high-performance computing, and computational innovation. For students in the programme, a core learning objective is building and demonstrating foundational competencies in computational thinking, algorithm design, scientific programming, parallel and distributed computing, artificial intelligence, and computational modelling through the successful completion of rigorous coursework, laboratory investigations, research projects, and a capstone scientific computing portfolio. Students are also eligible for accelerated research pathways, including postgraduate studies, industry research positions, and technology innovation ventures.",
    distinctiveness: [
      {
        heading: "A Curriculum Benchmark Internationally",
        body: "The UAST Computer Science curriculum is benchmarked against leading computer science programmes at institutions including Massachusetts Institute of Technology, Stanford University, Carnegie Mellon University, ETH Zurich, and National University of Singapore, while addressing computational challenges and technology innovation priorities specific to Nigeria and Africa.",
      },
      {
        heading: "A Programme Rooted in National Priorities",
        body: "While maintaining international standards, the programme equips graduates to address Nigeria's most pressing computing and technology challenges: artificial intelligence for development, computational agriculture, environmental informatics, cybersecurity, digital infrastructure, high-performance computing for scientific discovery, and technology innovation for economic transformation.",
      },
      {
        heading: "Integrated with National Academic Standards",
        body: "The programme is structured around the National Universities Commission (NUC) Core Curriculum and Minimum Academic Standards (CCMAS), with a distinctive 30% UAST proprietary component that substantially strengthens competencies in computational thinking and scientific programming, advanced algorithms, parallel and concurrent computing, high-performance computing, cloud and distributed systems, artificial intelligence and intelligent systems, computer vision and robotics, quantum computing, computational science for agriculture and environmental systems, enterprise computing architecture, and research methodology.",
      },
    ],
    competencies: [
      "Computational Thinking and Scientific Programming",
      "Advanced Algorithms and Algorithm Engineering",
      "Systems Programming and Linux Administration",
      "Parallel and Concurrent Computing",
      "High-Performance Computing",
      "Cloud Computing and Distributed Systems",
      "Artificial Intelligence and Intelligent Systems",
      "Computer Vision and Intelligent Robotics",
      "Computational Modelling and Simulation",
      "Quantum Computing and Future Paradigms",
      "Computational Science for Agriculture and Environmental Systems",
      "Enterprise Computing Architecture and Digital Transformation",
      "Research Methods and Scientific Communication",
    ],
    structure: [
      {
        year: "Year One",
        title: "Foundations",
        courses: [
          "Computational Thinking and Scientific Programming",
          "Digital Systems and Computer Organization Laboratory",
          "Technical Communication for Computing Professionals",
          "Emerging Frontiers in Computer Science",
        ],
      },
      {
        year: "Year Two",
        title: "Core Computational Competencies",
        courses: [
          "Advanced Algorithms and Computational Problem Solving",
          "Systems Programming and Linux Administration",
          "Parallel and Concurrent Computing",
          "Computational Modelling and Simulation",
          "Research Methods in Computer Science",
        ],
      },
      {
        year: "Year Three",
        title: "Advanced Computing and Intelligent Systems",
        courses: [
          "Artificial Intelligence and Intelligent Systems",
          "Cloud Computing and Distributed Systems",
          "High-Performance Computing",
          "Computer Vision and Intelligent Robotics",
          "Computational Science for Agriculture and Environmental Systems",
        ],
      },
      {
        year: "Year Four",
        title: "Research and Professional Integration",
        courses: [
          "Quantum Computing and Future Computing Paradigms",
          "Advanced Artificial Intelligence and Generative Systems",
          "Computing Innovation, Entrepreneurship and Technology Policy",
          "Enterprise Computing Architecture and Digital Transformation",
          "Research Project, Scientific Computing Portfolio and Capstone",
        ],
      },
    ],
    careers: [
      { sector: "Research and Academic Institutions", description: "Computational science research, algorithm development, and postgraduate studies" },
      { sector: "Artificial Intelligence and Machine Learning", description: "AI research, intelligent systems development, and data science" },
      { sector: "High-Performance Computing", description: "Scientific computing, supercomputing applications, and computational engineering" },
      { sector: "Cloud and Distributed Systems", description: "Cloud architecture, distributed applications, and scalable infrastructure" },
      { sector: "Systems and Infrastructure", description: "Systems programming, Linux administration, and enterprise computing" },
      { sector: "Robotics and Automation", description: "Intelligent robotics, autonomous systems, and computer vision" },
      { sector: "FinTech and Financial Computing", description: "Algorithmic trading, risk modelling, and financial systems" },
      { sector: "Agriculture and Environmental Technology", description: "Precision agriculture, environmental informatics, and computational sustainability" },
      { sector: "Technology Innovation and Entrepreneurship", description: "Startup development, technology commercialization, and digital transformation" },
      { sector: "Cybersecurity and Digital Trust", description: "Secure systems, cryptography, and digital forensics" },
    ],
    fastTrack: [
      { heading: "Undergraduate Research", items: ["Supervised research projects in collaboration with faculty and research institutions"] },
      { heading: "Industrial Training (SIWES)", items: ["Internships in technology companies, research laboratories, and government agencies"] },
      { heading: "Innovation and Entrepreneurship", items: ["Access to technology incubators and startup support"] },
      { heading: "Postgraduate Pathways", items: ["Progression to M.Sc. and Ph.D. programmes in Computer Science, Artificial Intelligence, Data Science, and related disciplines"] },
    ],
  },
  {
    slug: "data-science",
    programmeId: "comp-2",
    name: "B.Sc. Data Science",
    school: "School of Computing",
    overview:
      "The Data Science programme at the University of Agriculture, Science and Technology, Ihugh (UAST) consists of a comprehensive undergraduate education in the extraction of knowledge from large, complex, and heterogeneous datasets using statistical methods, artificial intelligence, machine learning, computational modelling, and domain-specific analytics to support evidence-based decision-making. For students in the programme, a core learning objective is building and demonstrating foundational competencies in data engineering, statistical computing, machine learning, deep learning, spatial analytics, cloud computing, and responsible artificial intelligence through the successful completion of rigorous coursework, laboratory investigations, and a capstone research project. Students are also eligible for accelerated professional pathways, including postgraduate research, industry leadership, and entrepreneurial ventures in the rapidly expanding data science sector.",
    distinctiveness: [
      {
        heading: "A Curriculum Benchmark Internationally",
        body: "The UAST Data Science curriculum is benchmarked against leading data science programmes at institutions including Massachusetts Institute of Technology, Stanford University, Carnegie Mellon University, ETH Zurich, and National University of Singapore, while addressing data-driven challenges in agriculture, healthcare, environmental management, finance, and governance specific to Nigeria and Africa.",
      },
      {
        heading: "A Programme Rooted in National Priorities",
        body: "While maintaining international standards, the programme equips graduates to address Nigeria's most pressing data-driven challenges: precision agriculture and food security, climate analytics and environmental monitoring, health informatics and disease surveillance, financial technology and business intelligence, smart governance and digital transformation, and sustainable resource management.",
      },
      {
        heading: "Integrated with National Academic Standards",
        body: "The programme is structured around the National Universities Commission (NUC) Core Curriculum and Minimum Academic Standards (CCMAS), with a distinctive 30% UAST proprietary component that substantially strengthens competencies in Python programming for data science, applied statistical computing with R and Python, cloud computing and big data infrastructure, machine learning and predictive analytics, deep learning and intelligent systems, spatial data analytics and GIS, data science for agriculture and environmental systems, advanced artificial intelligence and decision intelligence, financial data analytics and FinTech, data governance and cyber resilience, and innovation and entrepreneurship.",
      },
    ],
    competencies: [
      "Data Science Foundations",
      "Python Programming for Data Science",
      "Database Systems and Data Engineering",
      "Applied Statistical Computing",
      "Cloud Computing and Big Data Infrastructure",
      "Data Visualization and Storytelling",
      "Machine Learning and Predictive Analytics",
      "Deep Learning and Intelligent Systems",
      "Data Mining and Knowledge Discovery",
      "Spatial Data Analytics and GIS",
      "Data Science for Agriculture and Environmental Systems",
      "Responsible Artificial Intelligence and Ethics",
      "Advanced Artificial Intelligence and Decision Intelligence",
      "Financial Data Analytics and Business Intelligence",
      "Data Governance and Cyber Resilience",
      "Data Science Innovation and Entrepreneurship",
    ],
    structure: [
      {
        year: "Year One",
        title: "Foundations",
        courses: [
          "Foundations of Data Science and Digital Society",
          "Python Programming for Data Science",
          "Digital Productivity Tools and Scientific Communication",
          "Computational Thinking and Algorithm Design",
        ],
      },
      {
        year: "Year Two",
        title: "Core Data Competencies",
        courses: [
          "Database Systems and Data Engineering",
          "Data Visualization and Storytelling",
          "Applied Statistical Computing with R and Python",
          "Cloud Computing and Big Data Infrastructure",
          "Ethics, Privacy and Responsible Artificial Intelligence",
        ],
      },
      {
        year: "Year Three",
        title: "Advanced Analytics and Applications",
        courses: [
          "Machine Learning and Predictive Analytics",
          "Deep Learning and Intelligent Systems",
          "Data Mining and Knowledge Discovery",
          "Spatial Data Analytics and GIS",
          "Data Science for Agriculture, Health and Environmental Systems",
        ],
      },
      {
        year: "Year Four",
        title: "Research and Professional Integration",
        courses: [
          "Advanced Artificial Intelligence and Decision Intelligence",
          "Financial Data Analytics, Business Intelligence and FinTech",
          "Data Governance, Cyber Resilience and Digital Trust",
          "Data Science Innovation, Entrepreneurship and Technology Consulting",
          "Research Project, Professional Portfolio and Capstone",
        ],
      },
    ],
    careers: [
      { sector: "Data Science and Analytics", description: "Data scientists, machine learning engineers, and analytics consultants" },
      { sector: "Agricultural Technology (AgriTech)", description: "Precision agriculture analytics, crop modelling, and smart farming systems" },
      { sector: "Environmental Informatics", description: "Environmental monitoring, climate analytics, and sustainability data science" },
      { sector: "Health Informatics and Public Health", description: "Disease surveillance, epidemiological modelling, and healthcare analytics" },
      { sector: "Financial Technology (FinTech)", description: "Fraud detection, credit scoring, algorithmic trading, and customer analytics" },
      { sector: "Business Intelligence and Enterprise Analytics", description: "Performance dashboards, predictive analytics, and strategic decision support" },
      { sector: "Government and Public Administration", description: "Smart governance, policy analytics, and digital transformation" },
      { sector: "Research and Academia", description: "Postgraduate studies and computational research" },
      { sector: "Data Engineering and Infrastructure", description: "Cloud data engineering, ETL development, and big data architecture" },
      { sector: "Consulting and Professional Services", description: "Data strategy, analytics advisory, and technology consulting" },
      { sector: "Technology Entrepreneurship", description: "Starting data-driven ventures and commercialising analytics solutions" },
    ],
    fastTrack: [
      { heading: "Industrial Training (SIWES)", items: ["Supervised internships in data science, analytics, and technology organisations"] },
      { heading: "Professional Certifications", items: ["Preparation for certifications in cloud computing, data science, machine learning, and business intelligence"] },
      { heading: "Research Pathways", items: ["Supervised undergraduate research and progression to postgraduate studies"] },
      { heading: "Entrepreneurship Incubation", items: ["Access to innovation hubs, startup support, and technology commercialisation services"] },
      { heading: "Industry Collaboration", items: ["Partnerships with agritech, healthtech, fintech, and environmental technology organisations"] },
    ],
  },
  {
    slug: "cyber-security",
    programmeId: "comp-4",
    name: "B.Sc. Cyber Security",
    school: "School of Computing",
    overview:
      "The Cyber Security programme at the University of Agriculture, Science and Technology, Ihugh (UAST) consists of a comprehensive undergraduate education in the protection of digital systems, networks, critical infrastructure, and information assets from cyber threats. For students in the programme, a core learning objective is building and demonstrating foundational competencies in cyber defence, digital forensics, secure systems administration, network security, applied cryptography, threat intelligence, and security governance through the successful completion of rigorous coursework, laboratory investigations, cyber range exercises, and a capstone research project. Students are also eligible for accelerated professional pathways, including postgraduate research, industry leadership, and entrepreneurial ventures in the rapidly evolving cybersecurity sector.",
    distinctiveness: [
      {
        heading: "A Curriculum Benchmark Internationally",
        body: "The UAST Cyber Security curriculum is benchmarked against leading cybersecurity programmes at institutions including Carnegie Mellon University, Purdue University, Royal Holloway University of London, National University of Singapore, and University of Oxford, while addressing cyber defence, digital trust, and critical infrastructure protection challenges specific to Nigeria and Africa.",
      },
      {
        heading: "A Programme Rooted in National Priorities",
        body: "While maintaining international standards, the programme equips graduates to address Nigeria's most pressing cybersecurity challenges: protection of critical infrastructure, digital forensics and cybercrime investigation, national cyber resilience, smart agriculture security, cloud and IoT security, financial services protection, and cybersecurity governance for digital transformation.",
      },
      {
        heading: "Integrated with National Academic Standards",
        body: "The programme is structured around the National Universities Commission (NUC) Core Curriculum and Minimum Academic Standards (CCMAS), with a distinctive 30% UAST proprietary component that substantially strengthens competencies in ethical hacking and penetration testing, digital forensics and incident response, cloud and IoT security, artificial intelligence for cybersecurity, secure software engineering, cybersecurity for critical infrastructure and smart agriculture, cyber threat intelligence, quantum-safe cryptography, cybersecurity governance and policy, and research methodology.",
      },
    ],
    competencies: [
      "Cyber Defence and Security Operations",
      "Digital Forensics and Incident Response",
      "Ethical Hacking and Penetration Testing",
      "Secure Systems Administration",
      "Network Security and Defence",
      "Applied Cryptography and Secure Communications",
      "Cloud and Internet of Things Security",
      "Artificial Intelligence for Cybersecurity",
      "Secure Software Engineering",
      "Critical Infrastructure Protection",
      "Cyber Threat Intelligence",
      "Cybersecurity Governance, Risk and Compliance",
      "Quantum-Safe Cryptography",
      "Cybersecurity Innovation and Entrepreneurship",
    ],
    structure: [
      {
        year: "Year One",
        title: "Foundations",
        courses: [
          "Foundations of Cybersecurity and Digital Trust",
          "Secure Computing Laboratory",
          "Technical Communication for Cybersecurity Professionals",
          "Emerging Cyber Threats and Digital Society",
        ],
      },
      {
        year: "Year Two",
        title: "Core Technical Competencies",
        courses: [
          "Ethical Hacking and Penetration Testing",
          "Linux Security and Secure Systems Administration",
          "Network Defence and Security Operations",
          "Applied Cryptography and Secure Communications",
          "Cybersecurity Research Methods",
        ],
      },
      {
        year: "Year Three",
        title: "Advanced Security Domains",
        courses: [
          "Digital Forensics and Incident Response",
          "Cloud and Internet of Things Security",
          "Artificial Intelligence for Cybersecurity",
          "Secure Software Engineering",
          "Cybersecurity for Critical Infrastructure and Smart Agriculture",
        ],
      },
      {
        year: "Year Four",
        title: "Research and Professional Integration",
        courses: [
          "Cyber Threat Intelligence and Advanced Persistent Threats",
          "Cybersecurity Governance, Risk, Compliance and Policy",
          "Quantum-Safe Cryptography and Future Cybersecurity",
          "Cybersecurity Innovation and Entrepreneurship",
          "Cybersecurity Research Project, Professional Portfolio and Capstone",
        ],
      },
    ],
    careers: [
      { sector: "Security Operations Centres", description: "Security analysts, threat hunters, and incident responders" },
      { sector: "Digital Forensics and Investigation", description: "Forensic examiners, cybercrime investigators, and e-discovery specialists" },
      { sector: "Penetration Testing and Vulnerability Assessment", description: "Ethical hackers and security testers" },
      { sector: "Cloud and IoT Security", description: "Cloud security architects and IoT security engineers" },
      { sector: "Critical Infrastructure Protection", description: "ICS/SCADA security professionals and smart agriculture security specialists" },
      { sector: "Cyber Threat Intelligence", description: "Threat intelligence analysts and strategic security advisors" },
      { sector: "Cybersecurity Governance and Compliance", description: "Compliance officers, risk managers, and security auditors" },
      { sector: "Secure Software Engineering", description: "Security developers, DevSecOps engineers, and application security specialists" },
      { sector: "Government and National Security", description: "National CERT/CSIRT professionals, cyber policy advisors, and defence cybersecurity specialists" },
      { sector: "Financial Services and FinTech", description: "Financial security analysts and secure payment systems specialists" },
      { sector: "Cybersecurity Consulting", description: "Security advisors, risk consultants, and managed security service providers" },
      { sector: "Academia and Research", description: "Postgraduate studies and cybersecurity research" },
    ],
    fastTrack: [
      { heading: "Professional Certifications", items: ["Preparation for globally recognised certifications including Security+, CySA+, CEH, CISSP, and cloud security credentials"] },
      { heading: "Cyber Range Exercises", items: ["Hands-on training in simulated cybersecurity environments"] },
      { heading: "Industry Collaboration", items: ["Partnerships with security organisations, government agencies, and financial institutions"] },
      { heading: "Undergraduate Research", items: ["Supervised research in emerging cybersecurity domains"] },
      { heading: "Postgraduate Pathways", items: ["Progression to M.Sc. and Ph.D. programmes in Cyber Security, Information Security, Digital Forensics, and related disciplines"] },
    ],
  },
];

export const institutionLinks: Record<string, string> = {
  "Harvard T.H. Chan School of Public Health": "https://www.hsph.harvard.edu/",
  "Johns Hopkins Bloomberg School of Public Health": "https://publichealth.jhu.edu/",
  "University of California-Davis": "https://www.ucdavis.edu/",
  "Wageningen University & Research": "https://www.wur.nl/en.htm",
  "Imperial College London": "https://www.imperial.ac.uk/",
  "University of Queensland": "https://www.uq.edu.au/",
  "Cornell University": "https://www.cornell.edu/",
  "University of Reading": "https://www.reading.ac.uk/",
  "Massachusetts Institute of Technology": "https://www.mit.edu/",
  "Stanford University": "https://www.stanford.edu/",
  "Carnegie Mellon University": "https://www.cmu.edu/",
  "ETH Zurich": "https://ethz.ch/en.html",
  "National University of Singapore": "https://www.nus.edu.sg/",
  "Purdue University": "https://www.purdue.edu/",
  "Royal Holloway University of London": "https://www.royalholloway.ac.uk/",
  "University of Oxford": "https://www.ox.ac.uk/",
  "National Universities Commission": "https://nuc.edu.ng/",
};

export function getProgrammeDetailBySlug(slug: string): ProgrammeDetail | undefined {
  return programmeDetails.find((p) => p.slug === slug);
}

export function getProgrammeSlugs(): string[] {
  return programmeDetails.map((p) => p.slug);
}
