import { ArrowUpRight } from "lucide-react";
import Section from "./Section.jsx";
import { contactLinks } from "../data/portfolioData.js";

export default function Contact() {
  return (
    <Section id="contact" className="relative z-30 overflow-visible bg-darkArmy pb-16 pt-24" eyebrow="Contact" title="Have a problem worth solving?">
      <div className="relative z-30 grid gap-8 rounded-lg border border-pastel/40 bg-offWhite p-6 text-darkArmy lg:grid-cols-[1.08fr_0.92fr] lg:p-8">
        <div>
          <p className="max-w-2xl text-2xl leading-10">
            Let's connect and talk about technology, systems, data, or opportunities.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-army">
            putrinannisa04@gmail.com
          </p>
        </div>
        <div className="relative z-30 grid gap-3 sm:grid-cols-2">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center justify-between rounded-lg border border-darkArmy/10 bg-darkArmy px-4 py-4 text-offWhite transition hover:bg-army"
            >
              <span className="flex items-center gap-3 text-sm font-bold">
                <Icon size={18} className="text-electric" /> {label}
              </span>
              <ArrowUpRight size={17} className="text-pastel transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
