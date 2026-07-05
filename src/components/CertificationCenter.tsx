"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { certificationsByRoadmap } from '@/data/certifications';
import { roadmapPaths } from '@/data/roadmaps';

export function CertificationCenter() {
  const search = useSearchParams();
  const roadmapId = search?.get('roadmap') || null;

  const allCerts: any[] = useMemo(() => {
    const list: any[] = [];
    Object.keys(certificationsByRoadmap).forEach((rid) => {
      const entry = (certificationsByRoadmap as any)[rid];
      if (!entry || !entry.certifications) return;
      entry.certifications.forEach((c: any) => {
        list.push({
          id: c.id,
          name: c.title || c.name || c.id,
          provider: c.provider || 'Unknown',
          url: c.url || '#',
          isPaid: c.cost && c.cost.toLowerCase() === 'free' ? false : true,
          estimatedTime: c.estimatedTime || 'Varies',
          relevantTo: [rid],
          description: c.recommendedFor || '',
          worthIt: true,
        });
      });
    });
    return list.filter((cert) => !cert.isPaid);
  }, []);

  const filteredCerts = useMemo(() => {
    let list = allCerts;
    if (roadmapId) {
      list = allCerts.filter((c) => c.relevantTo.includes(roadmapId));
    }
    return list;
  }, [allCerts, roadmapId]);

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

  return (
    <div className="min-h-screen bg-warm-white dark:bg-dark-bg p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-playfair font-bold mb-2">
            Certification Center
            {roadmapId && (
              <span className="text-lg font-normal ml-3 text-gray-600">for {roadmapPaths.find((p) => p.id === roadmapId)?.title || roadmapId}</span>
            )}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Daftar sumber sertifikasi gratis sesuai topik learning path Anda.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              variants={item}
              className="card-base p-6 flex flex-col hover:shadow-soft-lg transition-all group"
            >
              <div className="mb-4">
                <h3 className="font-bold text-lg group-hover:text-rose transition-colors">
                  {cert.name}
                </h3>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Provider: {cert.provider}
              </p>

              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Estimasi waktu: {cert.estimatedTime}
              </p>

              {cert.description && (
                <p className="text-xs text-gray-700 dark:text-gray-300 mb-3">
                  Tentang: {cert.description}
                </p>
              )}

              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                Untuk path: {cert.relevantTo.map((rid: string) => roadmapPaths.find((p) => p.id === rid)?.title || rid).join(', ')}
              </p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200">
                  Free
                </span>
                {cert.worthIt && (
                  <span className="text-xs font-bold text-sage">Recommended</span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-sm text-center px-4 py-3 rounded-lg"
                >
                  Lihat Sertifikasi
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredCerts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400">
              Tidak ada sertifikasi gratis untuk topik ini saat ini.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
