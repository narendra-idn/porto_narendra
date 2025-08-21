export const siteConfig = {
  // Basic site information
  title: "Narendra | Portfolio",
  description: "Passionate about turning challenges into functional mobile applications.",
  author: "Narendra Poetra Wisnoewardhana",
  email: "narendraputrawisnu@gmail.com",
  
  // URLs
  url: "https://narendra.vercel.app",
  
  // Social links
  social: {
    github: "https://github.com/narendra-idn",
    linkedin: "https://www.linkedin.com/in/narendra-poetra-wisnoewardhana-99165b288/?originalSubdomain=id",
    instagram: "https://instagram.com/luvchinesefoods",
  },
  
  // GitHub configuration
  github: {
    username: "narendra-idn", // This will be overridden by NEXT_PUBLIC_GITHUB_USERNAME env var
  },
  
  // Theme customization
  theme: {
    colors: {
      primary: "bg-blue-600",
      primaryHover: "hover:bg-blue-700",
      secondary: "bg-gray-800",
      accent: "text-blue-600",
      background: "bg-gray-50",
      backgroundDark: "dark:bg-gray-900",
    },
    fonts: {
      heading: "font-bold",
      body: "font-normal",
    },
  },
  
  // Navigation
  nav: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    // { name: "GitHub", href: "/github" },
    { name: "Contact", href: "/contact" },
  ],
  
  // Contact form
  contact: {
    // Set to true if using Firebase for contact form
    useFirebase: true,
  },
  
  // Resume
  resume: {
    filename: "narendra-resume.pdf",
    downloadText: "Download Resume",
    driveUrl: "https://drive.google.com/file/d/1ygc_gJGzUOoshw6J08aNUSTWiHxgd_qK/view?usp=sharing",
  },
};

export default siteConfig;
