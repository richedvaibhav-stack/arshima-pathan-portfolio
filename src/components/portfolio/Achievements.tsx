import * as React from "react";
import { Award, X, Building2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import certStbif from "@/assets/cert-stbif.jpeg";
import certHackstart from "@/assets/cert-hackstart.jpeg";
import certDeloitte from "@/assets/cert-deloitte.jpeg";

type Achievement = {
  image: string;
  title: string;
  org: string;
  desc: string;
  tag: string;
};

const items: Achievement[] = [
  {
    image: certStbif,
    title: "Virtual Internship on Wearable Electronics",
    org: "Suryodaya Technology Business Incubator Foundation (STBIF)",
    desc: "Completed a virtual internship focused on Arduino programming, sensor interfacing, and real-time data visualization.",
    tag: "Internship",
  },
  {
    image: certHackstart,
    title: "Hack-Start 2.0 Hackathon",
    org: "Codexa Solutions",
    desc: "Participated in the hackathon class and recognized as “Hack Innovator” for problem-solving and innovative thinking.",
    tag: "Hackathon",
  },
  {
    image: certDeloitte,
    title: "Deloitte Cyber Job Simulation",
    org: "Deloitte (via Forage)",
    desc: "Completed a cybersecurity job simulation with real-world tasks and practical exposure to core cyber security concepts.",
    tag: "Simulation",
  },
];

export function Achievements() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = React.useState<Achievement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Achievements
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Certificates &amp; <span className="text-gradient">recognitions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            A growing collection of milestones — internships, hackathons, and industry simulations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card/80 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() => setOpen(it)}
                className="relative block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`View ${it.title} certificate`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-soft">
                  <img
                    src={it.image}
                    alt={`${it.title} certificate`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground opacity-0 shadow-soft backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  Click to view
                </span>
              </button>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-soft px-3 py-1 text-xs font-medium text-foreground/80">
                    <Award size={12} className="text-primary" />
                    {it.tag}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg leading-snug">{it.title}</h3>
                <p className="mt-2 flex items-start gap-1.5 text-xs text-muted-foreground">
                  <Building2 size={12} className="mt-0.5 shrink-0 text-primary/70" />
                  <span>{it.org}</span>
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${open.title} certificate preview`}
          onClick={() => setOpen(null)}
          className={cn(
            "fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md",
            "animate-in fade-in duration-200",
          )}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground shadow-soft backdrop-blur transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X size={18} />
            </button>
            <div className="bg-gradient-soft">
              <img
                src={open.image}
                alt={`${open.title} certificate full view`}
                className="mx-auto max-h-[80vh] w-full object-contain"
              />
            </div>
            <div className="border-t border-border p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-soft px-3 py-1 text-xs font-medium text-foreground/80">
                  <Award size={12} className="text-primary" />
                  {open.tag}
                </span>
                <span className="text-xs text-muted-foreground">{open.org}</span>
              </div>
              <h3 className="mt-2 font-display text-xl">{open.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{open.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
