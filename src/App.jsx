import React, { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { Linkedin, Github, Mail, FileText } from "lucide-react";

export default function App() {
  const [language, setLanguage] = useState("pt");

  const t = {
    pt: {
      menu: ["Sobre", "Projetos", "Contato"],
      theme: "Tema",
      switch: "EN",
      name: "Vitor Natã Zanetta Santos",
      title: "Projetos de dados | Business Intelligence | Engenharia de dados",
      aboutTitle: "Sobre mim",
      aboutText:
        "Engenheiro de Computação por formação com especialização em Gestão Empresarial e base sólida em análise de dados. Minha paixão por dados me levou a migrar para a área de análise, onde atuo desenvolvendo dashboards e relatórios que geram insights estratégicos, otimizam processos e apoiam decisões de negócio.\nNeste portfólio, compartilho projetos em análise de dados, programação e integração com dispositivos IoT, unindo tecnologia, engenharia e visão de negócios.",
      projectsTitle: "Projetos",
      contactTitle: "Contato",
      contactHint: "Clique nos ícones para contato ou baixar meu currículo",
      projects: [
        {
          title: "Análise de Vendas e Performance de Representantes",
          description:
            "Este projeto simula uma análise de dados de vendas utilizando SQL Server, Python e Power BI, com o objetivo de demonstrar um pipeline completo de dados — desde a ingestão até a visualização analítica.",
          tools: ["SQL Server", "Python (pandas, pyodbc)", "Power BI", "DAX", "VS Code"],
          image:
            "https://raw.githubusercontent.com/vitorzanetta/analise-vendas-representantes/main/powerbi/dashboard_vendas_preview.png",
          link: "https://github.com/vitorzanetta/analise-vendas-representantes",
        },
        {
          title: "Dashboard de Compras/Pedidos",
          description:
            "Dashboard interativo desenvolvido com Streamlit para análise de desempenho de fornecedores e pedidos de compra. Ideal para uso em aplicações reais de BI em Supply Chain.",
          tools: ["Python", "Streamlit", "Excel", "CSS", "VSCode"],
          image:
            "https://raw.githubusercontent.com/vitorzanetta/dashboard-compras/main/screenshot.png",
          link: "https://github.com/vitorzanetta/dashboard-compras",
        },
        {
          title: "Em construção...",
          description: "Projeto futuro em desenvolvimento.",
          tools: ["Em breve"],
          image: "https://via.placeholder.com/300x160?text=Em+construção",
          link: "#",
        },
      ],
    },
    en: {
      menu: ["About me", "Projects", "Contact"],
      theme: "Theme",
      switch: "PT",
      name: "Vitor Natã Zanetta Santos",
      title: "Data Projects | Business Intelligence | Data Engineering",
      aboutTitle: "About me",
      aboutText:
        "Computer Engineer by training with specialization in Business Management and a solid background in data analysis. My passion for data led me to migrate to the analytics area, where I develop dashboards and reports that generate strategic insights, optimize processes, and support business decisions.\nIn this portfolio, I share projects in data analytics, programming, and integration with IoT devices, uniting technology, engineering, and business vision.",
      projectsTitle: "Projects",
      contactTitle: "Contact",
      contactHint: "Click the icons to contact me or download my resume",
      projects: [
        {
          title: "Sales and Rep Performance Analysis",
          description:
            "This project simulates a sales data analysis using SQL Server, Python, and Power BI, aiming to demonstrate a complete data pipeline — from ingestion to analytical visualization.",
          tools: ["SQL Server", "Python (pandas, pyodbc)", "Power BI", "DAX", "VS Code"],
          image:
            "https://raw.githubusercontent.com/vitorzanetta/analise-vendas-representantes/main/powerbi/dashboard_vendas_preview.png",
          link: "https://github.com/vitorzanetta/analise-vendas-representantes",
        },
        {
          title: "Purchasing Orders Dashboard",
          description:
            "Interactive dashboard developed with Streamlit for analyzing supplier and purchase order performance. Ideal for real BI applications in Supply Chain.",
          tools: ["Python", "Streamlit", "Excel", "CSS", "VSCode"],
          image:
            "https://raw.githubusercontent.com/vitorzanetta/dashboard-compras/main/screenshot.png",
          link: "https://github.com/vitorzanetta/dashboard-compras",
        },
        {
          title: "Under construction...",
          description: "Future project in development.",
          tools: ["Coming soon"],
          image: "https://via.placeholder.com/300x160?text=Under+construction",
          link: "#",
        },
      ],
    },
  };

  const lang = t[language];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow z-50 px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-blue-700 dark:text-blue-400 text-lg">Vitor Santos</span>
        <ul className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          {lang.menu.map((item, idx) => (
            <li key={idx}><a href={`#${item.toLowerCase().replace(/ /g, "")}`} className="hover:text-blue-600 dark:hover:text-blue-400">{item}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={() => document.documentElement.classList.toggle("dark")}
            className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded hover:scale-105 transition"
          >
            🌗 {lang.theme}
          </button>
          <button
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            className="text-sm bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white px-3 py-1 rounded"
          >
            {lang.switch}
          </button>
        </div>
      </nav>

      {/* SOBRE */}
      <section id="sobre" className="scroll-mt-24 max-w-6xl mx-auto px-6 pt-32">
        <div className="bg-gray-200 dark:bg-gray-800 rounded-xl p-8 shadow-inner">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}vitor-perfil.png`}
                alt="Foto de Vitor Natã"
                className="w-56 h-56 rounded-full shadow-lg object-cover mt-2"
              />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{lang.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{lang.title}</p>
              <h3 className="text-lg font-semibold mb-2">{lang.aboutTitle}</h3>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">{lang.aboutText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="scroll-mt-24 px-6 my-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">{lang.projectsTitle}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lang.projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-24 max-w-3xl mx-auto text-center my-16">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">{lang.contactTitle}</h2>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://www.linkedin.com/in/vitor-natã-zanetta-santos-2483a6141" target="_blank" className="text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/vitorzanetta" target="_blank" className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white">
            <Github className="w-6 h-6" />
          </a>
          <a href="mailto:vitor@example.com" className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">
            <Mail className="w-6 h-6" />
          </a>
          <a href="/curriculo-vitor.pdf" target="_blank" className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300">
            <FileText className="w-6 h-6" />
          </a>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">{lang.contactHint}</p>
      </section>

      {/* RODAPÉ */}
      <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Vitor Santos — <a className="underline" href="https://github.com/vitorzanetta" target="_blank">GitHub</a>
      </footer>
    </div>
  );
}
