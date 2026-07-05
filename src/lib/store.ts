import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProgress, ProgressStatus } from '@/types';

interface RoadmapStore {
  // UI State
  selectedRoadmapId: string | null;
  selectedNodeId: string | null;
  isFocusModeEnabled: boolean;
  isDarkMode: boolean;
  
  // User Progress
  userProgress: Record<string, UserProgress>;
  
  // Actions
  setSelectedRoadmap: (id: string | null) => void;
  setSelectedNode: (id: string | null) => void;
  toggleFocusMode: () => void;
  toggleDarkMode: () => void;
  
  // Progress actions
  updateNodeProgress: (
    roadmapId: string,
    nodeId: string,
    status: ProgressStatus,
    notes?: string
  ) => void;
  
  getProgressPercentage: (roadmapId: string) => number;
  getNodeProgress: (roadmapId: string, nodeId: string) => ProgressStatus | null;
}

export const useRoadmapStore = create<RoadmapStore>()(
  persist(
    (set, get) => ({
      // UI State
      selectedRoadmapId: null,
      selectedNodeId: null,
      isFocusModeEnabled: false,
      isDarkMode: false,
      userProgress: {},
      
      // UI Actions
      setSelectedRoadmap: (id) => set({ selectedRoadmapId: id }),
      setSelectedNode: (id) => set({ selectedNodeId: id }),
      toggleFocusMode: () =>
        set((state) => ({ isFocusModeEnabled: !state.isFocusModeEnabled })),
      toggleDarkMode: () =>
        set((state) => ({ isDarkMode: !state.isDarkMode })),
      
      // Progress actions
      updateNodeProgress: (roadmapId, nodeId, status, notes) =>
        set((state) => {
          const roadmapProgress = state.userProgress[roadmapId] || {
            userId: 'local-user',
            roadmapId,
            nodeProgresses: {},
            totalCompletionPercentage: 0,
            startedAt: new Date(),
            lastUpdated: new Date(),
          };
          
          roadmapProgress.nodeProgresses[nodeId] = {
            ...roadmapProgress.nodeProgresses[nodeId],
            status,
            notes,
            completedAt: status === 'completed' ? new Date() : undefined,
          };
          
          return {
            userProgress: {
              ...state.userProgress,
              [roadmapId]: roadmapProgress,
            },
          };
        }),
      
      getProgressPercentage: (roadmapId) => {
        const progress = get().userProgress[roadmapId];
        if (!progress) return 0;
        
        const nodeProgresses = Object.values(progress.nodeProgresses);
        if (nodeProgresses.length === 0) return 0;
        
        const completedCount = nodeProgresses.filter(
          (p) => p.status === 'completed'
        ).length;
        
        return Math.round((completedCount / nodeProgresses.length) * 100);
      },
      
      getNodeProgress: (roadmapId, nodeId) => {
        const progress = get().userProgress[roadmapId];
        return progress?.nodeProgresses[nodeId]?.status || null;
      },
    }),
    {
      name: 'roadmap-store',
      version: 1,
    }
  )
);
