'use client';

import { Header } from '@/components/Header';
import { RoadmapSelector } from '@/components/RoadmapSelector';
import { RoadmapViewer } from '@/components/RoadmapViewer';
import { useRoadmapStore } from '@/lib/store';

export default function Home() {
  const selectedRoadmapId = useRoadmapStore((state) => state.selectedRoadmapId);

  return (
    <main className="min-h-screen bg-warm-white dark:bg-dark-bg">
      <Header />
      {selectedRoadmapId ? <RoadmapViewer /> : <RoadmapSelector />}
    </main>
  );
}
