import { Quote } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            About
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            A little about <span className="text-gradient">me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg">
            <p>
              Arshima Pathan is a second-year engineering student specializing in{" "}
              <span className="font-semibold text-gradient">Data Science</span>, with a
              growing interest in{" "}
              <span className="font-semibold text-gradient">Full-Stack Web Development</span>.
              She enjoys building responsive and user-friendly web applications while
              continuously improving her technical skills.
            </p>
            <p>
              She is currently exploring both frontend and backend technologies and
              actively working on projects that strengthen her practical understanding of
              development. Her goal is to build efficient, real-world solutions and grow
              into a skilled and versatile developer.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-primary opacity-60 blur-md" />
            <div className="relative rounded-3xl border border-border bg-card/80 p-8 shadow-soft backdrop-blur md:p-10">
              <Quote className="text-primary" size={36} />
              <p className="mt-4 font-display text-2xl leading-snug text-foreground md:text-3xl">
                "Design is intelligence made visible — and kindness made tangible."
              </p>
              <p className="mt-5 text-sm text-muted-foreground">— a thought I live by</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
