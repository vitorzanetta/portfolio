export default function PortfolioRedesign() {
  const projects = [
    {
      impact: "+€1.18M",
      title: "Procurement Analytics & Savings Dashboard",
      description:
        "Centralized purchasing KPIs, supplier performance and savings visibility into an executive Power BI experience for strategic decision-making.",
      stack: ["Power BI", "SQL", "DAX", "SAP BW"],
    },
    {
      impact: "DP-700",
      title: "Microsoft Fabric Lakehouse Pipeline",
      description:
        "Built a medallion-style data flow with ingestion, transformation and analytics-ready layers using Fabric components and modern engineering practices.",
      stack: ["Fabric", "Python", "KQL", "Lakehouse"],
    },
    {
      impact: "IoT + Data",
      title: "Water Monitoring with ESP32",
      description:
        "Concept for capturing water consumption signals from sensors and transforming them into real-time dashboards and operational insights.",
      stack: ["ESP32", "Python", "IoT", "Dashboard"],
    },
  ];

  const stackGroups = [
    {
      label: "DATA",
      value: "Python, SQL, Power BI, DAX, Pandas, PySpark",
    },
    {
      label: "PLATFORMS",
      value: "Microsoft Fabric, Databricks, Azure, GitHub",
    },
    {
      label: "BUSINESS",
      value: "Procurement Analytics, KPI Automation, Executive Reporting",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-cyan-400/20 selection:text-cyan-300">
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_30%)]" />

        <header className="sticky top-0 z-30 border-b border-white/10 bg-black/75 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <a href="#home" className="font-mono text-sm uppercase tracking-[0.25em] text-white">
              VITOR_ZANETTA <span className="text-cyan-400">v3.0</span>
            </a>

            <nav className="hidden gap-8 font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-300 md:flex">
              <a href="#projects" className="transition hover:text-cyan-400">
                Projects
              </a>
              <a href="#stack" className="transition hover:text-cyan-400">
                Stack
              </a>
              <a href="#about" className="transition hover:text-cyan-400">
                About
              </a>
              <a href="#contact" className="transition hover:text-cyan-400">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section id="home" className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pb-24 md:pt-24">
            <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_0.65fr]">
              <div>
                <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-cyan-400">
                  Data Analyst | Analytics Engineer | BI
                </p>

                <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  Turning business data into
                  <span className="text-zinc-400"> strategic clarity.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-300 md:text-xl">
                  I build dashboards, pipelines and analytical solutions focused on
                  performance, efficiency and decision-making. Strong background in
                  procurement analytics, Power BI and modern data platforms.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="border border-cyan-400/50 bg-cyan-400/10 px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300 transition hover:bg-cyan-400/20"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="border border-white/15 px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-zinc-200 transition hover:border-white/30 hover:bg-white/5"
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <MetricCard value="5+" label="YEARS WITH DATA" />
                <MetricCard value="DP-700" label="FABRIC CERTIFIED" />
                <MetricCard value="Power BI" label="BUSINESS IMPACT DASHBOARDS" />
                <MetricCard value="SQL + Python" label="CORE TOOLSET" />
              </div>
            </div>
          </section>

          <section id="projects" className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <SectionLabel>Selected_Case_Studies</SectionLabel>

            <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group bg-zinc-950/95 p-7 transition duration-300 hover:bg-zinc-900"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-400">
                      {project.impact}
                    </span>
                    <span className="text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:text-cyan-400">
                      ↗
                    </span>
                  </div>

                  <h3 className="max-w-xs text-2xl font-bold leading-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 min-h-[96px] text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="stack" className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Technical Environment
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                  My workflow combines analytics, business understanding and data
                  engineering foundations. I focus on solutions that are clear,
                  scalable and decision-oriented.
                </p>

                <div className="mt-10 space-y-4">
                  {stackGroups.map((group) => (
                    <div
                      key={group.label}
                      className="border border-white/10 bg-black/30 px-5 py-5"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                        {group.label}
                      </p>
                      <p className="mt-2 text-lg text-zinc-100">{group.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-white/10 bg-zinc-950/90 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-zinc-300">
{`# analytics_pipeline.py
import pandas as pd
import numpy as np

sales = pd.read_csv("business_data.csv")
validated = sales.dropna(subset=["value"])
summary = validated.groupby("category")["value"].sum()

print("Insights ready for decision-making")`}
                </pre>
              </div>
            </div>
          </section>

          <section id="about" className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="border border-white/10 bg-zinc-950/80 p-8 md:p-10">
              <SectionLabel>About_Me</SectionLabel>
              <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <h2 className="text-3xl font-bold text-white md:text-4xl">
                    Business-oriented analytics with engineering mindset.
                  </h2>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
                    I come from a strong analytics background in procurement and
                    business intelligence, where I built dashboards, automated KPI
                    tracking and supported management decisions with reliable data.
                    Today, I am expanding that foundation into data engineering,
                    cloud analytics and portfolio projects that connect technical
                    execution with measurable impact.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <MiniStat title="Focus" value="Analytics, BI, Data Engineering" />
                  <MiniStat title="Strength" value="Turning complexity into clarity" />
                  <MiniStat title="Goal" value="Build modern, impactful data solutions" />
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-10 md:pb-28">
            <div className="flex flex-col items-center justify-center border border-white/10 bg-black/40 px-6 py-20 text-center">
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Ready for the next project?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                Open to analytics, BI and data engineering opportunities where data
                can drive real operational and strategic value.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <SocialButton label="GitHub" href="https://github.com/vitorzanetta" />
                <SocialButton label="LinkedIn" href="#" />
                <SocialButton label="Email" href="mailto:seuemail@exemplo.com" />
              </div>

              <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                © 2026 VITOR_ZANETTA // ALL RIGHTS RESERVED
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="inline-block border-b border-cyan-400 pb-2 font-mono text-xs uppercase tracking-[0.35em] text-zinc-300">
      {children}
    </div>
  );
}

function MetricCard({ value, label }) {
  return (
    <div className="border border-white/10 bg-black/45 p-5 backdrop-blur-sm">
      <div className="text-3xl font-bold text-cyan-400">{value}</div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400">
        {label}
      </div>
    </div>
  );
}

function MiniStat({ title, value }) {
  return (
    <div className="border border-white/10 bg-black/40 p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400">
        {title}
      </p>
      <p className="mt-2 text-base leading-7 text-zinc-200">{value}</p>
    </div>
  );
}

function SocialButton({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="border border-white/10 px-5 py-4 font-mono text-xs uppercase tracking-[0.28em] text-zinc-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
    >
      {label}
    </a>
  );
}
