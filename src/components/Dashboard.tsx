'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRoadmapStore } from '@/lib/store';
import { roadmapPaths } from '@/data/roadmaps';

export function Dashboard() {
  const userProgress = useRoadmapStore((state) => state.userProgress);
  const getProgressPercentage = useRoadmapStore((state) => state.getProgressPercentage);

  const stats = {
    totalHours: 24,
    currentStreak: 7,
    completedRoadmaps: Object.values(userProgress).filter(
      (p) => getProgressPercentage(p.roadmapId) === 100
    ).length,
    activeRoadmaps: Object.keys(userProgress).length,
  };

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

  const StatCard = ({
    label,
    value,
    color,
  }: {
    label: string;
    value: string | number;
    color: string;
  }) => (
    <motion.div
      variants={item}
      className="card-base p-6"
    >
      <div className={`inline-block p-3 rounded-lg ${color} mb-4`}>
        <span className="text-sm font-semibold">{label}</span>
      </div>
      <p className="text-3xl font-bold text-accent dark:text-dark-text">
        {value}
      </p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-warm-white dark:bg-dark-bg p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-playfair font-bold mb-2">
            Learning Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track your progress and stay motivated
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <StatCard
            label="This Week"
            value={`${stats.totalHours}h`}
            color="bg-blue-100 dark:bg-blue-900"
          />
          <StatCard
            label="Current Streak"
            value={`${stats.currentStreak} days`}
            color="bg-orange-100 dark:bg-orange-900"
          />
          <StatCard
            label="Completed"
            value={stats.completedRoadmaps}
            color="bg-sage/10 dark:bg-sage/20"
          />
          <StatCard
            label="Active Paths"
            value={stats.activeRoadmaps}
            color="bg-dusty-pink/20 dark:bg-rose/10"
          />
        </motion.div>

        {/* Recent Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-base p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Recent Progress</h2>

          {Object.keys(userProgress).length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 text-center py-8">
              Start a roadmap to see your progress here
            </p>
          ) : (
            <div className="space-y-4">
              {Object.entries(userProgress).map(([roadmapId, _progress]) => {
                const roadmap = roadmapPaths.find((r) => r.id === roadmapId);
                const percentage = getProgressPercentage(roadmapId);

                return (
                  <motion.div
                    key={roadmapId}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-cream-beige dark:hover:bg-dark-border transition-colors"
                  >
                    <span className="text-2xl flex-shrink-0">{roadmap?.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold">{roadmap?.title}</h3>
                      <div className="w-full bg-cream-beige dark:bg-dark-border rounded-full h-2 mt-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="bg-gradient-to-r from-rose to-sage h-2 rounded-full"
                        />
                      </div>
                    </div>
                    <span className="text-sm font-bold text-rose flex-shrink-0">
                      {percentage}%
                    </span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
