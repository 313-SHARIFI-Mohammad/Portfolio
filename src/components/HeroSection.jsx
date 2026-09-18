import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center"
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Main Heading (Smaller and on one line) */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          {/* Appears immediately */}
          <span className="inline-block animate-fade-in mr-3 md:mr-4">
            Hi!
          </span>
          
          {/* Appears after 0.7 seconds */}
          <span className="inline-block opacity-0 animate-[fade-in_0.7s_ease-out_0.7s_forwards]">
            I am <span className="relative z-10 text-primary font-light">Mohammad Sharifi</span>
          </span>
        </h1>

        {/* Short Portfolio Pitch (Appears after 1.4 seconds) */}
        <p className="max-w-2xl text-foreground/80 text-lg md:text-xl mb-10 opacity-0 animate-[fade-in_0.7s_ease-out_1.4s_forwards]">
          I am a passionate web developer dedicated to building immersive, interactive, 
          and modern digital experiences. I turn complex ideas into elegant, 
          user-friendly solutions that leave a lasting impact.
        </p>

        {/* Cosmic Button (Appears after 2.1 seconds) */}
        <div className="opacity-0 animate-[fade-in_0.7s_ease-out_2.1s_forwards]">
          <a href="#projects" className="cosmic-button inline-flex items-center justify-center text-lg">
            View My Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator (Appears after 2.8 seconds) */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 animate-[fade-in_0.7s_ease-out_2.8s_forwards] hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-xs font-medium text-foreground/60 mb-2 uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
      </a>
    </section>
  );
};