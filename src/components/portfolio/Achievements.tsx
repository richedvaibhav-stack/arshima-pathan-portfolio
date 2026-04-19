import { Award } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const items = [
  { date: "20XX", title: "Achievement Title 01", desc: "Short placeholder description of a milestone you'd like to highlight." },
  { date: "20XX", title: "Achievement Title 02", desc: "Replace with a recognition, certification, or proud moment." },
  { date: "20XX", title: "Achievement Title 03", desc: "Another milestone worth celebrating — coming soon." },
  { date: "20XX", title: "Achievement Title 04", desc: "Space saved for what's next on the journey." },
];

export function Achievements() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-4">
        <div className="mb-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Achievements
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Milestones along the <span className="text-gradient">way</span>
          </h2>
        </div>

        <div className="relative">
          {/* center line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ul className="space-y-10">
            {items.map((it, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={it.title}
                  className={cn(
                    "relative grid grid-cols-1 gap-4 md:grid-cols-2",
                    left ? "md:[&>*:first-child]:pr-10" : "md:[&>*:last-child]:pl-10",
                  )}
                >
                  {/* dot */}
                  <span className="absolute left-4 top-3 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-gradient-primary shadow-soft md:left-1/2" />

                  <div className={cn(left ? "md:order-1" : "md:order-2 md:col-start-2")}>
                    <div className="ml-10 rounded-3xl border border-border bg-card/80 p-6 shadow-soft backdrop-blur transition-transform hover:-translate-y-0.5 md:ml-0">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-gradient-soft px-3 py-1 text-xs font-medium text-foreground/80">
                          {it.date}
                        </span>
                        <Award size={14} className="text-primary" />
                      </div>
                      <h3 className="mt-3 font-display text-xl">{it.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                    </div>
                  </div>
                  <div className={cn("hidden md:block", left ? "md:order-2" : "md:order-1")} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
