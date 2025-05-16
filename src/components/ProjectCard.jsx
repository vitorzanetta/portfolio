import React from "react";
import { BarChart2 } from "lucide-react";

export default function ProjectCard({ title, description, image, tools, link }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform">
      <img src={image} alt={title} className="rounded-lg mb-4 w-full object-cover h-40" />
      <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
        <BarChart2 className="w-5 h-5" /> {title}
      </h2>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <p className="text-xs text-gray-500 mb-2">Ferramentas: {tools.join(', ')}</p>
      {link && (
        <a href={link} target="_blank" className="text-blue-600 text-sm underline">
          Ver projeto
        </a>
      )}
    </div>
  );
}
