"use client";

import { useEffect, useRef, useCallback } from "react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    title: "The Complete Web Development Bootcamp",
    issuer: "Udemy",
    date: "2023",
    credentialUrl: "#",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Docker Training Course for the Absolute Beginners",
    issuer: "Udemy",
    date: "2023",
    credentialUrl: "#",
    skills: ["Docker", "Containerization", "DevOps"],
  },
  {
    title: "Introduction to Python",
    issuer: "Coursera",
    date: "2022",
    credentialUrl: "#",
    skills: ["Python", "Data Structures", "Algorithms"],
  },
  {
    title: "Understanding Data Science",
    issuer: "Coursera",
    date: "2022",
    credentialUrl: "#",
    skills: ["Data Analysis", "Statistics", "Machine Learning"],
  },
  {
    title: "Intermediate SQL Queries",
    issuer: "DataCamp",
    date: "2022",
    credentialUrl: "#",
    skills: ["SQL", "Database Design", "Query Optimization"],
  },
];

export function Certifications() {
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
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert, index) => (
        <div
          key={cert.title}
          ref={(el) => setRef(el, index)}
          className="group relative bg-foreground/5 rounded-lg p-6 opacity-0 hover:bg-foreground/10 transition-colors"
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
              {cert.title}
            </h3>
            <div className="flex items-center justify-between text-sm text-foreground/60">
              <span>{cert.issuer}</span>
              <span>{cert.date}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {skill}
              </span>
            ))}
          </div>

          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              View Certificate →
            </a>
          )}
        </div>
      ))}
    </div>
  );
} 