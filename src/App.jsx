import React from "react";
import ProjectCard from "./components/ProjectCard";
import { Linkedin, Github, Mail, FileText } from "lucide-react";

const projetos = [
  {
    title: "Análise de Vendas e Performance de Representantes",
    description:
      "Este projeto simula uma análise de dados de vendas utilizando SQL Server, Python e Power BI, com o objetivo de demonstrar um pipeline completo de dados — desde a ingestão até a visualização analítica.",
    image:
      "https://github.com/vitorzanetta/analise-vendas-representantes/blob/main/powerbi/dashboard_vendas_preview.png?raw=true",
    tools: [
      "SQL Server",
      "Python (pandas, pyodbc)",
      "Power BI",
      "DAX",
      "VS Code"
    ],
    link: "https://github.com/vitorzanetta/analise-vendas-representantes"
  }
];

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-blue-700 text-lg">Vitor Santos</span>
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li><a href="#sobre" className="hover:text-blue-600">Sobre</a></li>
          <li><a href="#experiencia" className="hover:text-blue-600">Experiência</a></li>
          <li><a href="#projetos" className="hover:text-blue-600">Projetos</a></li>
          <li><a href="#contato" className="hover:text-blue-600">Contato</a></li>
        </ul>
      </nav>

      {/* CABEÇALHO */}
      <header className="text-center pt-32 mb-8">
        <img
          src="/vitor-perfil.png"
          alt="Foto de Vitor Natã"
          className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4"
        />
        <h1 className="text-4xl font-bold text-blue-700">Vitor Natã Zanetta Santos</h1>
        <p className="text-gray-600 mt-2">
          Projetos de dados | Business Intelligence | Engenharia de dados
        </p>
      </header>

      {/* SOBRE */}
      <section id="sobre" className="scroll-mt-24 max-w-3xl mx-auto text-center mt-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-800">Sobre mim</h2>
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          Ao longo da minha carreira, desenvolvi sólida expertise na criação de dashboards e relatórios analíticos que fornecem insights estratégicos para otimizar processos, aumentar a eficiência e apoiar a tomada de decisões dos gestores.
          Minha abordagem é orientada a resultados, com foco na identificação de oportunidades de melhoria e na implementação de soluções práticas e inovadoras.
          Comprometida com o aprendizado contínuo, estou sempre em busca de novas ferramentas e técnicas para expandir minhas habilidades de análise e desenvolvimento.
          Meu objetivo é sair constantemente da minha zona de conforto, enfrentando novos desafios que contribuam para o meu crescimento profissional e para o sucesso da equipe e da empresa.
        </p>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="scroll-mt-24 max-w-3xl mx-auto text-center my-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Experiência</h2>
        <p className="text-sm text-gray-600">
          Analista de Dados na área de Suprimentos com foco em indicadores, dashboards e automações para eficiência operacional. 
          Experiência com Power BI, Excel, SQL e integração de dados para análise de desempenho de fornecedores.
        </p>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="scroll-mt-24 px-6 my-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Projetos</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-24 max-w-3xl mx-auto text-center my-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contato</h2>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://www.linkedin.com/in/vitor-natã-zanetta-santos-2483a6141" target="_blank" className="text-blue-700 hover:text-blue-900">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/vitorzanetta" target="_blank" className="text-gray-800 hover:text-black">
            <Github className="w-6 h-6" />
          </a>
          <a href="mailto:vitor@example.com" className="text-red-600 hover:text-red-800">
            <Mail className="w-6 h-6" />
          </a>
          <a href="/curriculo-vitor.pdf" target="_blank" className="text-green-700 hover:text-green-900">
            <FileText className="w-6 h-6" />
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-2">Clique nos ícones para contato ou baixar meu currículo</p>
      </section>

      {/* RODAPÉ */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Vitor Santos —{" "}
        <a className="underline" href="https://github.com/vitorzanetta" target="_blank">
          GitHub
        </a>
      </footer>
    </div>
  );
}
