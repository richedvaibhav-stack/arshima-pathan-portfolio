import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import profilePhoto from "@/assets/arshima-profile.png";

export function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      {/* ambient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-gradient-soft opacity-70 blur-3xl animate-blob" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div
        ref={ref}
        className="reveal mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-[1.1fr_0.9fr] md:gap-16"
      >
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-foreground/70 backdrop-blur">
            <Sparkles size={14} className="text-primary" />
            Welcome to my portfolio
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Arshima <span className="text-gradient animate-gradient-drift">Pathan</span>
          </h1>

          <p className="mt-5 max-w-xl font-display text-xl text-foreground/80 md:text-2xl">
            Modern Portfolio Website
          </p>

          <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            Aspiring professional <span className="mx-1.5 text-primary">|</span> Creative builder
            <span className="mx-1.5 text-primary">|</span> Future achiever
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              View More
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              <Mail size={16} />
              Contact
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="group relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-full bg-gradient-primary opacity-30 blur-2xl animate-soft-float transition-opacity duration-500 group-hover:opacity-50" />
          <div className="relative aspect-square rounded-full bg-gradient-primary p-[3px] shadow-elegant transition-transform duration-500 group-hover:scale-[1.03]">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-card">
              <img
                src={profilePhoto}
                alt="Portrait of Arshima Pathan"
                loading="eager"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ filter: "contrast(1.05) saturate(1.05) brightness(1.02)" }}
              />
            </div>
          </div>
          {/* floating dots */}
          <span className="absolute -right-2 top-10 h-3 w-3 rounded-full bg-primary/70 shadow-soft animate-soft-float" />
          <span
            className="absolute -left-3 bottom-16 h-4 w-4 rounded-full bg-accent shadow-soft animate-soft-float"
            style={{ animationDelay: "1.5s" }}
          />
          <span
            className="absolute right-8 -bottom-2 h-2.5 w-2.5 rounded-full bg-foreground/40 animate-soft-float"
            style={{ animationDelay: "0.8s" }}
          />
        </div>
      </div>
    </section>
  );
}
