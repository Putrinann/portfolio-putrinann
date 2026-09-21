import Section from "./Section.jsx";
import { awards } from "../data/portfolioData.js";

export default function Awards() {
  return (
    <Section id="awards" eyebrow="Awards" title="Recognition & achievements.">
      <div className="grid gap-3 md:grid-cols-3">
        {awards.map(({ title, issuer, icon: Icon }) => (
          <article key={title} className="rounded-lg border border-offWhite/10 bg-army/60 p-5">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-pastel text-darkArmy">
              <Icon size={18} />
            </div>
            <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-electric">{issuer}</p>
            <h3 className="mt-2 text-base font-semibold leading-6 text-offWhite">{title}</h3>
          </article>
        ))}
      </div>
    </Section>
  );
}
