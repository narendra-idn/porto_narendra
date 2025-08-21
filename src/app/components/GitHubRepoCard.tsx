import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCircle } from 'react-icons/fa';
import { formatDate } from '@/src/lib/utils';
import { GitHubRepo } from '@/src/types';


interface GitHubRepoCardProps {
  repo: GitHubRepo;
  index: number;
}

const languageColors: Record<string, string> = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3776ab',
  Java: '#f89820',
  Kotlin: '#7f52ff',
  Dart: '#0175c2',
  PHP: '#777bb4',
  HTML: '#e34f26',
  CSS: '#1572b6',
  Shell: '#89e051',
  Go: '#00add8',
  Rust: '#000000',
  Swift: '#fa7343',
  'C++': '#00599c',
  C: '#a8b9cc',
  Ruby: '#cc342d',
};

const GitHubRepoCard = ({ repo, index }: GitHubRepoCardProps) => {
  const languageColor = repo.language ? languageColors[repo.language] || '#8b5cf6' : '#6b7280';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <Link
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group"
        >
          <FaGithub className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {repo.name}
          </h3>
        </Link>
        
        {repo.stargazers_count > 0 && (
          <div className="flex items-center space-x-1 text-yellow-500">
            <FaStar className="h-4 w-4" />
            <span className="text-sm font-medium">{repo.stargazers_count}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-4 min-h-[2.5rem]">
        {repo.description || 'No description available'}
      </p>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {repo.topics.slice(0, 5).map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs"
            >
              {topic}
            </span>
          ))}
          {repo.topics.length > 5 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
              +{repo.topics.length - 5} more
            </span>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-4">
          {repo.language && (
            <div className="flex items-center space-x-1">
              <FaCircle className="h-3 w-3" style={{ color: languageColor }} />
              <span>{repo.language}</span>
            </div>
          )}
        </div>
        
        <span>Updated {formatDate(repo.updated_at)}</span>
      </div>
    </motion.div>
  );
};

export default GitHubRepoCard;
