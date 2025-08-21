"use client";

import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import skillsData from "../../../data/skills.json";
import { Skill } from "@/src/types";

// Pastikan data JSON dicast ke tipe Skill[]
const skills: Skill[] = skillsData as Skill[];

export default function SkillsPage() {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharpening my front-end skills while building a solid back-end foundation.
          </p>
        </motion.div>

        {/* Skills by Category */}
        {Object.entries(skillsByCategory).map(
          ([category, categorySkills], categoryIndex) => (
            <section key={category} className="mb-16">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
              >
                <span className="w-2 h-8 bg-blue-600 mr-4"></span>
                {category}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill: Skill, index: number) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </section>
          )
        )}

        {/* No Skills Message */}
        {skills.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No Skills Listed
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Skills will appear here once they are added to the skills.json
              file.
            </p>
          </motion.div>
        )}

        {/* Skills Summary */}
        {skills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {skills.filter((skill) => skill.level === "Advanced").length}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Advanced Skills
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {
                    skills.filter((skill) => skill.level === "Intermediate")
                      .length
                  }
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Intermediate Skills
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {Object.keys(skillsByCategory).length}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Skill Categories
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gray-100 dark:bg-gray-800 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to work together?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Let&#39;s discuss how my skills can help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/projects"
              className="inline-block border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
