'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GitHubRepoCard from '../components/GitHubRepoCard';
import { GitHubRepo } from '@/src/types';

export default function GitHubPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'octocat';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError('');

        // Construct API URL
        const apiUrl = `https://api.github.com/users/${username}/repos?per_page=12&sort=updated&type=public`;
        
        // Prepare headers - include auth token if available
        const headers: HeadersInit = {
          'Accept': 'application/vnd.github.v3+json',
        };

        // Add authorization header if token is available
        if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
          headers['Authorization'] = `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
        }

        const response = await fetch(apiUrl, { headers });

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`GitHub user "${username}" not found`);
          } else if (response.status === 403) {
            throw new Error('GitHub API rate limit exceeded. Please try again later or add a GitHub token.');
          } else {
            throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
          }
        }

        const data: GitHubRepo[] = await response.json();
        
        // Filter out forks and sort by stars
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);

        setRepos(filteredRepos);
      } catch (err) {
        console.error('Error fetching GitHub repos:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  const handleRetry = () => {
    setError('');
    setLoading(true);
    // Force a re-fetch by changing the key
    const fetchRepos = async () => {
      try {
        const apiUrl = `https://api.github.com/users/${username}/repos?per_page=12&sort=updated&type=public&_t=${Date.now()}`;
        
        const headers: HeadersInit = {
          'Accept': 'application/vnd.github.v3+json',
        };

        if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
          headers['Authorization'] = `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
        }

        const response = await fetch(apiUrl, { headers });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data: GitHubRepo[] = await response.json();
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);

        setRepos(filteredRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  };

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
            GitHub Repositories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my open source projects and contributions on GitHub.
            {username && (
              <span className="block mt-2 text-blue-600 dark:text-blue-400">
                @{username}
              </span>
            )}
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center py-16"
          >
            <div className="flex items-center space-x-2">
              <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-lg text-gray-600 dark:text-gray-300">
                Fetching repositories...
              </span>
            </div>
          </motion.div>
        )}

        {/* Error State */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Failed to Load Repositories
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
              {error}
            </p>
            <button
              onClick={handleRetry}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Try Again
            </button>
          </motion.div>
        )}

        {/* Repositories Grid */}
        {repos.length > 0 && !loading && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="mb-8"
            >
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Showing {repos.length} public repositories (excluding forks)
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, index) => (
                <GitHubRepoCard 
                  key={repo.id} 
                  repo={repo} 
                  index={index} 
                />
              ))}
            </div>
          </>
        )}

        {/* No Repositories Message */}
        {repos.length === 0 && !loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 7a2 2 0 012-2h10a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No Public Repositories
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              No public repositories found for this user.
            </p>
          </motion.div>
        )}

        {/* API Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            About GitHub Integration
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <p>
              • Repositories are fetched from the GitHub API in real-time
            </p>
            <p>
              • Only public, non-fork repositories are displayed
            </p>
            <p>
              • {process.env.NEXT_PUBLIC_GITHUB_TOKEN ? 
                'Using authenticated requests for higher rate limits' : 
                'Using unauthenticated requests (60 requests per hour limit)'
              }
            </p>
            <p>
              • Repositories are sorted by star count and last updated
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
