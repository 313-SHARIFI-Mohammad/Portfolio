import { ArrowRight, ExternalLink } from "lucide-react";

import ecommercePic from "../assets/Pic/Pic of the ecommerce webiste.PNG";
import youtubePic from "../assets/Pic/Youtube Clone pic.PNG";
import PhoChuMapPic from "../assets/Pic/PhoChuMapPic.png";

// Custom Github SVG component (fixes the missing lucide-react import)
const GithubIcon = ({ className = "h-5 w-5" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const projectsData = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-featured e-commerce platform with product listings, dynamic cart management, and seamless modern design.",
    image: ecommercePic,
    tags: ["React", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/313-SHARIFI-Mohammad/E-commerce-Website.git",
    liveUrl: "https://313-sharifi-ecommerce-web.vercel.app/",
  },
  {
    id: 2,
    title: "YouTube Clone",
    description: "A YouTube frontend clone built with React featuring video playback, responsive layout, and custom UI components.",
    image: youtubePic,
    tags: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/313-SHARIFI-Mohammad/YouTube-Website-Clone.git",
    liveUrl: "https://youtube-clone-sable-psi-48.vercel.app/",
  },
  {
    id: 3,
    title: "Pho Chu Map Restaurant",
      description: "A restaurant website for Pho Chu Map, showcasing menu items, location, and contact information with a clean and user-friendly interface.",
      image: PhoChuMapPic,
    tags: ["React", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/313-SHARIFI-Mohammad/Pho-Chu-Map-Restaurant-.git",
    liveUrl: "https://pho-chu-map-restaurant.vercel.app/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-sm md:text-base">
            Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-xl bg-card/60 backdrop-blur-md border border-border/50 overflow-hidden card-hover flex flex-col justify-between text-left"
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-border/40">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors p-1"
                      title="View Live Site"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  ) : (
                    <span className="text-foreground/30 cursor-not-allowed p-1" title="Live site coming soon">
                      <ExternalLink className="h-5 w-5" />
                    </span>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors p-1"
                    title="View GitHub Code"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/313-SHARIFI-Mohammad"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button inline-flex items-center justify-center gap-2 text-base px-8 py-3"
          >
            <span>Check My GitHub</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};