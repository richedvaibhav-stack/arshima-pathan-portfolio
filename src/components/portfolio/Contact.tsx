import { Linkedin, Mail, Send } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const rows = [
  {
    icon: Mail,
    label: "Email",
    value: "arshimapathan07@gmail.com",
    href: "mailto:arshimapathan07@gmail.com",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/arshima-pathan",
    href: "https://www.linkedin.com/in/arshima-pathan-3a3248360",
    external: true,
  },
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-gradient-soft opacity-60 blur-3xl" />
      </div>

      <div ref={ref} className="reveal mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Contact
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Let's build something <span className="text-gradient">together</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* contact card */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-primary opacity-40 blur-md" />
            <div className="relative h-full rounded-3xl border border-border bg-card/85 p-8 shadow-soft backdrop-blur md:p-10">
              <h3 className="font-display text-2xl">Get in touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach out via email or connect on LinkedIn — happy to chat.
              </p>

              <ul className="mt-6 space-y-3">
                {rows.map(({ icon: Icon, label, value, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-4 transition-all hover:border-primary/40 hover:scale-[1.02]"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-soft text-foreground transition-colors group-hover:text-primary">
                        <Icon size={18} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                          {label}
                        </p>
                        <p className="truncate text-sm text-foreground">{value}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-border bg-card/85 p-8 shadow-soft backdrop-blur md:p-10"
          >
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me a little about your idea…"
                  className="mt-1.5 w-full resize-none rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Send message
                <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
