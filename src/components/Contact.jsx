import { ArrowUpRight } from "lucide-react";
import Section from "./Section.jsx";
import { contactLinks } from "../data/portfolioData.js";

export default function Contact() {
  return (
    <Section id="contact" className="relative z-30 flex min-h-screen items-center overflow-visible pb-16 pt-24 text-center" eyebrow="Contact" title="Want to discuss?" align="center">
      <p className="mx-auto max-w-2xl text-base leading-8 text-offWhite/68 md:text-lg">
        I may not have every answer right away, but I would love to contribute, learn the context, and help move thoughtful ideas closer to a solution.
      </p>
      <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-pastel">putrinannisa04@gmail.com</p>
      <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {contactLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="group flex items-center justify-center gap-2 rounded-full border border-offWhite/10 bg-offWhite/8 px-4 py-3 text-sm font-bold text-offWhite transition hover:border-electric/60 hover:bg-electric hover:text-darkArmy"
          >
            <Icon size={17} className="text-electric transition group-hover:text-darkArmy" />
            {label}
            <ArrowUpRight size={14} className="opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ))}
      </div>
    </Section>
  );
}