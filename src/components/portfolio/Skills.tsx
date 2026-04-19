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
            A focused toolkit for building polished, end-to-end web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group relative rounded-3xl border border-border bg-card/70 p-6 shadow-soft backdrop-blur transition-all hover:-translate-y-1 hover:shadow-elegant md:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-primary opacity-70" />
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl">{g.title}</h3>
                <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                  {g.skills.length} skills
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{g.subtitle}</p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="group/chip relative inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium text-foreground/80 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground hover:shadow-elegant"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary transition-transform group-hover/chip:scale-125" />
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
