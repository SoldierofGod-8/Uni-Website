import {
  GraduationCap,
  Users,
  Globe,
  Trophy,
  BookOpen,
  FlaskConical,
  Palette,
  Scale,
  Cpu,
  Heart,
  Building2,
  Briefcase,
} from "lucide-react";

export const SITE_CONFIG = {
  name: "Prestige University",
  shortName: "PU",
  tagline: "Where Excellence Meets Innovation",
  description:
    "A world-class institution dedicated to transforming minds and shaping the future through exceptional education, groundbreaking research, and inclusive community.",
  foundedYear: 1892,
  address: "1 University Avenue, Cambridge, State 02139",
  phone: "+1 (555) 123-4567",
  email: "admissions@prestigeuniversity.edu",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "/about",
    subLinks: [
      { label: "Our Story", href: "/about#story" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Mission & Values", href: "/about#mission" },
      { label: "Rankings", href: "/about#rankings" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    subLinks: [
      { label: "Undergraduate", href: "/academics#undergraduate" },
      { label: "Graduate", href: "/academics#graduate" },
      { label: "Online Programs", href: "/academics#online" },
      { label: "Departments", href: "/academics#departments" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    subLinks: [
      { label: "Apply Now", href: "/admissions#apply" },
      { label: "Tuition & Aid", href: "/admissions#tuition" },
      { label: "Visit Campus", href: "/admissions#visit" },
      { label: "Requirements", href: "/admissions#requirements" },
    ],
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "Campus Life",
    href: "/campus-life",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const STATS = [
  { value: 15000, suffix: "+", label: "Students Enrolled", icon: Users },
  { value: 98, suffix: "%", label: "Employment Rate", icon: Briefcase },
  { value: 250, suffix: "+", label: "Programs Offered", icon: BookOpen },
  { value: 45, suffix: "+", label: "Countries Represented", icon: Globe },
];

export const PROGRAMS = [
  {
    title: "Business & Economics",
    description:
      "Develop strategic thinking and leadership skills for the global marketplace.",
    icon: Briefcase,
    color: "from-blue-500 to-blue-700",
    students: "3,200+",
  },
  {
    title: "Engineering & Technology",
    description:
      "Innovate and build the future with cutting-edge technical education.",
    icon: Cpu,
    color: "from-emerald-500 to-emerald-700",
    students: "2,800+",
  },
  {
    title: "Arts & Humanities",
    description:
      "Explore creativity, culture, and the human experience through diverse perspectives.",
    icon: Palette,
    color: "from-purple-500 to-purple-700",
    students: "1,900+",
  },
  {
    title: "Sciences & Research",
    description:
      "Push the boundaries of knowledge through rigorous scientific inquiry.",
    icon: FlaskConical,
    color: "from-orange-500 to-orange-700",
    students: "2,400+",
  },
  {
    title: "Law & Public Policy",
    description:
      "Shape society through justice, governance, and ethical leadership.",
    icon: Scale,
    color: "from-red-500 to-red-700",
    students: "1,100+",
  },
  {
    title: "Health & Medicine",
    description:
      "Transform healthcare through compassionate practice and medical innovation.",
    icon: Heart,
    color: "from-pink-500 to-pink-700",
    students: "1,600+",
  },
];

export const NEWS_ITEMS = [
  {
    id: 1,
    category: "Research",
    title: "Breakthrough in Quantum Computing Earns International Recognition",
    excerpt:
      "Our research team has achieved a major milestone in quantum error correction, drawing praise from the global scientific community.",
    date: "December 15, 2024",
    image: "/images/news-1.jpg",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Campus",
    title: "New State-of-the-Art Innovation Center Opens Spring 2025",
    excerpt:
      "The $200M facility will house interdisciplinary labs, maker spaces, and collaborative research environments.",
    date: "December 10, 2024",
    image: "/images/news-2.jpg",
    readTime: "3 min read",
  },
  {
    id: 3,
    category: "Athletics",
    title: "Women's Soccer Team Advances to National Championship",
    excerpt:
      "An undefeated season propels our athletes to compete for the highest collegiate honor.",
    date: "December 8, 2024",
    image: "/images/news-3.jpg",
    readTime: "4 min read",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Class of 2024, Computer Science",
    quote:
      "The collaborative environment and world-class faculty transformed my understanding of technology. I landed my dream job at a top tech company before graduation.",
    image: "/images/student-1.jpg",
    now: "Software Engineer at Google",
  },
  {
    name: "Marcus Johnson",
    role: "Class of 2023, Business Administration",
    quote:
      "The entrepreneurship program gave me the tools and confidence to launch my own startup. The alumni network is incredibly supportive.",
    image: "/images/student-2.jpg",
    now: "Founder & CEO, InnovateTech",
  },
  {
    name: "Amara Okafor",
    role: "Class of 2024, Biomedical Engineering",
    quote:
      "Research opportunities here are unmatched. I co-authored three published papers and worked alongside Nobel laureates.",
    image: "/images/student-3.jpg",
    now: "PhD Candidate at MIT",
  },
];

export const FOOTER_LINKS = {
  academics: [
    { label: "Undergraduate Programs", href: "/academics#undergraduate" },
    { label: "Graduate Programs", href: "/academics#graduate" },
    { label: "Online Learning", href: "/academics#online" },
    { label: "Summer Sessions", href: "/academics#summer" },
    { label: "Academic Calendar", href: "/academics#calendar" },
  ],
  admissions: [
    { label: "How to Apply", href: "/admissions#apply" },
    { label: "Tuition & Fees", href: "/admissions#tuition" },
    { label: "Financial Aid", href: "/admissions#aid" },
    { label: "Campus Tours", href: "/admissions#tours" },
    { label: "International Students", href: "/admissions#international" },
  ],
  campus: [
    { label: "Housing & Dining", href: "/campus-life#housing" },
    { label: "Student Organizations", href: "/campus-life#organizations" },
    { label: "Athletics", href: "/campus-life#athletics" },
    { label: "Health & Wellness", href: "/campus-life#wellness" },
    { label: "Career Services", href: "/campus-life#careers" },
  ],
  connect: [
    { label: "Contact Us", href: "/contact" },
    { label: "Alumni Network", href: "/alumni" },
    { label: "Give to PU", href: "/give" },
    { label: "News & Events", href: "/news" },
    { label: "Work at PU", href: "/careers" },
  ],
};