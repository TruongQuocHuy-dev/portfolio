import { Github, Linkedin, Mail, ExternalLink, Code2, Layout, Database, Wrench } from 'lucide-react';

export const personalInfo = {
  name: "Truong Quoc Huy",
  title: "Frontend Developer",
  bio: "Passionate about building modern web applications with a focus on clean code and outstanding user experience. Specialized in the React ecosystem and responsive design.",
  email: "tqhuy.dev.frontend@gmail.com",
  github: "https://github.com/TruongQuocHuy-dev",
  linkedin: "https://www.linkedin.com/in/tqhuy-devfe26/",
  resume: "/CV_TruongQuocHuy.pdf",
};

export const skills = [
  {
    category: "User Interface",
    icon: Layout,
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend & Database",
    icon: Database,
    items: ["Node.js", "Express", "MongoDB", "RESTful APIs"]
  },
  {
    category: "Tools & Others",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Figma", "Vite", "Netlify/Vercel"]
  }
];

export const projects = [
  {
    id: "bartender-community",
    title: "Bartender Community Ecosystem",
    description: "A comprehensive social ecosystem for bartenders featuring recipe sharing, AI-powered cocktail discovery (Gemini), real-time notifications, and premium membership management.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
    tags: ["React Native", "Node.js", "MongoDB", "Gemini AI"],
    github: "https://github.com/TruongQuocHuy-dev/FE-CommunityBartender",
    demo: "https://github.com/TruongQuocHuy-dev/FE-CommunityBartender",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder - replace with actual demo video
    fullDescription: "A complete ecosystem for the bartender community, including a mobile app, backend API, and admin dashboard. The project integrates Gemini AI for smart cocktail recommendations, real-time push notifications with OneSignal, and premium member management with exclusive features.",
    features: [
      "Share and discover cocktail recipes",
      "AI-powered cocktail suggestions with Gemini",
      "Real-time notification system",
      "Premium member management",
      "Community chat",
      "Image upload and management with Cloudinary"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
    ],
    technologies: {
      frontend: ["React Native", "TypeScript", "Redux"],
      backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
      tools: ["Gemini AI", "OneSignal", "Cloudinary", "JWT"]
    }
  },
  {
    id: "ecoconnect",
    title: "EcoConnect Platform",
    description: "A platform connecting local communities with eco-friendly initiatives, built with modern web technologies.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/TruongQuocHuy-dev",
    demo: "https://demo.example.com",
    fullDescription: "EcoConnect is a web platform that connects environmentally conscious people with green projects and initiatives in their communities. The app provides an intuitive, user-friendly interface to discover and join environmental activities.",
    features: [
      "Search for environmental events",
      "Connect green communities",
      "Track environmental impact",
      "Share sustainable living tips",
      "Recycling point map"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
    ],
    technologies: {
      frontend: ["React", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express", "PostgreSQL"],
      tools: ["Google Maps API", "Chart.js"]
    }
  },
  {
    id: "streamline",
    title: "StreamLine Task Manager",
    description: "A task management app focused on minimal design and intuitive workflows for agile teams.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Redux", "Framer Motion"],
    github: "https://github.com/TruongQuocHuy-dev",
    demo: "https://demo.example.com",
    fullDescription: "StreamLine is a modern project management tool designed for Agile teams. With an intuitive drag-and-drop interface and rich integrations, StreamLine helps teams work more effectively.",
    features: [
      "Kanban board with drag & drop",
      "Sprint planning and tracking",
      "Integrated time tracking",
      "Real-time progress reports",
      "Slack and email integrations",
      "Custom workflows"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    ],
    technologies: {
      frontend: ["React", "Redux Toolkit", "Framer Motion"],
      backend: ["Node.js", "Socket.io", "MongoDB"],
      tools: ["Slack API", "SendGrid", "AWS S3"]
    }
  }
];