import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Certifications from "./Certifications.jsx";
import Section from "./Section.jsx";
import Tag from "./Tag.jsx";
import Toolkit from "./Toolkit.jsx";
import { projects } from "../data/portfolioData.js";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Projects" title="Work that connects systems, data, and decisions." align="center">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="mt-8">
        <Toolkit embedded />
      </div>
      <div className="mt-8">
        <Certifications embedded />
      </div>
    </Section>
  );
}

function ProjectCard({ project }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = project.images;
  const nextImage = () => setActiveImage((index) => (index + 1) % images.length);
  const previousImage = () => setActiveImage((index) => (index - 1 + images.length) % images.length);

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
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
