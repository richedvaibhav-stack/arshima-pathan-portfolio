import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const projects = [
  {
    title: "Project One",
    desc: "A short placeholder description of what this project is about and why it mattered.",
    tags: ["Tag 01", "Tag 02", "Tag 03"],
  },
  {
    title: "Project Two",
    desc: "Replace with a real case study — the problem, your role, and the outcome.",
    tags: ["Tag 01", "Tag 02"],
  },
  {
    title: "Project Three",
    desc: "Another placeholder — perfect for showcasing a creative or technical build.",
    tags: ["Tag 01", "Tag 02", "Tag 03"],
  },
];

const previewGradients = [
  "linear-gradient(135deg, oklch(0.86 0.1 15), oklch(0.85 0.08 320))",
  "linear-gradient(135deg, oklch(0.86 0.08 60), oklch(0.85 0.1 15))",
  "linear-gradient(135deg, oklch(0.85 0.08 300), oklch(0.86 0.08 200))",
];

export function Projects() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Projects
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Selected <span className="text-gradient">work</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            A handful of placeholder projects to showcase structure — real work coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/80 shadow-soft backdrop-blur transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div
                className="relative aspect-[4/3] w-full overflow-hidden"
                style={{ background: previewGradients[i % previewGradients.length] }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-background/80 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-foreground/70 backdrop-blur">
                  Case study
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-medium text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    View Project
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
