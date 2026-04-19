import { Linkedin, Mail } from "lucide-react";

const socials = [
  {
    icon: Mail,
    label: "Email Arshima",
    href: "mailto:arshimapathan07@gmail.com",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/in/arshima-pathan-3a3248360",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/60 py-10 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-sm font-semibold text-white shadow-soft">
            AP
          </span>
          <div>
            <p className="font-display text-base">Arshima Pathan</p>
            <p className="text-xs text-muted-foreground">Crafting with care, one detail at a time.</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/70 text-foreground/70 transition-all hover:border-primary/40 hover:text-primary hover:scale-110"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Arshima Pathan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
