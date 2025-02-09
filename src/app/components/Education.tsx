"use client";

import { useEffect, useRef, useCallback } from "react";

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa?: string;
  achievements: string[];
  courses?: string[];
  activities?: string[];
}

const educationData: Education[] = [
  {
    degree: "Masters in Distributed Systems Engineering",
    school: "Technische Universität Dresden",
    location: "Dresden, Germany",
    period: "Oct 2024 – Present",
    achievements: [],
  },
  {
    degree: "Bachelors in Software Engineering",
    school: "FAST NUCES",
    location: "Karachi, Pakistan",
    period: "Sept 2020 – June 2024",
    gpa: "3.73/4.0 (1.4/1.0 Sehr Gut)",
    achievements: [
      "7x Dean's list Certificates",
      "Cum Laude",
      "Bronze Medalist 2020 Batch"
    ],
    courses: [
      "Object Oriented Programming",
      "Data Structures",
      "Design & Algorithms",
      "Operating Systems",
      "Database Systems",
      "Software Design",
      "Computer Networking",
      "Web Engineering",
      "DevOps",
      "Cloud Computing",
      "Blockchain & Cryptocurrency"
    ],
    activities: [
      "Co-Lead - Google Developer Student Club (GDSC)",
      "Lead Content Writer - Think & Create (T&C)",
      "Event Manager - FAST Data Science Society (FDSS)",
      "Seminar Head - Developers Day"
    ]
  }
];

export function Education() {
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
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-foreground/10" />

      <div className="space-y-12">
        {educationData.map((education, index) => (
          <div
            key={education.period}
            ref={(el) => setRef(el, index)}
            className="relative pl-12 opacity-0"
          >
            <div className="absolute left-[14px] -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
            
            <div className="bg-foreground/5 rounded-lg p-6 hover:bg-foreground/10 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-xl font-semibold">{education.degree}</h3>
                <span className="text-sm text-foreground/60">{education.period}</span>
              </div>
              
              <div className="mb-4">
                <div className="text-primary font-medium">{education.school}</div>
                <div className="text-sm text-foreground/60">{education.location}</div>
                {education.gpa && (
                  <div className="text-sm font-medium mt-2">GPA: {education.gpa}</div>
                )}
              </div>

              {education.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Achievements</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                    {education.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {education.courses && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.courses.map((course, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {education.activities && (
                <div>
                  <h4 className="text-sm font-semibold mb-2">Activities</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                    {education.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 