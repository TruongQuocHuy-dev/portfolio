import { Github, Linkedin, Mail, ExternalLink, Code2, Layout, Database, Wrench } from 'lucide-react';

export const personalInfo = {
  name: "Truong Quoc Huy",
  title: "Frontend Developer",
  bio: "Đam mê xây dựng ứng dụng web hiện đại với trọng tâm là code sạch và trải nghiệm người dùng xuất sắc. Chuyên về hệ sinh thái React và thiết kế responsive.",
  email: "tqhuy.dev.frontend@gmail.com",
  github: "https://github.com/TruongQuocHuy-dev",
  linkedin: "https://www.linkedin.com/in/tqhuy-devfe26/",
  resume: "/CV_TruongQuocHuy.pdf",
};

export const skills = [
  {
    category: "Giao diện người dùng",
    icon: Layout,
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend & Cơ sở dữ liệu",
    icon: Database,
    items: ["Node.js", "Express", "MongoDB", "RESTful APIs"]
  },
  {
    category: "Công cụ & Khác",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Figma", "Vite", "Netlify/Vercel"]
  }
];

export const projects = [
  {
    id: "bartender-community",
    title: "Bartender Community Ecosystem",
    description: "Hệ sinh thái mạng xã hội toàn diện cho bartender với tính năng chia sẻ công thức, khám phá cocktail bằng AI (Gemini), thông báo thời gian thực và quản lý thành viên premium.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
    tags: ["React Native", "Node.js", "MongoDB", "Gemini AI"],
    github: "https://github.com/TruongQuocHuy-dev/FE-CommunityBartender",
    demo: "https://github.com/TruongQuocHuy-dev/FE-CommunityBartender",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder - thay bằng video demo thực tế
    fullDescription: "Một hệ sinh thái hoàn chỉnh cho cộng đồng bartender, bao gồm ứng dụng di động, backend API và trang quản trị. Dự án tích hợp AI Gemini để gợi ý công thức cocktail thông minh, hệ thống thông báo push realtime với OneSignal, và quản lý thành viên premium với nhiều tính năng độc quyền.",
    features: [
      "Chia sẻ và khám phá công thức cocktail",
      "AI-powered cocktail suggestions với Gemini",
      "Hệ thống thông báo realtime",
      "Quản lý thành viên premium",
      "Chat cộng đồng",
      "Upload và quản lý hình ảnh với Cloudinary"
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
    description: "Nền tảng kết nối cộng đồng địa phương với các sáng kiến thân thiện môi trường, xây dựng bằng công nghệ web hiện đại.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/TruongQuocHuy-dev",
    demo: "https://demo.example.com",
    fullDescription: "EcoConnect là một nền tảng web kết nối những người quan tâm đến môi trường với các dự án và sáng kiến xanh trong cộng đồng. Ứng dụng cung cấp giao diện trực quan, dễ sử dụng để tìm kiếm và tham gia các hoạt động bảo vệ môi trường.",
    features: [
      "Tìm kiếm sự kiện môi trường",
      "Kết nối cộng đồng xanh",
      "Theo dõi tác động môi trường",
      "Chia sẻ mẹo sống bền vững",
      "Bản đồ điểm tái chế"
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
    description: "Ứng dụng quản lý công việc tập trung vào thiết kế tối giản và quy trình làm việc trực quan cho các nhóm agile.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Redux", "Framer Motion"],
    github: "https://github.com/TruongQuocHuy-dev",
    demo: "https://demo.example.com",
    fullDescription: "StreamLine là công cụ quản lý dự án hiện đại được thiết kế cho các nhóm làm việc theo phương pháp Agile. Với giao diện kéo-thả trực quan và tích hợp đầy đủ, StreamLine giúp team làm việc hiệu quả hơn.",
    features: [
      "Kanban board với drag & drop",
      "Sprint planning và tracking",
      "Time tracking tích hợp",
      "Báo cáo tiến độ realtime",
      "Tích hợp Slack và email",
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