// src/components/sections/Projects.tsx
"use client";

const projects = [
  {
    title: "My Portfolio",
    description: "Built with Next.js 15 and Tailwind CSS.",
    link: "https://github.com/bevisdev/portfolio",
    image: "/images/portfolio.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-20 bg-gray-900 text-gray-300">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="absolute bottom-0 p-4 bg-black bg-opacity-60 w-full"
          >
            <h3 className="text-white font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
