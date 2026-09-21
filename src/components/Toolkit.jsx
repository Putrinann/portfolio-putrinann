import Section from "./Section.jsx";
import Tag from "./Tag.jsx";
import { toolkit } from "../data/portfolioData.js";

function ToolkitContent() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
        {toolkit.map(({ category, tools, icon: Icon }) => (
          <article key={category} className="rounded-lg border border-offWhite/10 bg-army/60 p-4">
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-md bg-pastel text-darkArmy">
              <Icon size={18} />
            </div>
            <h3 className="text-sm font-black uppercase tracking-[0.14em] text-offWhite">{category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Tag key={tool}>{tool}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
  );
}

export default function Toolkit({ embedded = false }) {
  if (embedded) {
    return (
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-pastel">Toolkit</p>
        <ToolkitContent />
      </div>
    );
  }

  return (
    <Section id="toolkit" eyebrow="Toolkit" title="Tools I use to clarify, build, and validate.">
      <ToolkitContent />
    </Section>
  );
}
