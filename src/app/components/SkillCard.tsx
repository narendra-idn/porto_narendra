import { motion } from 'framer-motion';
import { 
  SiFirebase, 
  SiFlutter, 
  SiKotlin, 
  SiJavascript, 
  SiReact, 
  SiHtml5, 
  SiPhp, 
  SiMysql, 
  SiPython,
  SiIonic,
  SiVuedotjs,
  SiTailwindcss,
  SiAngular,
  SiBootstrap,
  SiNextdotjs,
  SiNodedotjs
} from 'react-icons/si';
import { Skill } from '@/src/types';
import { getSkillLevelColor } from '@/src/lib/utils';
import { JSX } from 'react';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const skillIcons: Record<string, JSX.Element> = {
  firebase: <SiFirebase className="h-8 w-8" />,
  flutter: <SiFlutter className="h-8 w-8" />,
  kotlin: <SiKotlin className="h-8 w-8" />,
  ionic: <SiIonic className="h-8 w-8" />,
  javascript: <SiJavascript className="h-8 w-8" />,
  react: <SiReact className="h-8 w-8" />,
  vue: <SiVuedotjs className="h-8 w-8" />,
  tailwind: <SiTailwindcss className="h-8 w-8" />,
  angular: <SiAngular className="h-8 w-8" />,
  bootstrap: <SiBootstrap className="h-8 w-8" />,
  'next.js': <SiNextdotjs className="h-8 w-8" />,
  html: <SiHtml5 className="h-8 w-8" />,
  php: <SiPhp className="h-8 w-8" />,
  node: <SiNodedotjs className="h-8 w-8" />,
  mysql: <SiMysql className="h-8 w-8" />,
  python: <SiPython className="h-8 w-8" />,
};

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const icon = skillIcons[skill.icon] || <div className="h-8 w-8 bg-gray-300 rounded" />;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
    >
      {/* Icon and Name */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {skill.category}
          </p>
        </div>
      </div>

      {/* Skill Level */}
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getSkillLevelColor(
            skill.level
          )}`}
        >
          {skill.level}
        </span>

        {/* Progress Bar */}
        <div className="flex-1 ml-3">
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ 
                width: skill.level === 'Advanced' ? '90%' : 
                       skill.level === 'Intermediate' ? '70%' : '50%' 
              }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              className={`h-full ${
                skill.level === 'Advanced' ? 'bg-green-500' :
                skill.level === 'Intermediate' ? 'bg-blue-500' : 'bg-yellow-500'
              }`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
