import Image from "next/image";
import { Typewriter } from "./components/Typewriter";
import { Skills } from "./components/Skills";
import { ProjectCard } from "./components/ProjectCard";
import { Timeline } from "./components/Timeline";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { ScrollToTop } from "./components/ScrollToTop";
import { Certifications } from "./components/Certifications";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";
import { PageTransition } from "./components/PageTransition";
import { SectionTransition } from "./components/SectionTransition";

const projects = [
  {
    title: "SyncFlow",
    description: "AI-powered recruitment automation system with React Flow for transparent hiring workflows. Features include Google OAuth, location-based hiring, and document management with AWS S3.",
    image: "/syncflow.png",
    tags: ["Next.js", "Nest.js", "Flask", "PostgreSQL", "Redis", "Docker", "Azure", "AWS", "OpenAI"],
    liveUrl: "https://syncflow.vercel.app",
    githubUrl: "https://github.com/EhteZafar/syncflow",
  },
  {
    title: "STEAKIN",
    description: "A comprehensive restaurant management system with features for reservations, order management, and staff scheduling. Includes both customer and admin portals.",
    image: "/steakin.jpg",
    tags: ["Node.js", "Express", "SQL", "EJS", "Bootstrap"],
    githubUrl: "https://github.com/EhteZafar/steakin",
  },
];

export default function Home() {
  return (
    <PageTransition>
      <ThemeToggle />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-background/95">
          {/* Animated background grid */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] motion-safe:animate-grid-fade" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-8 md:px-16 xl:px-20">
            <div className="relative pt-36 ml-auto">
              <div className="lg:w-2/3 text-center mx-auto">
                <div className="relative inline-block">
                  <Image
                    src="/profile.jpg"
                    alt="Ehtesham Zafar"
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-foreground/10 shadow-2xl mb-8 mx-auto motion-safe:animate-profile-fade"
                    priority
                  />
                  <div className="absolute -bottom-2 -right-2 text-4xl motion-safe:animate-wave origin-[70%_70%]">
                    👋
                  </div>
                </div>
                
                <h1 className="text-4xl font-bold sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground/80 to-foreground mb-8 motion-safe:animate-title">
                  Ehtesham Zafar
                </h1>
                
                <div className="h-[32px] mb-8">
                  <Typewriter 
                    words={[
                      "Software Engineer",
                      "Full Stack Developer",
                      "Distributed Systems Engineer",
                      "Cloud & DevOps Enthusiast"
                    ]} 
                  />
                </div>

                <p className="text-foreground/80 mb-12 motion-safe:animate-fade">
                  Masters student in Distributed Systems Engineering at TU Dresden.
                  Passionate about building scalable applications and creating
                  impactful solutions through modern technologies.
                </p>

                <div className="flex gap-4 justify-center motion-safe:animate-fade">
                  <a
                    href="/Jan-Ehtesham-CV.pdf"
                    className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition"
                  >
                    Download CV
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-full border border-foreground/10 hover:bg-foreground/5 transition"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <SectionTransition>
          <section className="relative py-20 bg-foreground/[0.02]" id="about">
            <div className="container mx-auto px-8 md:px-16 xl:px-20">
              <div className="mb-16 md:w-2/3 lg:w-1/2">
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-4xl">
                  About Me
                </h2>
                <div className="h-1 w-20 bg-primary rounded"></div>
              </div>
              
              <div className="grid gap-16 md:grid-cols-2">
                <div className="space-y-6 [&>p]:text-foreground/80">
                  <p>
                    Hello! I&apos;m Ehtesham, a Software Engineer pursuing my Master&apos;s in Distributed Systems Engineering
                    at TU Dresden. With a strong academic background and professional experience, I specialize in
                    building modern web applications and scalable systems.
                  </p>
                  <p>
                    My experience includes working at Share Mobility, where I developed automation systems and
                    enhanced platform performance, and at DotClick, where I built scalable e-commerce solutions.
                    I&apos;m particularly passionate about cloud technologies, distributed systems, and modern web frameworks.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me playing outdoor sports like football and badminton,
                    enjoying a game of chess, or exploring new technologies. I&apos;m always eager to learn and
                    contribute to innovative projects.
                  </p>
                  
                  <div className="flex gap-4 pt-4">
                    <a
                      href="https://github.com/EhteZafar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/ehtesham-zafar-8a500821b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-8">Technical Skills</h3>
                  <Skills />
                </div>
              </div>
            </div>
          </section>
        </SectionTransition>

        {/* Projects Section */}
        <SectionTransition>
          <section className="py-20" id="projects">
            <div className="container mx-auto px-8 md:px-16 xl:px-20">
              <div className="mb-16 md:w-2/3 lg:w-1/2">
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-4xl">
                  Featured Projects
                </h2>
                <div className="h-1 w-20 bg-primary rounded"></div>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>
          </section>
        </SectionTransition>

        {/* Experience Section */}
        <SectionTransition>
          <section className="py-20 bg-foreground/[0.02]" id="experience">
            <div className="container mx-auto px-8 md:px-16 xl:px-20">
              <div className="mb-16 md:w-2/3 lg:w-1/2">
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-4xl">
                  Work Experience
                </h2>
                <div className="h-1 w-20 bg-primary rounded"></div>
              </div>
              
              <div className="max-w-6xl mx-auto px-4">
                <Timeline />
              </div>
            </div>
          </section>
        </SectionTransition>

        {/* Education Section */}
        <SectionTransition>
          <section className="py-20" id="education">
            <div className="container mx-auto px-8 md:px-16 xl:px-20">
              <div className="mb-16 md:w-2/3 lg:w-1/2">
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-4xl">
                  Education
                </h2>
                <div className="h-1 w-20 bg-primary rounded"></div>
              </div>
              
              <div className="max-w-6xl mx-auto px-4">
                <Education />
              </div>
            </div>
          </section>
        </SectionTransition>

        {/* Certifications Section */}
        <SectionTransition>
          <section className="py-20" id="certifications">
            <div className="container mx-auto px-8 md:px-16 xl:px-20">
              <div className="mb-16 md:w-2/3 lg:w-1/2">
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-4xl">
                  Certifications
                </h2>
                <div className="h-1 w-20 bg-primary rounded"></div>
              </div>
              
              <div className="max-w-6xl mx-auto px-4">
                <Certifications />
              </div>
            </div>
          </section>
        </SectionTransition>

        {/* Contact Section */}
        <SectionTransition>
          <section className="py-20 bg-foreground/[0.02]" id="contact">
            <div className="container mx-auto px-8 md:px-16 xl:px-20">
              <div className="mb-16 md:w-2/3 lg:w-1/2">
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-4xl">
                  Contact Me
                </h2>
                <div className="h-1 w-20 bg-primary rounded"></div>
              </div>
              
              <div className="max-w-6xl mx-auto px-4">
                <Contact />
              </div>
            </div>
          </section>
        </SectionTransition>
      </main>
      <Footer />
      <ScrollToTop />
    </PageTransition>
  );
}
