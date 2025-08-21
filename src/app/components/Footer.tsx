import siteConfig from "@/site.config";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {siteConfig.author}. All rights
            reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {siteConfig.nav.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
