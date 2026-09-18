import { Download, Briefcase, Code, User } from "lucide-react";
import resumeFile from "../assets/Mohammad Sharifi CV(0).pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About <span className="text-primary text-glow">Me</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Bio & Action Buttons */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
              With over 5 years of experience in web development, I specialize in creating responsive, accessible, and performant web applications using modern technologies.
            </p>

            <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
              I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="cosmic-button inline-flex items-center justify-center">
                Get In Touch
              </a>
              <a
                href={resumeFile}
                download="Mohammad_Sharifi_CV.pdf"
                className="px-6 py-2 rounded-full border border-border bg-card/50 hover:bg-card hover:border-primary/50 text-foreground font-medium transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2"
              >
                <span>Download CV</span>
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Skill Cards */}
          <div className="space-y-4">
            {/* Card 1: Web Development */}
            <div className="p-6 rounded-xl bg-card/60 backdrop-blur-md border border-border/50 flex items-start space-x-4 card-hover text-left">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  Web Development
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Creating responsive websites and web applications with modern frameworks.
                </p>
              </div>
            </div>

            {/* Card 2: UI/UX Design */}
            <div className="p-6 rounded-xl bg-card/60 backdrop-blur-md border border-border/50 flex items-start space-x-4 card-hover text-left">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  UI/UX Design
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Designing intuitive user interfaces and seamless user experiences.
                </p>
              </div>
            </div>

            {/* Card 3: Project Management */}
            <div className="p-6 rounded-xl bg-card/60 backdrop-blur-md border border-border/50 flex items-start space-x-4 card-hover text-left">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  Project Management
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Leading projects from conception to completion with agile methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};