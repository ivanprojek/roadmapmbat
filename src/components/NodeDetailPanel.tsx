'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProgressStatus } from '@/types';
import { useRoadmapStore } from '@/lib/store';
import { roadmapPaths } from '@/data/roadmaps';

interface NodeDetailPanelProps {
  roadmapId: string;
  nodeId: string;
}

export function NodeDetailPanel({ roadmapId, nodeId }: NodeDetailPanelProps) {
  const setSelectedNode = useRoadmapStore((state) => state.setSelectedNode);
  const getNodeProgress = useRoadmapStore((state) => state.getNodeProgress);
  const updateNodeProgress = useRoadmapStore((state) => state.updateNodeProgress);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    resources: true,
    tips: false,
    caseStudy: false,
  });

  const roadmap = roadmapPaths.find((r) => r.id === roadmapId);
  const node = roadmap?.nodes.find((n) => n.id === nodeId);
  const progress = getNodeProgress(roadmapId, nodeId);

  if (!node || !roadmap) return null;

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleProgressChange = (status: ProgressStatus) => {
    updateNodeProgress(roadmapId, nodeId, status);
  };

  const getCaseStudyContent = () => {
    const defaultQuestion = `Pelajari materi topik ini: ${node.title}. Lakukan latihan berikut berdasarkan pemahaman yang Anda peroleh dari Resources dan AI Study Tips.`;
    const defaultGuide = [
      'Telusuri semua sumber yang tersedia pada bagian Resources untuk menguasai konsep inti topik ini.',
      'Perhatikan deskripsi topik dan identifikasi aspek yang paling penting untuk diterapkan.',
      'Gunakan pendekatan langkah demi langkah: analisis, rancang solusi, implementasi, dan verifikasi hasil.',
      'Dokumentasikan hasil pengerjaan dan ajukan perbaikan jika diperlukan.',
      'Rangkum hasil dan bandingkan dengan expected outcome yang ditentukan.',
    ];

    if (node.caseStudy) {
      if (node.caseStudy.question && node.caseStudy.guide) {
        return {
          question: node.caseStudy.question,
          guide: node.caseStudy.guide,
        };
      }

      const caseStudyQuestion = node.caseStudy.title || defaultQuestion;
      const guide: string[] = [
        `Scenario: ${node.caseStudy.scenario}`,
        ...node.caseStudy.objectives.map((objective, index) => `Objective ${index + 1}: ${objective}`),
        ...node.caseStudy.tasks.map((task, index) => `Task ${index + 1}: ${task}`),
        ...node.caseStudy.tutorial.map((step, index) => `Tutorial ${index + 1}: ${step}`),
        `Expected outcomes: ${node.caseStudy.expectedOutcome.join(' • ')}`,
      ];

      return {
        question: caseStudyQuestion,
        guide,
      };
    }

    return {
      question: defaultQuestion,
      guide: defaultGuide,
    };
  };

  const { question: caseStudyQuestion, guide: caseStudyGuide } = getCaseStudyContent();

  const practiceItems = [
    ...(node.exercises ?? []).map((exercise) => ({
      id: exercise.id,
      title: exercise.title,
      description: exercise.description,
      readUrl: exercise.readUrl,
      type: 'Exercise',
    })),
    ...(node.projects ?? []).map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      readUrl: project.readUrl,
      type: 'Project',
    })),
  ];

  const getDifficultyColor = () => {
    switch (node.difficulty) {
      case 'beginner':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200';
      case 'expert':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        onClick={() => setSelectedNode(null)}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="fixed right-0 top-0 bottom-0 w-full md:w-96 bg-warm-white dark:bg-dark-card border-l border-cream-beige dark:border-dark-border overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 z-50 bg-warm-white dark:bg-dark-card border-b border-cream-beige dark:border-dark-border p-6 backdrop-blur-glass">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-2xl font-playfair font-bold mb-2">{node.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Phase {node.phase}</p>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="px-3 py-2 hover:bg-cream-beige dark:hover:bg-dark-border rounded-lg transition-colors text-sm"
              >
                Close
              </button>
            </div>

            {/* Badges */}
            <div className="flex gap-2">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getDifficultyColor()}`}>
                {node.difficulty}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-cream-beige dark:bg-dark-border text-accent dark:text-dark-text">
                {node.estimatedDuration}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <h3 className="font-bold mb-2">About This Topic</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {node.description}
              </p>
            </div>

            {/* Why It Matters */}
            <div className="bg-dusty-pink/10 dark:bg-rose/10 rounded-lg p-4">
              <h3 className="font-bold text-rose mb-2">Why It Matters</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{node.whyMatters}</p>
            </div>

            {/* Progress Tracker */}
            <div>
              <h3 className="font-bold mb-3">Your Progress</h3>
              <div className="flex gap-2">
                {(['not-started', 'in-progress', 'completed'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => handleProgressChange(status)}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                      progress === status
                        ? 'bg-rose text-white shadow-soft-md'
                        : 'bg-cream-beige dark:bg-dark-border text-accent dark:text-dark-text hover:bg-dusty-pink/50'
                    }`}
                  >
                    {status === 'not-started' && 'Not Started'}
                    {status === 'in-progress' && 'In Progress'}
                    {status === 'completed' && 'Completed'}
                  </button>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <button
                onClick={() => toggleSection('resources')}
                className="flex items-center justify-between w-full font-bold mb-3 hover:text-rose transition-colors"
              >
                <span>Sumber Belajar ({node.resources.length})</span>
                <span className={`transition-transform ${expandedSections.resources ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {expandedSections.resources && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  {node.resources.map((resource) => {
                    const isYouTube = (u: string) => /youtube\.com|youtu\.be|vimeo\.com/.test(u || '');
                    const videoUrl = resource.videoUrl && isYouTube(resource.videoUrl)
                      ? resource.videoUrl
                      : (isYouTube(resource.url || '') ? resource.url : null);

                    const readUrl = resource.url || null;

                    return (
                      <div
                        key={resource.id}
                        className="flex items-start gap-3 p-3 rounded-lg bg-cream-beige dark:bg-dark-border hover:bg-dusty-pink/50 dark:hover:bg-dark-border/80 transition-colors"
                      >
                        <div className="flex-1">
                          <span className="text-sm font-medium text-accent dark:text-dark-text group-hover:text-rose transition-colors">
                            {resource.title}
                          </span>
                        </div>

                        <div className="flex flex-col gap-2 flex-shrink-0">
                          {videoUrl ? (
                            <a
                              href={videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary text-xs px-3 py-2 text-center"
                            >
                              Tonton Video
                            </a>
                          ) : (
                            <span className="btn-disabled text-xs px-3 py-2 text-center block opacity-70" title="Video tidak tersedia untuk materi ini">
                              Video Tidak Tersedia
                            </span>
                          )}

                          {readUrl ? (
                            <a
                              href={readUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-outline text-xs px-3 py-2 text-center"
                            >
                              Baca Materi
                            </a>
                          ) : (
                            <span className="btn-disabled text-xs px-3 py-2 text-center block opacity-70" title="Materi belum tersedia untuk item ini">
                              Materi Tidak Tersedia
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>

            {/* exercises and projects removed; merged into resources above */}

            {/* AI Study Tips */}
            {node.aiStudyTips && node.aiStudyTips.length > 0 && (
              <div>
                <button
                  onClick={() => toggleSection('tips')}
                  className="flex items-center justify-between w-full font-bold mb-3 hover:text-rose transition-colors"
                >
                  <span>Tips Belajar</span>
                  <span className={`transition-transform ${expandedSections.tips ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {expandedSections.tips && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    {node.aiStudyTips.map((tip, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-rose/10 dark:bg-rose/5 border border-rose/20 dark:border-rose/10"
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          • {tip}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            )}

            {/* Case Study & Implementation Guide */}
            <div>
              <button
                onClick={() => toggleSection('caseStudy')}
                className="flex items-center justify-between w-full font-bold mb-3 hover:text-rose transition-colors"
              >
                <span>Latihan Soal</span>
                <span className={`transition-transform ${expandedSections.caseStudy ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {expandedSections.caseStudy && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold mb-4 text-base">Latihan Soal Materi</h4>
                    {practiceItems.length > 0 ? (
                      <div className="space-y-4">
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          📝 Kerjakan tugas berikut untuk mengaplikasikan pemahaman Anda terhadap materi
                        </p>
                        <div className="space-y-3">
                          {practiceItems.map((item: any, idx: number) => (
                            <div 
                              key={item.id}
                              className="pl-4 border-l-2 border-rose/40 dark:border-rose/30 py-2"
                            >
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <div className="flex-1">
                                  <h5 className="font-semibold text-sm text-slate-700 dark:text-slate-200">
                                    {idx + 1}. {item.title}
                                  </h5>
                                </div>
                                <span className="text-xs px-2 py-1 rounded-full bg-rose/10 dark:bg-rose/20 text-rose dark:text-rose-300 font-medium whitespace-nowrap">
                                  {item.type}
                                </span>
                              </div>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                                {item.description}
                              </p>
                              {item.readUrl && (
                                <a 
                                  href={item.readUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="inline-flex items-center text-xs text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                  📄 Baca materi tambahan
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {caseStudyQuestion}
                      </p>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold mb-4 text-base">Panduan Pengerjaan</h4>
                    <ol className="space-y-3">
                      {caseStudyGuide.map((step, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose/20 dark:bg-rose/30 text-rose dark:text-rose-300 flex items-center justify-center text-xs font-semibold">
                            {idx + 1}
                          </span>
                          <span className="text-sm text-slate-600 dark:text-slate-400 pt-0.5 leading-relaxed">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
