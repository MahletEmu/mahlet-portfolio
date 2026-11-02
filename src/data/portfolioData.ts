export interface Project {
  id: string;
  number: string;
  title: string;
  category: "Full Stack" | "Frontend";
  badge: string;
  tagline: string;
  shortDescription: string;
  image: string;
  techStack: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  certificateId?: string;
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    coreFeatures: string[];
    technicalArchitecture: string[];
    keyDecisions: string[];
    outcomes: string;
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  tag: string;
  accent: string;
  skills: {
    name: string;
    highlight?: boolean;
    color?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Mahlet Nigussie",
  eyebrow: "SOFTWARE ENGINEERING STUDENT",
  headline: "Building thoughtful digital experiences.",
  intro:
    "I'm Mahlet Nigussie, a fourth-year Software Engineering student at Bahir Dar University. I build web applications and user-focused digital experiences, combining frontend craftsmanship with practical full-stack development.",
  supportingStatement:
    "Passionate about solving real-world problems through software, continuously improving my engineering skills, and turning ideas into useful digital products.",
  aboutHeading: "Curious by nature. Building through code.",
  aboutStory: [
    "As a fourth-year Software Engineering student at Bahir Dar University in Ethiopia, I focus on transforming complex ideas into intuitive, high-performance web applications. My foundation bridges disciplined computer science principles with hands-on modern software engineering.",
    "Over the past years, I have engineered full-stack platforms incorporating modern frameworks, relational and document databases, authenticated user workflows, and AI integrations. Whether designing accessible user interfaces or architecting scalable backend APIs, I approach every project with curiosity, architectural rigor, and attention to detail.",
    "I am eager to contribute to collaborative engineering teams, tackle challenging technical problems, and continuously refine my engineering craft."
  ],
  education: {
    institution: "Bahir Dar University",
    location: "Bahir Dar, Ethiopia",
    degree: "B.Sc. in Software Engineering",
    level: "Fourth-Year Student",
    expectedGraduation: "Expected 2028",
    availability:
      "I'm open to software engineering internship opportunities, collaborative development projects, and opportunities to contribute to products that solve real problems."
  },
  contacts: {
    email: "mimisha1513@gmail.com",
    phone: "+251 937 762 030",
    location: "Bahir Dar, Ethiopia",
    github: "https://github.com/MahletEmu",
    linkedin: "https://www.linkedin.com/in/mahlet-nigussie-alamneh/",
    telegram: "https://t.me/I_Aleme21",
    telegramHandle: "@I_Aleme21",
    cvUrl: "/Mahlet_Nigussie_CV.pdf"
  },
  codeSnippet: {
    developer: "Mahlet Nigussie",
    role: "Software Engineering Student",
    university: "Bahir Dar University",
    focus: ["Full-Stack", "Frontend", "AI Workflows"],
    status: "Open for Opportunities"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "interconnect",
    number: "01",
    title: "InterConnect",
    category: "Full Stack",
    badge: "Featured Internship Platform",
    tagline: "Bridging the gap between university students and regional internship opportunities.",
    shortDescription:
      "A comprehensive internship discovery platform built to connect university students with vetted company internship opportunities and streamline application workflows.",
    image: "/images/interconnect.jpg",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "RLS", "Framer Motion"],
    featured: true,
    githubUrl: "https://github.com/MahletEmu",
    liveUrl: "https://inter-connect-gamma.vercel.app/",
    caseStudy: {
      overview:
        "InterConnect was engineered to solve the fragmented internship placement process faced by students in Ethiopia. It provides a centralized ecosystem where students can discover, filter, and track internship applications, while organizations can list verified openings and manage candidate pipelines.",
      problem:
        "Students frequently struggle to find structured internship openings, often relying on scattered social media posts or offline word-of-mouth with no way to track application status or verify legitimacy.",
      solution:
        "Engineered a full-stack App Router Next.js platform integrated with Supabase PostgreSQL, incorporating fine-grained Row-Level Security (RLS), multi-tenant role authentication (Students & Recruiters), and intelligent faceted search filters.",
      coreFeatures: [
        "Student & Recruiter dual-role authentication with protected route middleware",
        "Dynamic internship directory with faceted filtering by city, industry, and academic department",
        "Company directory profiles showcasing organizational culture and active openings",
        "Application tracking dashboard allowing students to monitor candidate review states",
        "Saved internships bookmarking system for later review",
        "Granular Supabase Row-Level Security (RLS) data access policies"
      ],
      technicalArchitecture: [
        "Next.js 14 App Router with React Server Components for fast initial data fetches",
        "Supabase PostgreSQL with relational migrations and strict RLS access policies",
        "Client-side UI states powered by Framer Motion and Tailwind CSS"
      ],
      keyDecisions: [
        "Implemented PostgreSQL Row-Level Security directly at database layer to prevent unauthorized cross-tenant profile updates",
        "Utilized Next.js App Router route groups to cleanly decouple public directory routes from authenticated student/recruiter dashboards"
      ],
      outcomes:
        "Delivered a production-ready application architecture addressing real student placement pain points with verified data models and secure multi-tenant access."
    }
  },
  {
    id: "cognita",
    number: "02",
    title: "Cognita — AI Study Assistant",
    category: "Full Stack",
    badge: "AI Workflow Engine",
    tagline: "Context-aware AI study companion with automated quiz generation and material synthesis.",
    shortDescription:
      "An intelligent study assistant leveraging the Google Gemini API to analyze study materials, generate interactive quizzes, and structure personalized study planners.",
    image: "/images/cognita.png",
    techStack: ["Next.js 16", "TypeScript", "Google Gemini API", "Supabase SSR", "MongoDB", "Tailwind CSS", "unpdf"],
    featured: true,
    githubUrl: "https://github.com/MahletEmu",
    liveUrl: "https://cognita-ai-study.vercel.app/",
    caseStudy: {
      overview:
        "Cognita explores modern generative AI capabilities tailored directly to academic workflows. It extracts context from course notes and PDF textbooks, enabling contextual Q&A, automatic quiz generation with instant feedback, and structured revision scheduling.",
      problem:
        "Students often face cognitive overload when reviewing dense course materials and lack interactive ways to test their understanding before examinations.",
      solution:
        "Built a modern full-stack web application with Next.js 16 and Google Gemini API integration, featuring asynchronous document text extraction, interactive study chat with pre-engineered prompt pills, and an automated assessment engine.",
      coreFeatures: [
        "Document ingestion and text parsing using unpdf for PDF lecture slides and textbooks",
        "Interactive AI study chat interface with dynamic topic prompt pills",
        "Automated quiz generator producing multiple-choice assessments with instant scoring",
        "Personalized study planner with task deadlines and completion status tracking",
        "Supabase SSR authentication combined with MongoDB document persistence",
        "Bilingual language context support (English & Amharic)"
      ],
      technicalArchitecture: [
        "Next.js 16 App Router with server-side Gemini API interaction ensuring secure API key isolation",
        "Document-to-text pipeline extracting relevant contextual sections for LLM prompting",
        "Hybrid database persistence utilizing Supabase SSR Auth and MongoDB collections"
      ],
      keyDecisions: [
        "Encapsulated Gemini API calls in server-side API routes to prevent client token leakage",
        "Implemented structured JSON prompt schemas to ensure consistent quiz parsing and scoring"
      ],
      outcomes:
        "Created an end-to-end AI study workflow application demonstrating real integration of generative models, file processing, and stateful user dashboards."
    }
  },
  {
    id: "house-rental",
    number: "03",
    title: "Everlight Homes — Rental Marketplace",
    category: "Full Stack",
    badge: "Property Marketplace",
    tagline: "Modern house rental marketplace with transparent broker commission calculation.",
    shortDescription:
      "A full-stack property rental platform engineered with Next.js and MongoDB, featuring verified property listings, inquiry workflows, and automated commission calculations.",
    image: "/images/house-rental.jpg",
    techStack: ["Next.js 16", "TypeScript", "MongoDB", "Mongoose", "Cloudinary", "Jose JWT", "Bcryptjs", "Zod", "TSX"],
    featured: true,
    githubUrl: "https://github.com/MahletEmu",
    liveUrl: "https://everlight-homes-seven.vercel.app/",
    caseStudy: {
      overview:
        "Everlight Homes Ethiopia addresses the opacity in urban rental transactions by providing verified property catalogs, transparent fee calculation, and direct tenant-to-owner inquiry channels.",
      problem:
        "Renters in Ethiopian cities frequently face unverified listings, unexpected broker fees, and lack of transparency during property inspections and inquiries.",
      solution:
        "Architected a robust Next.js application with Mongoose schemas, Cloudinary media CDN, Zod request validation, and an automated commission calculation algorithm backed by unit tests.",
      coreFeatures: [
        "Property discovery catalog with multi-attribute filtering (city, price, property type, amenities)",
        "Verified property detail views with Cloudinary image galleries and landlord badges",
        "Inquiry modal and dispute resolution workflow modals",
        "Transparent broker commission calculation module with automated unit test suite",
        "Secure stateless JWT authentication with jose and salted bcrypt password hashing",
        "Bilingual interface supporting both Amharic and English localization"
      ],
      technicalArchitecture: [
        "Mongoose ODM models for Properties, Users, and Inquiries with schema-level validation",
        "Stateless session management using signed HTTP-only JWT cookies",
        "Unit test coverage for core business logic using tsx test runner"
      ],
      keyDecisions: [
        "Separated financial commission rules into pure testable utility functions with 100% test coverage",
        "Adopted Cloudinary dynamic image transformations to ensure fast loading on mobile networks"
      ],
      outcomes:
        "Engineered a production-ready rental marketplace architecture emphasizing data integrity, unit testing, and localized user experience."
    }
  },
  {
    id: "weather-app",
    number: "04",
    title: "WeatherApp — Live Forecast",
    category: "Frontend",
    badge: "Live API Application",
    tagline: "Responsive weather dashboard delivering real-time conditions and 5-day forecasts.",
    shortDescription:
      "A clean frontend weather interface providing real-time conditions, humidity, wind speeds, and 5-day daily forecasts via live REST API integration.",
    image: "/images/weather-app.jpg",
    techStack: ["JavaScript (ES6+)", "HTML5", "CSS3", "Axios", "SheCodes Weather API"],
    featured: false,
    githubUrl: "https://github.com/MahletEmu",
    liveUrl: "https://my-weather-app-first.netlify.app/",
    certificateId: "cert-weather",
    caseStudy: {
      overview:
        "A focused frontend engineering project demonstrating asynchronous HTTP communication, real-time DOM manipulation, and dynamic weather data parsing.",
      problem:
        "Users need fast, readable, and responsive local weather forecasts without heavy interface overhead or latency.",
      solution:
        "Built a lightweight vanilla JavaScript application utilizing Axios for asynchronous REST requests, dynamic DOM updates, and custom timestamp formatting.",
      coreFeatures: [
        "Dynamic city search with default initialization to Addis Ababa",
        "Real-time metric temperature, humidity percentage, and wind speed calculations",
        "5-day forecast cards rendered dynamically with minimum and maximum temperatures",
        "Custom date and day-of-week formatting based on Unix epoch timestamps",
        "Mobile-first responsive layout with clean SVG condition icons"
      ],
      technicalArchitecture: [
        "Modular JavaScript functions separating API retrieval, data mapping, and DOM rendering",
        "Asynchronous Axios promise chains with error handling for non-existent city queries"
      ],
      keyDecisions: [
        "Eliminated heavy external UI frameworks in favor of clean semantic HTML and modular CSS",
        "Calculated local client time dynamically using server timestamp offsets"
      ],
      outcomes:
        "Demonstrated strong fundamentals in core JavaScript, asynchronous data fetching, and clean responsive CSS styling."
    }
  },
  {
    id: "world-clock",
    number: "05",
    title: "World Clock — Timezone Interface",
    category: "Frontend",
    badge: "Timezone Engine",
    tagline: "Live-ticking multi-city world clock with dynamic timezone lookup.",
    shortDescription:
      "An interactive world clock web application delivering real-time seconds-accurate clocks across global metropolitan timezones with automatic user timezone detection.",
    image: "/images/world-clock.png",
    techStack: ["JavaScript", "HTML5", "CSS3", "Moment.js", "Moment Timezone"],
    featured: false,
    githubUrl: "https://github.com/MahletEmu",
    liveUrl: "https://my-first-world-clock-pro.netlify.app/",
    certificateId: "cert-world-clock",
    caseStudy: {
      overview:
        "A practical frontend application solving the challenge of cross-border timezone coordination through an intuitive live interface.",
      problem:
        "Managing meetings and remote work across continents requires instantaneous visual comparison of global time differences without manual calculations.",
      solution:
        "Engineered a dynamic world clock application leveraging Moment.js and Moment Timezone, running on an accurate 1-second interval update cycle.",
      coreFeatures: [
        "Continuous 1-second interval clock updates displaying hours, minutes, and seconds",
        "Primary cards for Addis Ababa (Africa/Addis_Ababa) and Sydney (Australia/Sydney)",
        "Dynamic city selection dropdown allowing instant conversion to international capitals",
        "Automatic browser timezone detection utilizing moment.tz.guess()",
        "Formatted calendar date presentation with localized ordinals (e.g. October 29th 2026)"
      ],
      technicalArchitecture: [
        "Timezone parsing engine powered by Moment Timezone library",
        "Lightweight setInterval loop bound to selective DOM node mutations"
      ],
      keyDecisions: [
        "Separated timezone calculation logic from DOM rendering to prevent layout thrashing",
        "Included a quick 'All cities' reset link to restore default multi-clock views"
      ],
      outcomes:
        "Delivered a precise, zero-latency timezone dashboard showcasing proficiency in time parsing and DOM state synchronization."
    }
  },
  {
    id: "poem-generator",
    number: "06",
    title: "Poem Generator — Creative AI Interface",
    category: "Frontend",
    badge: "Generative UI",
    tagline: "Interactive creative web application streaming short Ethiopian poetry.",
    shortDescription:
      "A creative web application integrating generative AI APIs to produce thematic 4-line Ethiopian poems with real-time typewriter visual effects.",
    image: "/images/poem-generator.png",
    techStack: ["JavaScript", "HTML5", "CSS3", "Axios", "SheCodes AI API", "TypewriterJS"],
    featured: false,
    githubUrl: "https://github.com/MahletEmu",
    liveUrl: "https://ethiopian-poem-generator.netlify.app/",
    certificateId: "cert-poem-generator",
    caseStudy: {
      overview:
        "An exploration of creative frontend interaction design, combining conversational AI endpoints with animated text presentation.",
      problem:
        "Generative AI responses often feel static and disjointed when loaded as abrupt blocks of text.",
      solution:
        "Created an interactive poetry generation interface with prompt injection controls, loading states, and a smooth typewriter animation streaming the generated lines.",
      coreFeatures: [
        "Custom topic input with responsive form submission handling",
        "Contextual prompt engineering instructing the AI model to craft 4-line Ethiopian poems",
        "Asynchronous Axios API integration with active loading indicator",
        "TypewriterJS integration delivering character-by-character live streaming effect",
        "Clean typography and focused minimal aesthetic"
      ],
      technicalArchitecture: [
        "Prompt-engineered AI endpoint communication over HTTPS",
        "TypewriterJS initialization on dynamic response callback"
      ],
      keyDecisions: [
        "Enforced strict prompt constraints (4 lines, signed footer) to ensure consistent poetic brevity",
        "Implemented animated loading feedback to preserve engagement during API response latency"
      ],
      outcomes:
        "Successfully combined generative AI APIs with engaging visual typography, demonstrating creativity and frontend polish."
    }
  }
];

export interface TechSkill {
  name: string;
  category: string;
  icon: string;
  bgColor: string;
  borderColor: string;
}

export const TECH_SKILLS: TechSkill[] = [
  {
    name: "JavaScript",
    category: "Core Language (ES6+)",
    icon: "js",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30"
  },
  {
    name: "TypeScript",
    category: "Type-Safe Development",
    icon: "ts",
    bgColor: "bg-blue-600/15",
    borderColor: "border-blue-500/30"
  },
  {
    name: "React.js",
    category: "UI Component Library",
    icon: "react",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30"
  },
  {
    name: "Next.js",
    category: "Full-Stack App Framework",
    icon: "next",
    bgColor: "bg-black/60",
    borderColor: "border-slate-700"
  },
  {
    name: "HTML5",
    category: "Semantic Web Structure",
    icon: "html",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30"
  },
  {
    name: "CSS3",
    category: "Responsive Layouts & Styling",
    icon: "css",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30"
  },
  {
    name: "Tailwind CSS",
    category: "Utility-First Design System",
    icon: "tailwind",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/30"
  },
  {
    name: "Node.js",
    category: "Server Runtime & APIs",
    icon: "node",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30"
  },
  {
    name: "Git & GitHub",
    category: "Version Control & Collaboration",
    icon: "git",
    bgColor: "bg-orange-600/10",
    borderColor: "border-orange-600/30"
  },
  {
    name: "Supabase",
    category: "PostgreSQL & Auth Services",
    icon: "supabase",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30"
  },
  {
    name: "MongoDB",
    category: "NoSQL Document Database",
    icon: "mongodb",
    bgColor: "bg-green-600/10",
    borderColor: "border-green-500/30"
  },
  {
    name: "REST APIs",
    category: "Data Fetching & Integration",
    icon: "api",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30"
  }
];

export const MASTERED_SKILLS = TECH_SKILLS;

export const STATS = [
  {
    icon: "Calendar",
    value: "4th Year",
    label: "Software Engineering Student"
  },
  {
    icon: "Code2",
    value: "6",
    label: "Projects Completed"
  },
  {
    icon: "GraduationCap",
    value: "Bahir Dar",
    label: "University, Ethiopia"
  },
  {
    icon: "Trophy",
    value: "100%",
    label: "Dedication & Curiosity"
  }
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  program: string;
  issuerBadge: string;
  issueDate: string;
  recipient: string;
  projectTitle: string;
  projectId: string;
  image: string;
  skills: string[];
  description: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-weather",
    title: "Advanced Web Development",
    program: "SheCodes Plus Add-On",
    issuer: "SheCodes • Delac Foundation",
    issuerBadge: "Verified Certificate of Achievement",
    issueDate: "November 27, 2025",
    recipient: "Mahlet Nigussie Alamneh",
    projectTitle: "WeatherApp — Live Forecast",
    projectId: "weather-app",
    image: "/images/certificates/shecodes-weather.png",
    skills: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub", "Hosting", "Axios", "REST API"],
    description: "Official certificate awarded to Mahlet Nigussie Alamneh by SheCodes and Delac Foundation for completing Advanced Web Development with the live Weather Forecast application."
  },
  {
    id: "cert-world-clock",
    title: "Introduction to Web Development",
    program: "SheCodes Plus Add-On",
    issuer: "SheCodes • SheDreams Foundation",
    issuerBadge: "Verified Certificate of Achievement",
    issueDate: "November 27, 2025",
    recipient: "Mahlet Nigussie Alamneh",
    projectTitle: "World Clock — Timezone Interface",
    projectId: "world-clock",
    image: "/images/certificates/shecodes-clock.png",
    skills: ["JavaScript", "HTML5", "CSS3", "Moment.js", "Moment Timezone", "Live Clocks"],
    description: "Official certificate awarded to Mahlet Nigussie Alamneh by SheCodes and SheDreams Foundation for completing Introduction to Web Development with the interactive World Clock application."
  },
  {
    id: "cert-poem-generator",
    title: "Introduction to Artificial Intelligence",
    program: "SheCodes AI Add-On",
    issuer: "SheCodes • SheDreams Foundation",
    issuerBadge: "Verified Certificate of Achievement",
    issueDate: "September 6, 2025",
    recipient: "Mahlet Nigussie Alamneh",
    projectTitle: "Poem Generator — Creative AI Interface",
    projectId: "poem-generator",
    image: "/images/certificates/shecodes-poem.jpg",
    skills: ["Artificial Intelligence", "AI APIs", "Prompt Engineering", "TypewriterJS", "Interactive Web UI"],
    description: "Official certificate awarded to Mahlet Nigussie Alamneh by SheCodes and SheDreams Foundation for completing Introduction to Artificial Intelligence with the AI Ethiopian Poem Generator."
  }
];
