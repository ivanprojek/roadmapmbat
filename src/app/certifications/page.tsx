import React, { Suspense } from 'react';
import { Header } from '@/components/Header';
import { CertificationCenter } from '@/components/CertificationCenter';

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-warm-white dark:bg-dark-bg">
      <Header />
      <Suspense fallback={<div className="p-8 text-center">Loading certifications...</div>}>
        <CertificationCenter />
      </Suspense>
    </main>
  );
}
