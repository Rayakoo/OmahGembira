"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { getActivities, type Activity } from "@/services/activities";

function getDriveThumbnail(url: string): string {
  const match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w800`;
  return url;
}

const colorScheme = [
  { bg: "bg-green-bg", border: "border-green/20", text: "text-green" },
  { bg: "bg-blue-bg", border: "border-blue/20", text: "text-blue" },
  { bg: "bg-rose-bg", border: "border-rose/20", text: "text-rose-dark" },
];

export default function HomepagePrograms() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    getActivities()
      .then(setActivities)
      .catch(() => {});
  }, []);

  if (activities.length === 0) return null;

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {activities.slice(0, 3).map((a, i) => {
          const colors = colorScheme[i % colorScheme.length];
          const dokList = Array.isArray(a.dokumentasi) ? a.dokumentasi : [];
          const thumbnail = dokList.find((d) => d.is_thumbnail)?.url || dokList[0]?.url || "";

          return (
            <AnimatedSection key={a.id} delay={i * 150}>
              <div className={`p-8 rounded-2xl ${colors.bg} border ${colors.border} card-hover h-full flex flex-col`}>
                <div className="aspect-video rounded-xl bg-charcoal/20 flex items-center justify-center mb-6 overflow-hidden">
                  {thumbnail ? (
                    <img
                      src={getDriveThumbnail(thumbnail)}
                      alt={a.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <p className="text-foreground/30 text-sm">Foto Program {a.title}</p>
                  )}
                </div>
                <h3 className={`text-xl font-bold ${colors.text} mb-1`}>{a.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-sm flex-1">{a.description}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
      <AnimatedSection delay={300}>
        <div className="text-center mt-10">
          <Link
            href="/kegiatan"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal text-white font-semibold btn-hover"
          >
            Lihat Detail Program
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
