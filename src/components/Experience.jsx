import { Building2 } from "lucide-react";
import Card from "./Card.jsx";
import Section from "./Section.jsx";
import Tag from "./Tag.jsx";
import { experiences } from "../data/portfolioData.js";

function ExperienceContent() {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      {experiences.map((experience) => (
        <Card key={experience.company} className="experience-card overflow-hidden p-0">
          <div className="experience-card-header relative h-44 overflow-hidden border-b border-offWhite/10 bg-pastel text-offWhite">
            <img
              src={experience.image}
              alt={`${experience.company} visual`}
              className={`h-full w-full ${experience.imageFit === "contain" ? "bg-[#07364a] object-contain object-right p-4" : "object-cover"}`}
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-darkArmy via-darkArmy/82 to-transparent backdrop-blur-[1.5px]" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <Building2 className="mb-3 h-5 w-5 text-electric" />
              <p className="text-[0.68rem] font-black uppercase leading-5 tracking-[0.14em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">{experience.company}</p>
              <p className="mt-2 text-[0.65rem] font-black uppercase tracking-[0.12em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">{experience.location}</p>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-base font-semibold leading-6 text-offWhite">{experience.role}</h3>
            <p className="experience-period mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-electric">{experience.period}</p>
            <p className="mt-3 text-xs leading-6 text-offWhite/72">{experience.summary}</p>
            <ul className="mt-3 space-y-2 text-xs leading-5 text-offWhite/64">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>- {bullet}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function Experience({ compact = false }) {
  if (compact) {
    return (
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-pastel">Experience</p>
        <ExperienceContent />
      </div>
    );
  }

  return (
    <Section id="experience" eyebrow="Professional Experience" title="Digitalizing operations with practical delivery.">
      <ExperienceContent />
    </Section>
  );
}
