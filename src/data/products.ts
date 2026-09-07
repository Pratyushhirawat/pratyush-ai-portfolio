export type ProductStatus = "Live" | "Under Development" | "Completed";
export type ProductCategory = "Major" | "Minor";

export type Product = {
  id: string;
  name: string;
  description: string;
  image?: string; 
  stack: string[];
  aiTech: string[];
  github?: string;
  demo?: string;
  caseStudyUrl?: string;
  status: ProductStatus;
  category: ProductCategory;
  tags: string[]; 
};

export const filterTags = [
  "All",
  "Major",
  "Minor",
  "AI",
  "Machine Learning",
  "Data Science",
  "Full Stack",
  "Python",
] as const;

export const products: Product[] = [
  {
    id: "snapclass",
    name: "SnapClass",
    description:
      "Biometric classroom attendance combining face and voice recognition with a Supabase-backed data layer.",
     image: "/images/snapclass.png",
    stack: ["Python", "Streamlit", "Flask", "Supabase", "SQL"],
    aiTech: ["Deep Learning", "Face Recognition", "Voice Recognition", "SVC"],
    github: "https://github.com/Pratyushhirawat/snapclass",
    demo: "https://snapclass-alpha.vercel.app/",
    status: "Live",
    category: "Major",
    tags: ["AI", "Machine Learning", "Data Science", "Python"],
  },
  {
    id: "ai-gym-coach",
    name: "AI Gym Coach",
    description:
      "Real-time pose tracking and rep counting with LLM-generated coaching feedback, spoken back via gTTS.",
      image: "/images/ai-gym-coach.png",
    stack: ["Python", "Streamlit", "WebRTC", "MediaPipe", "OpenCV", "SQLite"],
    aiTech: ["Computer Vision", "Pose Detection", "LLM API", "gTTS"],
    github: "https://github.com/Pratyushhirawat/AI-GYM-COACH",
    demo: "https://ai-fitness-gym-coach.vercel.app/",
    status: "Live",
    category: "Major",
    tags: ["AI", "Data Science", "Machine Learning", "Python"],
  },
  {
    id: "interviewai",
    name: "interviewAI",
    description:
      "An all-in-one AI career prep platform — resume builder with ATS scoring, an AI-generated learning roadmap, and a voice-based AI interviewer for technical and HR rounds, complete with a built-in code editor.",
      image: "/images/interviewDashboard.jpeg",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redis", "Docker"],
    aiTech: ["AI Voice Interviewer", "LLM Agents", "ATS Resume Scoring", "Speech-to-Text"],
    github: "https://github.com/Pratyushhirawat/interviewAI",
    status: "Completed",
    category: "Major",
    tags: ["AI", "Full Stack", "Major"],
  },

  // Add your next project here — same shape, new id.
];