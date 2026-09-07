export const personal = {
  name: "Pratyush Hirawat",
  titles: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "GenAI Developer",
    "Data Analyst",
  ],
  tagline: "Aspiring Data Scientist — Machine Learning, Python & AI",
  location: "Delhi, India",
  phone: "+91 93115 13886",
  email: "pratyushhirawat@gmail.com",
  github: "https://github.com/Pratyushhirawat",
  linkedin: "https://www.linkedin.com/in/pratyush-hirawat-010062257",
  summary:
    "Results-driven Data Science graduate with hands-on expertise in Python, machine learning, LLMs, and Generative AI. Proficient in building supervised and unsupervised learning models, designing RAG pipelines, and developing Agentic AI workflows powered by LLM APIs. Demonstrated ability to ship production-grade AI-integrated applications across the full development stack.",
  objective:
    "Seeking a Data Scientist, ML Engineer, or GenAI Developer role to build intelligent, data-intensive products at scale.",
};

export type SkillCategory = {
  category: string;
  eyebrow: string;
  items: { name: string; level: number }[];
};

// Levels are relative self-assessment groupings (advanced/working/familiar),
// mapped to indicative percentages for the animated bars — not resume-stated numbers.
export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    eyebrow: "core",
    items: [
      { name: "Python", level: 92 },
      { name: "Java", level: 65 },
      { name: "TypeScript", level: 72 },
    ],
  },
  {
    category: "ML / AI / GenAI",
    eyebrow: "specialty",
    items: [
      { name: "Machine Learning (Regression / Classification)", level: 85 },
      { name: "LLMs", level: 80 },
      { name: "Generative AI", level: 82 },
      { name: "RAG Pipelines", level: 78 },
      { name: "Agentic AI", level: 75 },
      { name: "NLP", level: 74 },
      { name: "Feature Engineering", level: 80 },
      { name: "Model Evaluation", level: 78 },
      { name: "PyTorch", level: 68 },
    ],
  },
  {
    category: "Libraries",
    eyebrow: "toolkit",
    items: [
      { name: "NumPy", level: 85 },
      { name: "Pandas", level: 88 },
      { name: "Scikit-learn", level: 82 },
      { name: "Matplotlib", level: 80 },
      { name: "Seaborn", level: 78 },
    ],
  },
  {
    category: "Databases",
    eyebrow: "storage",
    items: [
      { name: "SQL (MySQL / PostgreSQL)", level: 80 },
      { name: "MongoDB", level: 68 },
      { name: "Supabase", level: 80 }
    ],
  },
  {
    category: "Web & APIs",
    eyebrow: "product",
    items: [
      { name: "React", level: 78 },
      { name: "TypeScript", level: 72 },
      { name: "REST APIs", level: 80 },
      { name: "Google Gemini API", level: 76 },
      { name: "LangChain", level: 74 },
      { name: "Strapi CMS", level: 65 },
    ],
  },
  {
    category: "Developer Tools",
    eyebrow: "workflow",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Jupyter Notebook", level: 88 },
      { name: "Google Colab", level: 85 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  stack: string[];
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  results: string;
  tags: string[]; // used by the filter system
  category: "Major" | "Minor";
  github?: string; // PLACEHOLDER
  demo?: string; // PLACEHOLDER
  status: "Shipped" | "Under Development" | "Completed";
};

export const projects: Project[] = [
  {
    id: "snapclass",
    title: "SnapClass",
    tagline: "Biometric attendance & classroom management, powered by dual-modal recognition.",
    stack: ["Python", "Streamlit", "Flask", "Supabase", "SQL", "Deep Learning", "SVC"],
    problem:
      "Manual attendance in classrooms is slow, easy to spoof, and gives instructors no reliable audit trail.",
    solution:
      "An AI-powered smart attendance system that confirms identity through combined Face Recognition and Voice Recognition before marking a student present.",
    features: [
      "Dual biometric verification: face + voice recognition",
      "Secure user authentication",
      "Supabase-backed data layer with managed SQL queries",
      "Support Vector Classifier (SVC) for multi-class identity classification",
      "Streamlit application core, landing page deployed on Vercel",
    ],
    architecture:
      "Streamlit application handles session flow and biometric capture; deep learning models extract face and voice embeddings; an SVC classifies identity against enrolled students; Supabase stores attendance records via SQL, with the marketing/landing layer deployed separately on Vercel and interconnected with the core app.",
    results:
      "Delivered a working end-to-end biometric attendance pipeline connecting recognition models to a persistent, queryable attendance record.",
    tags: ["AI", "Machine Learning", "Computer Vision", "Full Stack", "Python"],
    category: "Minor",
    github: "https://github.com/Pratyushhirawat/snapclass",
    demo: "https://snapclass-alpha.vercel.app/",
    status: "Shipped",
  },
  {
    id: "ai-gym-coach",
    title: "AI Gym Coach",
    tagline: "Real-time pose analysis and LLM-driven coaching feedback.",
    stack: ["Python", "Streamlit", "WebRTC", "MediaPipe", "OpenCV", "SQLite", "gTTS", "LLM API"],
    problem:
      "Home workouts lack a coach in the room to count reps accurately or catch form mistakes before they cause injury.",
    solution:
      "A virtual fitness coach that watches exercise form through the webcam in real time and talks the user through corrections like a human trainer would.",
    features: [
      "Real-time pose detection via MediaPipe + OpenCV",
      "Tracking modules for squats, push-ups, and bicep curls with automated rep counting",
      "Form-correction logic that flags posture mistakes and suggests fixes",
      "LLM-powered coaching intelligence for personalized feedback based on performance",
      "Voice-based trainer responses via gTTS",
    ],
    architecture:
      "WebRTC streams webcam frames into the app; MediaPipe/OpenCV extract body landmarks per frame to score exercise form and count repetitions; performance data is logged to SQLite; an LLM API turns session stats into personalized coaching text, which gTTS converts to spoken feedback.",
    results:
      "Produced a self-contained fitness coaching loop — from raw video to spoken, personalized feedback — for three core exercises.",
    tags: ["AI", "Computer Vision", "Machine Learning", "Python"],
    category: "Minor",
    github: "https://github.com/Pratyushhirawat/AI-GYM-COACH",
    demo: "https://ai-fitness-gym-coach.vercel.app/",
    status: "Shipped",
  },
  // {
  //   id: "interviewai",
  //   title: "interviewAI",
  //   tagline: "An AI voice interviewer that runs full mock technical & HR interview rounds.",
  //   stack: ["React", "Node.js", "Express", "MongoDB", "Redis", "Firebase", "Razorpay", "Docker"],
  //   problem:
  //     "Job seekers rarely get realistic interview practice on demand, and most resumes never get checked against how ATS systems actually screen candidates before a human sees them.",
  //   solution:
  //     "A full-stack career prep platform that combines an ATS-aware resume builder, a personalized AI-generated learning roadmap, and a voice-driven AI interviewer that conducts both technical and HR rounds — with a built-in code editor for live coding questions.",
  //   features: [
  //     "AI voice interviewer conducting both Technical and HR interview rounds",
  //     "In-built code editor for coding rounds — answer by typing or speaking",
  //     "Resume builder with instant ATS compatibility scoring",
  //     "AI-generated learning roadmap with attached YouTube lectures and articles per topic",
  //     "Google Sign-In via Firebase and Razorpay-powered subscription payments",
  //     "Central dashboard tracking resumes, interviews, and roadmap progress",
  //   ],
  //   architecture:
  //     "Microservices backend (Auth, Billing, Interview, Resume, Roadmap) behind an API gateway, with AI agents driving the voice interview flow, Redis for shared session state, and a React frontend — each service containerized independently with Docker.",
  //   results:
  //     "Shipped a multi-service platform end-to-end: authentication, payments, an AI-driven voice interview engine, and an ATS-aware resume builder, all running as independently deployable services.",
  //   tags: ["AI", "GenAI", "Full Stack"],
  //   category: "Major",
  //   github: "https://github.com/Pratyushhirawat/interviewAI",
  //   status: "In Progress",
  // },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA) — Specialization in Data Science",
    institution: "Jagannath University, Delhi",
    period: "2022 – June 2025",
    detail: "Relevant coursework: Machine Learning, Statistics, DBMS, Data Structures, Python, Big Data.",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  period: string;
};

export const certifications: Certification[] = [
  { name: "Python for Data Science", issuer: "NPTEL", period: "Sep 2024 – Feb 2025" },
  { name: "Programming in Java", issuer: "NPTEL", period: "Sep 2024 – Feb 2025" },
  { name: "GenAI Powered Data Analytics Job Simulation", issuer: "Tata (Forage)", period: "" },
  { name: "Data Analytics Job Simulation", issuer: "Deloitte Australia (Forage)", period: "" },
];

export type TimelineEntry = {
  period: string;
  title: string;
  description: string;
};

// since the resume presents no formal employment history (candidate is a recent graduate).
export const experienceTimeline: TimelineEntry[] = [
  {
    period: "2022",
    title: "Started BCA — Data Science Specialization",
    description:
      "Began formal study of machine learning, statistics, DBMS, data structures, Java and Python at Jagannath University, Delhi.",
  },
  {
    period: "Sep 2024 – Feb 2025",
    title: "NPTEL Certifications",
    description: "Completed Python for Data Science and Programming in Java certifications.",
  },
  {
    period: "2024 – 2025",
    title: "Applied Job Simulations",
    description:
      "Completed the Tata GenAI Powered Data Analytics job simulation and the Deloitte Australia Data Analytics job simulation (Forage).",
  },
  {
    period: "2024 – 2025",
    title: "Built SnapClass & AI Gym Coach",
    description:
      "Shipped two computer-vision-driven AI applications: a biometric attendance system and a real-time pose-tracking fitness coach with LLM-generated feedback.",
  },
  {
    period: "2025",
    title: "Built fitTrack",
    description:
      "Shipped a full-stack, production-deployed AI application integrating the Google Gemini API with a type-safe React + TypeScript frontend and Strapi backend.",
  },
  {
    period: "June 2025",
    title: "Graduated BCA (Data Science)",
    description: "Completed the degree at Jagannath University, Delhi.",
  },
];

// Achievement counters — derived directly from countable resume facts, not invented metrics.
export const achievements = [
  { label: "Projects Shipped", value: 3 },
  { label: "Certifications Earned", value: 4 },
  { label: "Job Simulations Completed", value: 2 },
  { label: "Core Technologies Used", value: 20 },
];

export const services = [
  { title: "AI Applications", description: "End-to-end applications with AI at the core, not bolted on." },
  { title: "Machine Learning Models", description: "Supervised & unsupervised models — from feature engineering to evaluation." },
  { title: "Data Analytics Dashboards", description: "Turning raw data into dashboards people actually use." },
  { title: "LLM Applications", description: "Products built around LLM APIs like Google Gemini." },
  { title: "RAG Systems", description: "Retrieval-augmented pipelines that ground LLM output in real data." },
  { title: "Agentic AI Workflows", description: "Multi-step, tool-using AI workflows powered by LLM APIs." },
  { title: "Computer Vision", description: "Real-time pose, face, and voice recognition pipelines." },
  { title: "NLP Solutions", description: "Text-driven features backed by classical and LLM-based NLP." },
  { title: "AI Chatbots", description: "Conversational interfaces wired into real product data." },
  { title: "Full Stack AI Products", description: "React/TypeScript frontends wired to real backends and AI APIs, shipped to production." },
];