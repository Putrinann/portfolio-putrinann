import { ArrowLeft, ArrowRight, ArrowUpRight, Info } from "lucide-react";
import { useState } from "react";
import Section from "./Section.jsx";
import Tag from "./Tag.jsx";
import Toolkit from "./Toolkit.jsx";
import { projects } from "../data/portfolioData.js";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categoryFilters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Development" },
    { id: "data", label: "Data" },
    { id: "fun", label: "Fun Web" }
  ];
  const visibleProjects = [...projects]
    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99))
    .filter((project) => activeCategory === "all" || project.category === activeCategory);

  return (
    <Section id="projects" eyebrow="Selected Projects" title="Work that connects systems, data, and decisions." align="center">
      <div className="mb-7 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by category">
        {categoryFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            aria-pressed={activeCategory === filter.id}
            onClick={() => setActiveCategory(filter.id)}
            className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.1em] transition ${
              activeCategory === filter.id
                ? "border-electric bg-electric text-darkArmy"
                : "border-offWhite/15 bg-darkArmy/45 text-offWhite/70 hover:border-electric hover:text-electric"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="mt-8">
        <Toolkit embedded />
      </div>
    </Section>
  );
}

function ProjectCard({ project }) {
  const [activeImage, setActiveImage] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const images = project.images;
  const nextImage = () => setActiveImage((index) => (index + 1) % images.length);
  const previousImage = () => setActiveImage((index) => (index - 1 + images.length) % images.length);
  const hasCaseStudy = project.problem && project.action && project.result;

  return (
    <article className="tilt-card overflow-hidden rounded-lg border border-offWhite/10 bg-army/70 shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden bg-offWhite/95">
        <img
          src={images[activeImage]}
          alt={`${project.title} proof ${activeImage + 1}`}
          className="h-full w-full object-contain transition duration-500 hover:scale-105"
        />
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button
            type="button"
            onClick={previousImage}
            aria-label={`Previous image for ${project.title}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-offWhite/15 bg-darkArmy/90 text-offWhite transition hover:bg-electric hover:text-darkArmy"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            onClick={nextImage}
            aria-label={`Next image for ${project.title}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-offWhite/15 bg-darkArmy/90 text-offWhite transition hover:bg-electric hover:text-darkArmy"
          >
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="absolute left-3 top-3 rounded-full bg-darkArmy/90 px-3 py-1 text-[0.68rem] font-bold text-pastel">
          {activeImage + 1}/{images.length}
        </div>
      </div>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-pastel">{project.eyebrow}</p>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-electric px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.08em] text-darkArmy transition hover:bg-pastel"
            >
              <ArrowUpRight size={13} />
              {project.ctaLabel || "Visit"}
            </a>) : null}
        </div>
        <h3 className="text-lg font-semibold leading-6 text-offWhite">{project.title}</h3>
        <p className="mt-1 text-xs font-semibold leading-5 text-electric">{project.partner}</p>
        <p className="mt-4 text-sm leading-6 text-offWhite/68">{project.description}</p>
        {project.details || hasCaseStudy ? (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setShowDetails((value) => !value)}
              className="inline-flex items-center gap-1 rounded-full border border-offWhite/15 bg-darkArmy/60 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.1em] text-pastel transition hover:border-electric hover:text-electric"
            >
              <Info size={12} />
              {showDetails ? "Hide Info" : hasCaseStudy ? "View Case Study" : "Details"}
            </button>
            {showDetails && (
              <div className="mt-3 grid gap-3 rounded-md border border-offWhite/10 bg-darkArmy/45 p-3 text-xs leading-5 text-offWhite/68">
                {hasCaseStudy ? (
                  <div className="grid gap-3">
                    {[
                      ["Problem", project.problem],
                      ["Action", project.action],
                      ["Result", project.result]
                    ].map(([label, text]) => (
                      <div key={label}>
                        <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-electric">{label}</p>
                        <p className="mt-1">{text}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
                {project.details ? (
                  <ul className="grid gap-2 border-t border-offWhite/10 pt-3">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            )}
          </div>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
