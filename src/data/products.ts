
export type ProductStatus = "Live" | "In Development" | "Archived";

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
  tags: string[]; 
};

export const filterTags = [
  "All",
  "AI",
  "Machine Learning",
  "Data Science",
  "GenAI",
  "Analytics",
  "Full Stack",
  "Python",
  "Dashboard",
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
    tags: ["AI", "Machine Learning", "Computer Vision", "Full Stack", "Python"],
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
    tags: ["AI", "Computer Vision", "Machine Learning", "Python"],
  },
  {
    id: "fittrack",
    name: "fitTrack",
    description:
      "Full-stack AI fitness tracker: React + TypeScript frontend, Strapi CMS backend, Gemini-powered recommendations.",
      image: "/images/fittrack.png", 
    stack: ["React", "TypeScript", "Strapi CMS", "Vercel"],
    aiTech: ["Google Gemini API", "GenAI Recommendations"],
    github: "https://github.com/Pratyushhirawat/FitTrack",
    demo: "https://fit-track-mauve.vercel.app",
    status: "Live",
    tags: ["AI", "GenAI", "Full Stack", "React", "Dashboard"],
  },
  // Add your next project here — same shape, new id.
];
