'use client';

import React from 'react';
import { roadmapPaths } from '@/data/roadmaps';
import { useRoadmapStore } from '@/lib/store';
import { motion } from 'framer-motion';

export function RoadmapSelector() {
  const selectedRoadmapId = useRoadmapStore((state) => state.selectedRoadmapId);
  const setSelectedRoadmap = useRoadmapStore((state) => state.setSelectedRoadmap);
  const getProgressPercentage = useRoadmapStore((state) => state.getProgressPercentage);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  if (selectedRoadmapId) {
    return null;
  }

  return (
    <div className="min-h-screen bg-warm-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Choose Your Learning Path
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Select a career path and start your journey to success
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {roadmapPaths.map((roadmap) => {
            const progress = getProgressPercentage(roadmap.id);

            return (
              <motion.div
                key={roadmap.id}
                variants={item}
                onClick={() => setSelectedRoadmap(roadmap.id)}
                className="card-base p-6 text-left hover:shadow-soft-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex-1">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {roadmap.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-rose transition-colors">
                    {roadmap.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {roadmap.description}
                  </p>

                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-3 py-1 rounded-full bg-dusty-pink/20 text-rose font-medium">
                      {roadmap.difficulty}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{roadmap.totalDuration}</span>
                  </div>
                </div>

                {progress > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium">Progress</span>
                      <span className="text-xs font-bold text-sage">{progress}%</span>
                    </div>
                    <div className="w-full bg-cream-beige dark:bg-dark-card rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-rose to-sage h-2 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}

          <motion.div
            variants={item}
            className="card-base p-6 bg-slate-50 dark:bg-slate-900 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-3">
                roadmap teknikal super lengkap
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Sumber roadmap tambahan yang lengkap untuk teknik dan machine learning.
              </p>
            </div>
            <a
              href="https://roadmap.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center text-sm px-4 py-3 rounded-lg bg-sage/10 text-sage hover:bg-sage/20 transition-colors"
            >
              roadmap teknikal super lengkap
              <span className="ml-2 text-xl">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
