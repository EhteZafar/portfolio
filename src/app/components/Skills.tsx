"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
  bgColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "🎨",
    bgColor: "from-blue-600/30 to-purple-600/30",
    skills: [
      { name: "React/Next.js", level: 90, color: "#61DAFB" },
      { name: "TypeScript", level: 85, color: "#3178C6" },
      { name: "Angular", level: 80, color: "#DD0031" },
      { name: "HTML/CSS", level: 90, color: "#E34F26" },
      { name: "Tailwind CSS", level: 85, color: "#38B2AC" },
      { name: "Material UI", level: 80, color: "#0081CB" },
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    bgColor: "from-green-600/30 to-emerald-600/30",
    skills: [
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "Express.js", level: 85, color: "#000000" },
      { name: "NestJS", level: 80, color: "#E0234E" },
      { name: "Python/Flask", level: 80, color: "#3776AB" },
      { name: "RESTful APIs", level: 90, color: "#FF6C37" },
      { name: "GraphQL", level: 75, color: "#E535AB" },
    ],
  },
  {
    title: "Database & Cloud",
    icon: "☁️",
    bgColor: "from-orange-600/30 to-red-600/30",
    skills: [
      { name: "PostgreSQL", level: 85, color: "#336791" },
      { name: "MongoDB", level: 85, color: "#47A248" },
      { name: "Redis", level: 80, color: "#DC382D" },
      { name: "AWS", level: 80, color: "#FF9900" },
      { name: "Azure", level: 75, color: "#0078D4" },
      { name: "Docker", level: 85, color: "#2496ED" },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    bgColor: "from-teal-600/30 to-cyan-600/30",
    skills: [
      { name: "Git/GitHub", level: 90, color: "#F05032" },
      { name: "CI/CD", level: 85, color: "#2088FF" },
      { name: "Jest/Testing", level: 80, color: "#C21325" },
      { name: "Agile/Scrum", level: 85, color: "#0052CC" },
      { name: "Linux", level: 80, color: "#FCC624" },
      { name: "System Design", level: 75, color: "#000000" },
    ],
  },
];

export function Skills() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!isMounted) return null;

  return (
    <div className="relative h-[500px] flex flex-col items-center">
      <div className="w-full max-w-md overflow-visible">
        <div className="relative" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="flex-[0_0_100%] min-w-0"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: selectedIndex === index ? 1 : 0.8,
                    opacity: selectedIndex === index ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`bg-gradient-to-br ${category.bgColor} p-8 rounded-2xl h-full 
                    backdrop-blur-sm border border-foreground/10 shadow-xl mx-4`}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </motion.div>

                  <div className="space-y-4">
                    <AnimatePresence mode="wait">
                      {selectedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ staggerChildren: 0.1 }}
                          className="space-y-4"
                        >
                          {category.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: skillIndex * 0.1 }}
                            >
                              <div className="flex justify-between mb-2">
                                <span className="font-medium text-foreground">{skill.name}</span>
                                <span className="text-foreground/80">{skill.level}%</span>
                              </div>
                              <div className="h-2 bg-foreground/20 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                                  className="h-full rounded-full"
                                  style={{ backgroundColor: skill.color }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollPrev}
          className="p-2 rounded-full bg-foreground/20 hover:bg-foreground/30 transition-colors"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollNext}
          className="p-2 rounded-full bg-foreground/20 hover:bg-foreground/30 transition-colors"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
} 