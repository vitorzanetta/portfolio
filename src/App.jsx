import { useEffect, useState } from "react";

export default function PortfolioRedesign() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang");
    if (savedLang === "en" || savedLang === "pt") {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
  }, [lang]);

  const content = {
    en: {
      nav: {
        projects: "Projects",
        stack: "Stack",
        about: "About",
        contact: "Contact",
      },
      hero: {
        role: "Data Analyst | Analytics Engineer | BI",
        title1: "Turning business",
        title2: "data into",
        title3: "strategic clarity.",
        description:
          "I build dashboards, pipelines and analytical solutions focused on performance, efficiency and decision-making. Strong background in procurement analytics, Power BI and modern data platforms.",
        viewProjects: "View Projects",
        contactMe: "Contact Me",
      },
      metrics: {
        years: "YEARS WITH DATA",
        certified: "FABRIC CERTIFIED",
        dashboards: "BUSINESS IMPACT DASHBOARDS",
        toolset: "CORE TOOLSET",
      },
      sectionLabels: {
        projects: "Selected_Case_Studies",
        about: "About_Me",
      },
      projects: [
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
      ],
      stackSection: {
        title: "Technical Environment",
        description:
          "My workflow combines analytics, business understanding and data engineering foundations. I focus on solutions that are clear, scalable and decision-oriented.",
        groups: [
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
        ],
      },
      codeBlock: `# analytics_pipeline.py
import pandas as pd
import numpy as np

sales = pd.read_csv("business_data.csv")
validated = sales.dropna(subset=["value"])
summary = validated.groupby("category")["value"].sum()

print("Insights ready for decision-making")`,
      about: {
        title: "Business-oriented analytics with engineering mindset.",
        description:
          "I come from a strong analytics background in procurement and business intelligence, where I built dashboards, automated KPI tracking and supported management decisions with reliable data. Today, I am expanding that foundation into data engineering, cloud analytics and portfolio projects that connect technical execution with measurable impact.",
        stats: [
          {
            title: "Focus",
            value: "Analytics, BI, Data Engineering",
          },
          {
            title: "Strength",
            value: "Turning complexity into clarity",
          },
          {
            title: "Goal",
            value: "Build modern, impactful data solutions",
          },
        ],
      },
      contact: {
        title: "Ready for the next project?",
        description:
          "Open to analytics, BI and data engineering opportunities where data can drive real operational and strategic value.",
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email",
        footer: "© 2026 VITOR_ZANETTA // ALL RIGHTS RESERVED",
      },
      languageButton: "PT",
    },
    pt: {
      nav: {
        projects: "Projetos",
        stack: "Stack",
        about: "Sobre",
        contact: "Contato",
      },
      hero: {
        role: "Analista de Dados | Engenheiro de Analytics | BI",
        title1: "Transformando dados",
        title2: "de negócio em",
        title3: "clareza estratégica.",
        description:
          "Construo dashboards, pipelines e soluções analíticas focadas em performance, eficiência e tomada de decisão. Forte experiência em analytics de compras, Power BI e plataformas modernas de dados.",
        viewProjects: "Ver Projetos",
        contactMe: "Fale Comigo",
      },
      metrics: {
        years: "ANOS COM DADOS",
        certified: "CERTIFICADO FABRIC",
        dashboards: "DASHBOARDS COM IMPACTO",
        toolset: "STACK PRINCIPAL",
      },
      sectionLabels: {
        projects: "Estudos_De_Caso",
        about: "Sobre_Mim",
      },
      projects: [
        {
          impact: "+€1.18M",
          title: "Dashboard de Analytics e Savings em Compras",
          description:
            "Centralização de KPIs de compras, performance de fornecedores e visibilidade de savings em uma experiência executiva no Power BI para apoiar decisões estratégicas.",
          stack: ["Power BI", "SQL", "DAX", "SAP BW"],
        },
        {
          impact: "DP-700",
          title: "Pipeline Lakehouse com Microsoft Fabric",
          description:
            "Construção de um fluxo em estilo medallion com ingestão, transformação e camadas prontas para análise usando componentes do Fabric e práticas modernas de engenharia.",
          stack: ["Fabric", "Python", "KQL", "Lakehouse"],
        },
        {
          impact: "IoT + Dados",
          title: "Monitoramento de Água com ESP32",
          description:
            "Conceito para capturar sinais de consumo de água com sensores e transformá-los em dashboards em tempo real e insights operacionais.",
          stack: ["ESP32", "Python", "IoT", "Dashboard"],
        },
      ],
      stackSection: {
        title: "Ambiente Técnico",
        description:
          "Meu fluxo de trabalho combina analytics, visão de negócio e fundamentos de engenharia de dados. Meu foco é criar soluções claras, escaláveis e orientadas à decisão.",
        groups: [
          {
            label: "DADOS",
            value: "Python, SQL, Power BI, DAX, Pandas, PySpark",
          },
          {
            label: "PLATAFORMAS",
            value: "Microsoft Fabric, Databricks, Azure, GitHub",
          },
          {
            label: "NEGÓCIO",
            value: "Analytics de Compras, Automação de KPIs, Relatórios Executivos",
          },
        ],
      },
      codeBlock: `# analytics_pipeline.py
import pandas as pd
import numpy as np

sales = pd.read_csv("business_data.csv")
validated = sales.dropna(subset=["value"])
summary = validated.groupby("category")["value"].sum()

print("Insights prontos para apoiar decisões")`,
      about: {
        title: "Analytics orientado ao negócio com mentalidade de engenharia.",
        description:
          "Venho de uma base sólida em analytics e business intelligence na área de compras, onde desenvolvi dashboards, automatizei indicadores e apoiei decisões gerenciais com dados confiáveis. Hoje, estou expandindo essa base para engenharia de dados, analytics em cloud e projetos de portfólio que conectam execução técnica com impacto mensurável.",
        stats: [
          {
            title: "Foco",
            value: "Analytics, BI, Engenharia de Dados",
          },
          {
            title: "Força",
            value: "Transformar complexidade em clareza",
          },
          {
            title: "Objetivo",
            value: "Construir soluções modernas e de impacto com dados",
          },
        ],
      },
      contact: {
        title: "Pronto para o próximo projeto?",
        description:
          "Aberto a oportunidades em analytics, BI e engenharia de dados onde os dados possam gerar valor operacional e estratégico real.",
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email",
        footer: "© 2026 VITOR_ZANETTA // TODOS OS DIREITOS RESERVADOS",
      },
      languageButton: "EN",
    },
  };

  const t = content[lang];

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
            <a
              href="#home"
              className="font-mono text-sm uppercase tracking-[0.25em] text-white"
            >
              VITOR SANTOS <span className="text-cyan-400">v3.0</span>
            </a>

            <div className="flex items-center gap-4 md:gap-6">
              <nav className="hidden gap-8 font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-300 md:flex">
                <a href="#projects" className="transition hover:text-cyan-400">
                  {t.nav.projects}
                </a>
                <a href="#stack" className="transition hover:text-cyan-400">
                  {t.nav.stack}
                </a>
                <a href="#about" className="transition hover:text-cyan-400">
                  {t.nav.about}
                </a>
                <a href="#contact" className="transition hover:text-cyan-400">
                  {t.nav.contact}
                </a>
              </nav>

              <button
                onClick={() => setLang(lang === "en" ? "pt" : "en")}
                className="border border-white/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {t.languageButton}
              </button>
            </div>
          </div>
        </header>

        <main>
          <section
            id="home"
            className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pb-24 md:pt-24"
          >
            <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_0.65fr]">
              <div>
                <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-cyan-400">
                  {t.hero.role}
                </p>

                <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  {t.hero.title1}
                  <br />
                  {t.hero.title2}
                  <br />
                  <span className="text-zinc-400">{t.hero.title3}</span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-300 md:text-xl">
                  {t.hero.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="border border-cyan-400/50 bg-cyan-400/10 px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300 transition hover:bg-cyan-400/20"
                  >
                    {t.hero.viewProjects}
                  </a>
                  <a
                    href="#contact"
                    className="border border-white/15 px-5 py-3 font-mono text-xs uppercase tracking-[0.3em] text-zinc-200 transition hover:border-white/30 hover:bg-white/5"
                  >
                    {t.hero.contactMe}
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <MetricCard value="5+" label={t.metrics.years} />
                <MetricCard value="DP-700" label={t.metrics.certified} />
                <MetricCard value="Power BI" label={t.metrics.dashboards} />
                <MetricCard value="SQL + Python" label={t.metrics.toolset} />
              </div>
            </div>
          </section>

          <section id="projects" className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <SectionLabel>{t.sectionLabels.projects}</SectionLabel>

            <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
              {t.projects.map((project) => (
                <article
                  key={`${lang}-${project.title}`}
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
                  {t.stackSection.title}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                  {t.stackSection.description}
                </p>

                <div className="mt-10 space-y-4">
                  {t.stackSection.groups.map((group) => (
                    <div
                      key={`${lang}-${group.label}`}
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
                  {t.codeBlock}
                </pre>
              </div>
            </div>
          </section>

          <section id="about" className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="border border-white/10 bg-zinc-950/80 p-8 md:p-10">
              <SectionLabel>{t.sectionLabels.about}</SectionLabel>
              <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <h2 className="text-3xl font-bold text-white md:text-4xl">
                    {t.about.title}
                  </h2>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
                    {t.about.description}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {t.about.stats.map((stat) => (
                    <MiniStat
                      key={`${lang}-${stat.title}`}
                      title={stat.title}
                      value={stat.value}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-10 md:pb-28">
            <div className="flex flex-col items-center justify-center border border-white/10 bg-black/40 px-6 py-20 text-center">
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                {t.contact.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                {t.contact.description}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <SocialButton
                  label={t.contact.github}
                  href="https://github.com/vitorzanetta"
                />
                <SocialButton
                  label={t.contact.linkedin}
                  href="#"
                />
                <SocialButton
                  label={t.contact.email}
                  href="mailto:seuemail@exemplo.com"
                />
              </div>

              <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                {t.contact.footer}
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