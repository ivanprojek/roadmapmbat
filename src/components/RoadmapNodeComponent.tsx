'use client';

import React from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { RoadmapNode, ProgressStatus } from '@/types';
import { useRoadmapStore } from '@/lib/store';
import { motion } from 'framer-motion';

interface RoadmapNodeData {
  label: string;
  node: RoadmapNode;
  progress: ProgressStatus | null;
}

export function RoadmapNodeComponent(props: NodeProps<RoadmapNodeData>) {
  const { data } = props;
  const setSelectedNode = useRoadmapStore((state) => state.setSelectedNode);
  const selectedNodeId = useRoadmapStore((state) => state.selectedNodeId);

  const isSelected = selectedNodeId === data.node.id;

  const getProgressText = () => {
    switch (data.progress) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Not Started';
    }
  };

  const getDifficultyColor = () => {
    switch (data.node.difficulty) {
      case 'beginner':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200';
      case 'expert':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Handle type="target" position={Position.Top} />

      <button
        onClick={() => setSelectedNode(data.node.id)}
        className={`card-base p-4 min-w-[280px] cursor-pointer hover:shadow-soft-lg transition-all duration-300 ${
          isSelected ? 'ring-2 ring-rose shadow-soft-lg' : ''
        }`}
      >
        {/* Header with progress */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-bold text-sm text-accent dark:text-dark-text line-clamp-2">
              {data.label}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Phase {data.node.phase}
            </p>
          </div>
          <div className="ml-2 flex-shrink-0 text-xs text-gray-500 dark:text-gray-400">
            {getProgressText()}
          </div>
        </div>

        {/* Difficulty badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getDifficultyColor()}`}>
            {data.node.difficulty}
          </span>
        </div>

        {/* Duration */}
        <div className="text-xs text-gray-600 dark:text-gray-400">
          {data.node.estimatedDuration}
        </div>

        {/* Description preview */}
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 line-clamp-2">
          {data.node.description}
        </p>

        {/* Resources count (merged) */}
        <div className="mt-4 pt-3 border-t border-cream-beige dark:border-dark-border flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1">
            <span className="font-bold text-rose">{data.node.resources.length + (data.node.exercises?.length || 0) + (data.node.projects?.length || 0)}</span>
            <span className="text-gray-600 dark:text-gray-400">Resources</span>
          </span>
        </div>

        {/* Click hint */}
        <p className="text-xs text-rose mt-2 text-center font-medium">
          Click to view details
        </p>
      </button>

      <Handle type="source" position={Position.Bottom} />
    </motion.div>
  );
}
