import * as React from "react";
import { ArrowUpRight, X, Sparkles, UserCheck, AlertTriangle, Rocket, Mic, Droplets, Leaf } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  short: string;
  desc: string;
  tags: string[];
  features: string[];
  contribution: string;
  challenges: string;
  future: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Voice Modulation System (IIoT-Based)",
    short: "Embedded voice capture and audio output system using Arduino and sound sensors.",
    desc: "Developed a basic voice processing system to capture and output audio signals using embedded hardware.",
    tags: ["Arduino", "Sound Sensor", "Speaker Module", "IIoT"],
    features: [
      "Real-time voice signal capture",
      "Basic audio processing and output",
      "Hardware-based signal handling",
    ],
    contribution:
      "Assisted in hardware connections and ensured proper interfacing between components. Contributed to understanding and explaining system workflow and signal flow within the project.",
    challenges: "Managing noise interference and ensuring stable connections.",
    future: "Advanced voice modulation using DSP techniques.",
    Icon: Mic,
    gradient: "linear-gradient(135deg, oklch(0.86 0.1 15), oklch(0.85 0.08 320))",
  },
  {
    title: "Water Level Detection System (IIoT)",
    short: "Sensor-based water level monitoring with real-time alerts using NodeMCU.",
    desc: "Built a system to monitor water levels using sensor-based detection and microcontroller processing.",
    tags: ["Arduino / NodeMCU", "Ultrasonic Sensor", "Buzzer", "LED"],
    features: [
      "Real-time water level sensing",
      "Alert system for critical levels",
      "Expandable to IoT applications",
    ],
    contribution:
      "Supported circuit assembly and component connections. Helped in explaining system functionality and assisted in testing sensor responses.",
    challenges: "Inconsistent sensor readings and calibration issues.",
    future: "Integration with IoT platforms for remote monitoring.",
    Icon: Droplets,
    gradient: "linear-gradient(135deg, oklch(0.86 0.08 60), oklch(0.85 0.1 15))",
  },
  {
    title: "Smart Environment Monitoring System",
    short: "Multi-sensor environment tracker for temperature, humidity, and air quality.",
    desc: "Designed a system to monitor environmental parameters like temperature, humidity, and air quality.",
    tags: ["Arduino / ESP8266", "DHT11", "MQ135 Sensor"],
    features: [
      "Multi-sensor data collection",
      "Real-time monitoring",
      "Threshold-based alerts",
    ],
    contribution:
      "Assisted in sensor connections and setup. Contributed to understanding and explaining how data is collected and processed within the system.",
    challenges: "Sensor calibration and maintaining consistent readings.",
    future: "Integration with dashboards and predictive analytics.",
    Icon: Leaf,
    gradient: "linear-gradient(135deg, oklch(0.85 0.08 300), oklch(0.86 0.08 200))",
  },
];

export function Projects() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = React.useState<Project | null>(null);

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
            Hands-on builds across embedded systems and IIoT — exploring sensors, signals, and smart monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => {
            const Icon = p.Icon;
            return (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/80 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden"
                  style={{ background: p.gradient }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-background/80 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-foreground/70 backdrop-blur">
                    Case study
                  </span>
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-20 w-20 place-items-center rounded-2xl bg-background/70 text-primary shadow-soft backdrop-blur transition-transform duration-500 group-hover:scale-110">
                      <Icon size={36} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.short}</p>

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
                    <button
                      type="button"
                      onClick={() => setOpen(p)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:text-primary"
                    >
                      View details
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${open.title} details`}
          onClick={() => setOpen(null)}
          className={cn(
            "fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md",
            "animate-in fade-in duration-200",
          )}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground shadow-soft backdrop-blur transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X size={18} />
            </button>

            <div
              className="relative h-32 w-full md:h-40"
              style={{ background: open.gradient }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-background/80 text-primary shadow-soft backdrop-blur">
                  <open.Icon size={22} />
                </div>
                <h3 className="font-display text-xl md:text-2xl">{open.title}</h3>
              </div>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-6 md:p-8">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {open.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {open.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-medium text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <DetailBlock
                  icon={<Sparkles size={14} className="text-primary" />}
                  title="Key Features"
                >
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {open.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </DetailBlock>

                <DetailBlock
                  icon={<UserCheck size={14} className="text-primary" />}
                  title="Contribution"
                >
                  <p className="text-sm text-muted-foreground">{open.contribution}</p>
                </DetailBlock>

                <DetailBlock
                  icon={<AlertTriangle size={14} className="text-primary" />}
                  title="Challenges"
                >
                  <p className="text-sm text-muted-foreground">{open.challenges}</p>
                </DetailBlock>

                <DetailBlock
                  icon={<Rocket size={14} className="text-primary" />}
                  title="Future Scope"
                >
                  <p className="text-sm text-muted-foreground">{open.future}</p>
                </DetailBlock>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function DetailBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background/40 p-4">
      <div className="mb-2 flex items-center gap-2">
        {icon}
        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
          {title}
        </h4>
      </div>
      {children}
    </div>
  );
}
