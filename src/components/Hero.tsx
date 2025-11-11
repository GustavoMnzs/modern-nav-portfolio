import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10 flex-1 flex items-center">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in-up w-full">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none">
              Gustavo{" "}
              <span className="text-primary">
                Menezes
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-medium text-muted-foreground tracking-tight">
              Desenvolvedor{" "}
              <span className="text-primary font-semibold">Front-End</span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Especializado em WordPress/Elementor · Performance · UX · Conversão
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-background hover:bg-primary/95 hover:shadow-[0_20px_50px_hsl(180,100%,50%,0.4)] transition-all duration-300 text-base px-8 py-6 rounded-xl font-semibold"
            >
              Ver Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-border/50 text-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 text-base px-8 py-6 rounded-xl backdrop-blur-sm font-semibold"
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>

      {/* Mouse scroll indicator - positioned at bottom */}
      <div 
        onClick={() => scrollToSection("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-light text-muted-foreground/50 group-hover:text-primary transition-colors duration-300 tracking-wider uppercase">Scroll</span>
          {/* Mouse SVG */}
          <div className="relative w-6 h-10 border-2 border-muted-foreground/30 group-hover:border-primary/50 rounded-full transition-colors duration-300">
            {/* Scroll wheel animation */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-primary/60 rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
