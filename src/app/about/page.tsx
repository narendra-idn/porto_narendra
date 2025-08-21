"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  DocumentArrowDownIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { siteConfig } from "../../../site.config";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Bringing ideas to life through clean, impactful mobile development.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <StarIcon className="h-6 w-6 text-red-500 mr-3" />
                My Story
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I am a Mobile App Developer with strong expertise in front-end
                  development and a growing foundation in back-end technologies.
                  I enjoy creating user-friendly applications that seamlessly
                  connect people with the tools they need. With experience in
                  building mobile and web solutions, I am confident in turning
                  ideas into functional, well-designed products.
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I am continuously expanding my skill set, exploring modern
                  frameworks and tools to stay versatile as a developer. My goal
                  is to combine front-end creativity with back-end logic,
                  positioning myself as a well-rounded developer who can deliver
                  end-to-end solutions while keeping the user experience at the
                  center.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <BriefcaseIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                Experience
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Research and Development Developer
                  </h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    PT. Quantum Infra Solusindo · Contract
                    <div>Sep 2024 - Present</div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Developing and enhancing a ready-to-use mobile application
                    specifically designed to support hospital operations and
                    services.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Mobile Application Developer
                  </h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Duta Wacana Christian University · Internship
                    <div>Mar 2024 - Jun 2024</div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 space-y-1">
                    <div>
                      Final Project: Development of a Calisthenics Assistant
                      Application
                    </div>
                    <div>
                      • Description: Developed an Android-based fitness
                      assistant application using the SDLC Prototyping method.
                    </div>
                    <div>
                      • Research: Conducted research on user behavior and
                      progress when using the application.
                    </div>
                    <div>
                      • Key Features: Integrated gamification features to
                      enhance user engagement.
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Assistant Lecturer for Advanced Website Programming
                  </h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Duta Wacana Christian University · Part-time
                    <div>Aug 2023 - Dec 2023</div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 space-y-1">
                    <div>
                      • Assistant Lecturer: Supported the main lecturer by
                      preparing materials, guiding students, and assisting with
                      grading.
                    </div>
                    <div>
                      • Advanced Website Programming: Covered advanced web
                      development topics like modern frameworks, API
                      integration, performance optimization, and security.
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Front-end Web Developer
                  </h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Beehive Drones · Internship
                    <div>Sep 2022 - Jan 2023</div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 space-y-1">
                    <div>
                      MBKM Kedaireka Beehive Drone Project: KalkulISAI
                      Application
                    </div>
                    <div>
                      • Description: Application used to calculate carbon values
                      using imagery and Geographic Information Systems (GIS).
                    </div>
                    <div>
                      • Technology: Designed the user interface with the Vue.js
                      framework.
                    </div>
                    <div>
                      • Implementation: Deployed on AWS Lambda and DynamoDB for
                      carbon calculations.
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Web Developer
                  </h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Duta Wacana Christian University · Internship
                    <div>Apr 2021 - Jul 2021</div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 space-y-1">
                    <div>
                      Artificial Intelligence Project: Flood Detection Website
                    </div>
                    <div>
                      • Description: Website utilizing Ciliwung River floodgate
                      status datasheets with 5 relevant parameters to detect
                      floods.
                    </div>
                    <div>
                      • Technology: Created predictions using branching
                      algorithms in Python.
                    </div>
                    <div>
                      • Implementation: Integrated predictions into a website
                      using PHP, CSS, and JavaScript.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <AcademicCapIcon className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                Education & Learning
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Duta Wacana Christian University
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Bachelor's degree, Informatics • 2020 - 2024
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Graduated with a strong foundation in computer science
                    fundamentals, algorithms, and software engineering
                    principles.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Quick Facts */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Facts
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Location
                  </span>
                  <span className="text-gray-900 dark:text-white font-medium">
                    Tangerang
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Experience
                  </span>
                  <span className="text-gray-900 dark:text-white font-medium">
                    1+ Years
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Availability
                  </span>
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Download my resume to learn more about my experience and
                qualifications.
              </p>

              <Link
                href={siteConfig.resume.driveUrl} // Changed from `/${siteConfig.resume.filename}`
                target="_blank" // Add this to open in new tab
                rel="noopener noreferrer" // Add this for security
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full justify-center"
              >
                <DocumentArrowDownIcon className="h-5 w-5" />
                <span>{siteConfig.resume.downloadText}</span>
              </Link>
            </div>

            {/* Interests */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Interests
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "Mobile Apps",
                  "Web Development",
                  "UI/UX Design",
                  "Open Source",
                  "DevOps",
                ].map((interest, index) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Connect!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Interested in working together or just want to chat about
                technology?
              </p>

              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Get In Touch
                </Link>

                <Link
                  href="/projects"
                  className="block border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  View My Work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
