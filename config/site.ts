export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Shahmeer",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ],
  links: {
    github: "https://github.com/shahmeer-nasir",
    linkedin: "https://www.linkedin.com/in/shahmeer-nasir",
    codepen: "https://codepen.io/Shahmeer-Nasir",
    email: "mailto:shahmeernasirr@gmail.com",
  },
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
      icon: "🛒",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "Tailwind CSS"],
      link: "https://github.com/shahmeer-nasir/ecommerce-platform"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      icon: "📋",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      link: "https://github.com/shahmeer-nasir/task-manager"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts and interactive maps.",
      icon: "🌤️",
      tech: ["Vue.js", "OpenWeather API", "Chart.js", "Vite", "CSS3"],
      link: "https://github.com/shahmeer-nasir/weather-dashboard"
    },
    {
      id: 4,
      title: "AI Chat Assistant",
      description: "An intelligent chat assistant powered by machine learning with natural language processing.",
      icon: "🤖",
      tech: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL"],
      link: "https://github.com/shahmeer-nasir/ai-chat"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills.",
      icon: "💼",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      link: "https://github.com/shahmeer-nasir/portfolio"
    }
  ]
}
