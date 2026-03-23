import { Github, Linkedin, Mail, Layout, Database, Wrench, Smartphone, Code, Cloud, Globe } from 'lucide-react';

export const personalInfo = {
  name: "Truong Quoc Huy",
  title: "Full-Stack Developer",
  bio: "Passionate about building complete digital ecosystems. Experienced in developing Mobile Applications, Web Admin Panels, and scalable Backends. Focused on clean architecture and delivering outstanding user experiences.",
  email: "tqhuy.dev.frontend@gmail.com",
  github: "https://github.com/TruongQuocHuy-dev",
  linkedin: "https://www.linkedin.com/in/tqhuy-devfe26/",
  resume: "/CV_TruongQuocHuy.pdf",
};

export const skills = [
  {
    category: "Languages",
    icon: Code,
    color: "cyan",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"]
  },
  {
    category: "Databases",
    icon: Database,
    color: "emerald",
    items: ["SQL Server", "MongoDB"]
  },
  {
    category: "Frameworks",
    icon: Globe,
    color: "purple",
    items: ["React.js", "React Native", "Express.js", "Nest.js"]
  },
  {
    category: "Tools",
    icon: Wrench,
    color: "orange",
    items: ["GitHub", "Postman"]
  },
  {
    category: "Cloud Services",
    icon: Cloud,
    color: "sky",
    items: ["Vercel", "Render", "Cloudinary"]
  },
  {
    category: "Web Technologies",
    icon: Globe,
    color: "rose",
    items: ["RESTful API", "JWT Auth"]
  }
];

export const projects = [
  {
    id: "bartender-community",
    title: "Bartender Community Ecosystem",
    description: "A comprehensive social ecosystem for bartenders featuring recipe sharing, AI-powered cocktail discovery, real-time notifications, and premium membership management.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
    tags: ["React Native", "React (Admin)", "Node.js", "Gemini AI"],
    github: "https://github.com/TruongQuocHuy-dev",
    demo: "https://github.com/TruongQuocHuy-dev",
    fullDescription: "A complete ecosystem for the bartender community, including a mobile app for users, a web-based admin dashboard for management, and a backend API. The project integrates Gemini AI for smart cocktail recommendations, real-time push notifications with OneSignal, and premium member management with exclusive features.",
    features: [
      "Share and discover bartender recipes",
      "AI-powered cocktail suggestions with Gemini",
      "Real-time notification system (OneSignal)",
      "Premium member subscription & management",
      "Community chat & social features",
      "Web Admin Dashboard for content moderation"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop"
    ],
    technologies: {
      frontend: ["React Native (App)", "React (Admin Web)", "TypeScript", "Redux"],
      backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
      tools: ["Gemini AI", "OneSignal", "Cloudinary", "JWT"]
    }
  },
  {
    id: "ecommerce-platform",
    title: "Modern E-Commerce Ecosystem",
    description: "A full-stack e-commerce solution with a customer mobile app, a web-based admin dashboard for inventory management, and a secure backend API.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
    tags: ["React Native", "React (Admin)", "Node.js", "PostgreSQL"],
    github: "https://github.com/TruongQuocHuy-dev",
    demo: "https://github.com/TruongQuocHuy-dev",
    fullDescription: "A comprehensive e-commerce platform designed for modern retail. It features a React Native shopping app for customers to browse, order, and track items, and a React-based Admin Dashboard for sellers to manage products, inventory, and view sales analytics.",
    features: [
      "Product Catalog with variants and stock tracking",
      "Shopping Cart & Secure Checkout layout",
      "Admin Dashboard with sales charts & analytics",
      "Inventory Management & Product CRUD",
      "User Authentication & Order History",
      "Secure API architecture"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1531403074052-f4025849aa26?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    ],
    technologies: {
      frontend: ["React Native (App)", "React (Admin Panel)", "Tailwind CSS", "Redux/Zustand"],
      backend: ["Node.js", "Express", "PostgreSQL/MongoDB", "JWT"],
      tools: ["Chart.js", "Cloudinary", "RESTful APIs"]
    }
  },
  {
    id: "vibecheck-dating",
    title: "VibeCheck - Dating App",
    description: "A modern dating application focusing on real-time interactions, smooth card swipe matchmaking, and an interactive vibe-based profile setup.",
    image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=1000&auto=format&fit=crop",
    tags: ["React Native", "Node.js", "Socket.io", "Clean Architecture"],
    github: "https://github.com/TruongQuocHuy-dev",
    demo: "https://github.com/TruongQuocHuy-dev",
    fullDescription: "VibeCheck is a dating application designed for smooth and responsive user interactions. Built adhering to Clean Architecture principles for maximum maintainability. It features card swipe matchmaking, real-time messaging, and profile customization with high focus on performance.",
    features: [
      "Smooth Animated Card Swipes (Deck Swiper)",
      "Real-time Messaging using Socket.io",
      "Vibe Picker - Interactive profile tagging system",
      "Clean Architecture (Separation of UI, Application, Data)",
      "User Authentication & Image verification setup layout",
      "Performance optimized list renders"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
    ],
    technologies: {
      frontend: ["React Native", "Framer Motion/Reanimated", "Clean Architecture", "TypeScript"],
      backend: ["Node.js", "Express", "Socket.io", "MongoDB"],
      tools: ["Cloudinary", "JWT"]
    }
  },
  {
    id: "interactive-portfolio",
    title: "Interactive Developer Portfolio",
    description: "A modern, interactive portfolio website showcasing my projects and skills with a sleek UI and smooth animations. (This Project)",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/TruongQuocHuy-dev",
    demo: "https://github.com/TruongQuocHuy-dev",
    fullDescription: "A highly interactive portfolio built with React and Tailwind CSS. It uses Framer Motion for smooth transitions, background effects, and engaging hover states to provide an immersive visitor experience.",
    features: [
      "Sleek Bento-Grid design for About/Skills",
      "Interactive Project Cards with detail modals",
      "Smooth layout animations with Framer Motion",
      "Responsive design for all device viewports",
      "Tailwind-powered styling with custom dark theme"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
    ],
    technologies: {
      frontend: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      backend: ["None (Static)", ""],
      tools: ["Vercel/Netlify"]
    }
  }
];