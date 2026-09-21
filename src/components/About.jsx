import Card from "./Card.jsx";
import Organizations from "./Organizations.jsx";
import Section from "./Section.jsx";
import { bioCards } from "../data/portfolioData.js";

export default function About() {
  const biography = bioCards.find((card) => card.title === "Biography");
  const funFacts = bioCards.find((card) => card.title === "Fun Facts");
  const BiographyIcon = biography?.icon;
  const FunFactsIcon = funFacts?.icon;

  return (
    <Section id="about" eyebrow="About" title="A little more about me.">
      <div className="grid gap-5 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
        <div className="relative mx-auto flex w-full max-w-[260px] flex-col items-center">
          <div className="relative w-full overflow-hidden rounded-lg bg-[#1e221f] p-4 shadow-soft">
            <div className="absolute inset-0 opacity-70">
              <div className="absolute -right-16 top-8 h-52 w-80 -rotate-45 rounded-[50%] border border-electric/35" />
              <div className="absolute -left-24 top-20 h-48 w-80 rotate-12 rounded-[50%] border border-pastel/28" />
              <div className="absolute right-6 top-12 h-64 w-px rotate-[-42deg] bg-electric/30" />
              <div className="absolute left-8 top-20 h-72 w-px rotate-[40deg] bg-pastel/25" />
            </div>
            <div className="relative mt-4 overflow-hidden rounded-md border border-offWhite/10 bg-darkArmy">
              <img
                src="/images/profile/putri-red-background.jpeg"
                alt="Putri Nurul Annisa formal portrait"
                className="h-[245px] w-full object-cover object-top opacity-95"
              />
            </div>
            <div className="relative mt-4 border-t border-electric/25 pt-3">
              <div className="mb-3 flex justify-between text-[0.48rem] font-black uppercase tracking-[0.16em] text-electric/70">
                <span>Portfolio</span>
                <span>Information Systems</span>
              </div>
              <p className="text-[0.58rem] font-black uppercase tracking-[0.2em] text-pastel">Putri Nurul Annisa</p>
              <h3 className="mt-1 text-4xl font-black uppercase leading-none tracking-[0.02em] text-electric">PUTRI</h3>
            </div>
          </div>
        </div>
        <div className="grid gap-3 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-3">
            <Card className="group min-h-0 p-4">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.12em] text-offWhite">Education</h3>
                  <h5 className="mt-1 text-xs leading-5  text-electric">President University</h5>
                </div>
                <div className="text-right">
                  <span className="inline-flex rounded-full border border-pastel/20 bg-pastel/10 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-pastel">
                    2023 - 2026
                  </span>
                  <p className="mt-1 text-[0.68rem] font-semibold  tracking-[0.12em] text-offWhite/55">2years  10months</p>
                </div>
              </div>
              <div className="border-t border-offWhite/10 pt-3">
                <h4 className="text-sm font-bold text-offWhite">Information Systems</h4>
                <p className="mt-2 text-xs font-semibold text-pastel">GPA 3.93 / 4.00</p>
              </div>
            </Card>

            <Card className="group min-h-0 p-4">
              {BiographyIcon && (
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-pastel text-darkArmy transition group-hover:bg-electric">
                  <BiographyIcon size={17} />
                </div>
              )}
              <h3 className="text-sm font-black uppercase tracking-[0.12em] text-offWhite">{biography?.title}</h3>
              <p className="mt-2 text-justify text-xs leading-6 text-offWhite/66">
                I am a final-year Information Systems undergraduate student at President University with a concentration in Data Science. I am proactive,
                adaptable, and experienced in volunteering, event committees, and internships as a fullstack web developer and graphic designer. I work in a
                structured way, manage time carefully, and contribute effectively both independently and as part of a team. With strong emotional management, I
                stay composed under pressure and navigate challenges with poise.
              </p>
            </Card>
          </div>

          <Card className="group min-h-0 p-4">
            {FunFactsIcon && (
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-pastel text-darkArmy transition group-hover:bg-electric">
                <FunFactsIcon size={17} />
              </div>
            )}
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-offWhite">{funFacts?.title}</h3>
            <p className="mt-2 text-justify text-xs leading-6 text-offWhite/66">{funFacts?.description}</p>
          </Card>
        </div>
      </div>
      <div className="mt-8">
        <Organizations embedded />
      </div>
    </Section>
  );
}
