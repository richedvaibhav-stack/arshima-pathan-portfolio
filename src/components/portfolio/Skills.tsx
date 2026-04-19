import { useReveal } from "@/hooks/use-reveal";

const groups = [
  {
    title: "Frontend",
    subtitle: "Crafting interfaces",
    skills: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Back-end",
    subtitle: "Powering the logic",
    skills: ["Node.js", "Express.js"],
  },
];

export function Skills() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-soft opacity-60 blur-3xl" />
      </div>

      <div ref={ref} className="reveal mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Skills
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            What I'm <span className="text-gradient">building with</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Placeholder skills — swap in real ones whenever you're ready.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group relative rounded-3xl border border-border bg-card/70 p-6 shadow-soft backdrop-blur transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-primary opacity-70" />
              <h3 className="font-display text-xl">{g.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">Category placeholder</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground/75 transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
