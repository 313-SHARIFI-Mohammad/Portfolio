import { useState } from "react";
import { cn } from "../lib/utils";

const skillsData = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 98, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 88, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 99, category: "tools" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            My <span className="text-primary text-glow">Skills</span>
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center items-center gap-2 md:gap-4 mb-12 flex-wrap">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(139,92,246,0.5)] scale-105"
                    : "text-foreground/70 hover:text-foreground hover:bg-card/60"
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-xl bg-card/60 backdrop-blur-md border border-border/50 card-hover flex flex-col justify-between text-left"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-foreground">
                  {skill.name}
                </span>
              </div>

              {/* Progress Bar Container */}
              <div>
                <div className="w-full bg-border/40 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_hsl(var(--primary))]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-right mt-2">
                  <span className="text-sm font-medium text-foreground/70">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};