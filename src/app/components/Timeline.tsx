"use client";

import { useEffect, useRef, useCallback } from "react";

interface TimelineItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: TimelineItem[] = [
  {
    title: "Software Engineer",
    company: "Share Mobility",
    location: "Karachi, Pakistan",
    period: "April 2024 – Oct 2024",
    description: [
      "Designed and developed CSV automation module using Angular with Python backend for trip scheduling",
      "Enhanced system performance by 40% through Node.js optimization and AWS WAF implementation",
      "Integrated ChatGPT for Share Assistant and automated deployments via Terraform",
      "Improved React-based Rider Web App and migrated email system to SendGrid"
    ],
  },
  {
    title: "Junior MERN Stack Developer",
    company: "DotClick",
    location: "Karachi, Pakistan",
    period: "Sept 2023 – Dec 2023",
    description: [
      "Developed modular REST APIs in Express and built responsive frontends using React.js",
      "Improved performance with Redux and optimized data storage using MongoDB and SQL",
      "Enabled cryptocurrency payments using MetaMask and Coinbase",
      "Enhanced chatbot capabilities by integrating Google's BARD API"
    ],
  },
];

export function Timeline() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = useCallback((el: HTMLDivElement | null, index: number) => {
    itemRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-slide");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-foreground/10" />

      {/* Timeline items */}
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div
            key={experience.period}
            ref={(el) => setRef(el, index)}
            className="relative pl-12 opacity-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-[14px] -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
            
            <div className="bg-foreground/5 rounded-lg p-6 hover:bg-foreground/10 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <span className="text-sm text-foreground/60">{experience.period}</span>
              </div>
              
              <div className="mb-4">
                <div className="text-primary font-medium">{experience.company}</div>
                <div className="text-sm text-foreground/60">{experience.location}</div>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {experience.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 