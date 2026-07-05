'use client';

import React, { useMemo } from 'react';
import { useRoadmapStore } from '@/lib/store';
import { roadmapPaths } from '@/data/roadmaps';
import { RoadmapGraph } from './RoadmapGraph';
import { NodeDetailPanel } from './NodeDetailPanel';
import { motion } from 'framer-motion';

export function RoadmapViewer() {
  const selectedRoadmapId = useRoadmapStore((state) => state.selectedRoadmapId);
  const selectedNodeId = useRoadmapStore((state) => state.selectedNodeId);
  const setSelectedRoadmap = useRoadmapStore((state) => state.setSelectedRoadmap);
  const getProgressPercentage = useRoadmapStore((state) => state.getProgressPercentage);

  const selectedRoadmap = useMemo(() => {
    return roadmapPaths.find((r) => r.id === selectedRoadmapId);
  }, [selectedRoadmapId]);

  if (!selectedRoadmap) return null;

  const progress = getProgressPercentage(selectedRoadmap.id);

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header with back button and stats */}
      <div className="bg-warm-white dark:bg-dark-bg border-b border-cream-beige dark:border-dark-border p-6 backdrop-blur-glass">
        <div className="max-w-7xl mx-auto flex items-start justify-between">
          <div>
            <button
              onClick={() => setSelectedRoadmap(null)}
              className="inline-flex items-center gap-2 text-rose hover:text-rose/80 transition-colors mb-4 font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back to Roadmaps
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{selectedRoadmap.icon}</span>
              <div>
                <h1 className="text-2xl font-playfair font-bold">{selectedRoadmap.title}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedRoadmap.description}
                </p>
              </div>
            </div>
          </div>

          {/* Progress Stats */}
          <div className="flex gap-6">
            <div className="card-base p-4 text-center">
              <div className="text-2xl font-bold text-gradient mb-1">{progress}%</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Complete</p>
            </div>

            <div className="card-base p-4 text-center">
              <div className="text-2xl font-bold text-sage mb-1">{selectedRoadmap.nodes.length}</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Milestones</p>
            </div>

            <div className="card-base p-4 text-center">
              <div className="text-2xl font-bold text-rose mb-1">{selectedRoadmap.totalDuration}</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Duration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1 bg-gradient-to-r from-rose to-sage origin-left"
        style={{ width: `${progress}%` }}
      />

      {/* Graph */}
      <div className="flex-1 overflow-hidden">
        <RoadmapGraph roadmap={selectedRoadmap} />
      </div>

      {/* Node Detail Panel */}
      {selectedNodeId && (
        <NodeDetailPanel roadmapId={selectedRoadmap.id} nodeId={selectedNodeId} />
      )}
    </div>
  );
}
