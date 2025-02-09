"use client";

import { useEffect, useState } from "react";
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

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
  const [isMounted, setIsMounted] = useState(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className="relative h-[500px] flex flex-col items-center">
      <div className="w-full max-w-md">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards, Autoplay, Navigation]}
          className="w-full"
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          cardsEffect={{
            perSlideOffset: 15,
            perSlideRotate: 4,
            rotate: true,
            slideShadows: true,
          }}
        >
          {skillCategories.map((category, index) => (
            <SwiperSlide key={category.title} className="!w-[100%]">
              <div 
                className={`bg-gradient-to-br ${category.bgColor} p-8 rounded-2xl h-full 
                  backdrop-blur-sm border border-foreground/10 shadow-xl
                  transition-all duration-500
                  ${activeIndex === index 
                    ? 'opacity-100 scale-100 z-10' 
                    : 'opacity-50 scale-95 -z-10'}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className={`space-y-4 transition-opacity duration-500 
                  ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-foreground/80">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-foreground/20 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000
                            ${activeIndex === index ? 'animate-slideRight' : 'w-0'}`}
                          style={{
                            width: activeIndex === index ? `${skill.level}%` : '0%',
                            backgroundColor: skill.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-foreground/20 hover:bg-foreground/30 transition-colors"
          aria-label="Previous slide"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-foreground/20 hover:bg-foreground/30 transition-colors"
          aria-label="Next slide"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
} 