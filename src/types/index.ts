export type ProgressStatus = 'not-started' | 'in-progress' | 'completed';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Resource {
  id: string;
  title: string;
  type: 'course' | 'article' | 'video' | 'book' | 'documentation';
  url: string;
  videoUrl?: string;
  isPaid: boolean;
  estimatedTime?: string;
  description?: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  estimatedTime: string;
  videoUrl?: string;
  readUrl?: string;
}

export interface CaseStudy {
  title: string;
  scenario: string;
  objectives: string[];
  tasks: string[];
  tutorial: string[];
  expectedOutcome: string[];
  question?: string;
  guide?: string[];
}

export interface MiniProject {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  estimatedTime: string;
  resources?: Resource[];
  videoUrl?: string;
  readUrl?: string;
}

export interface RoadmapNode {
  id: string;
  title: string;
  phase: number;
  description: string;
  difficulty: DifficultyLevel;
  estimatedDuration: string; // e.g., "2-3 weeks"
  prerequisites?: string[]; // node IDs
  resources: Resource[];
  exercises?: Exercise[];
  projects?: MiniProject[];
  whyMatters: string;
  aiStudyTips?: string[];
  caseStudy?: CaseStudy;
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  url: string;
  isPaid: boolean;
  estimatedTime: string;
  relevantTo: string[]; // roadmap IDs
  worthIt: boolean; // recommendation
}

export interface RoadmapPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  nodes: RoadmapNode[];
  totalDuration: string;
  difficulty: DifficultyLevel;
  salaryRange?: {
    min: number;
    max: number;
    currency: string;
    region: string;
  };
}

export interface UserProgress {
  userId: string;
  roadmapId: string;
  nodeProgresses: {
    [nodeId: string]: {
      status: ProgressStatus;
      completedAt?: Date;
      notes?: string;
      completedResources?: string[];
      completedExercises?: string[];
      completedProjects?: string[];
    };
  };
  totalCompletionPercentage: number;
  startedAt: Date;
  lastUpdated: Date;
}

export interface SalaryData {
  role: string;
  locations: {
    location: string;
    min: number;
    max: number;
    average: number;
    currency: string;
  }[];
}

export interface DashboardStats {
  totalHoursThisWeek: number;
  currentStreak: number;
  completionPercentage: number;
  activePathId: string;
  certificationCount: number;
}
