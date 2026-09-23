import { ArrowUpRight, Network } from "lucide-react";
import { useEffect, useRef } from "react";
import Experience from "./Experience.jsx";
import { awards, capabilities, contactLinks } from "../data/portfolioData.js";

export default function Hero({ setActiveSection }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const updateScrollParallax = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
      sectionRef.current.style.setProperty("--scroll-y", progress.toFixed(3));
    };

    updateScrollParallax();
    window.addEventListener("scroll", updateScrollParallax, { passive: true });
    window.addEventListener("resize", updateScrollParallax);
    return () => {
      window.removeEventListener("scroll", updateScrollParallax);
      window.removeEventListener("resize", updateScrollParallax);
    };
  }, []);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--parallax-x", x.toFixed(3));
    event.currentTarget.style.setProperty("--parallax-y", y.toFixed(3));
  };

  const resetParallax = (event) => {
    event.currentTarget.style.setProperty("--parallax-x", "0");
    event.currentTarget.style.setProperty("--parallax-y", "0");
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-forest-section relative overflow-hidden px-5 pb-10 pt-6 sm:px-8 lg:px-12"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetParallax}
      style={{ "--parallax-x": 0, "--parallax-y": 0, "--scroll-y": 0 }}
    >
      <div className="hero-forest-layer hero-forest-back" />
      <div className="hero-forest-layer hero-forest-mid" />
      <div className="hero-forest-layer hero-forest-front" />
      <div className="hero-forest-vignette" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_220px] xl:grid-cols-[minmax(0,1fr)_260px]">
        <div className="relative z-10 max-w-2xl animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric/20 bg-army/45 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-pastel">
            <Network className="h-3.5 w-3.5 text-electric" />
            Portfolio
          </div>
          <div className="mb-8 flex flex-wrap gap-3">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-offWhite/10 bg-army/45 text-offWhite/80 transition hover:border-electric hover:text-electric"
                aria-label={`Open ${label}`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-offWhite sm:text-5xl lg:text-6xl">
            Hi, I'm Putri.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-offWhite/72">
            Information Systems student @ President University.
          </p>
          <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-offWhite">
            I love learning new things, solving cases, mapping messy workflows, reading data with context, and turning ideas into practical digital solutions.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setActiveSection("projects")}
              className="hero-work-button inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-black text-darkArmy transition hover:bg-pastel"
            >
              View My Work <ArrowUpRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => setActiveSection("about")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-offWhite/15 px-6 py-3 text-sm font-bold text-offWhite transition hover:border-electric hover:text-electric"
            >
              Know more about me <ArrowUpRight size={17} />
            </button>
          </div>
        </div>

        <div className="relative z-0 mx-auto flex h-[390px] w-full max-w-[300px] items-end justify-center animate-fade-in lg:justify-self-end xl:max-w-[330px]">
          <div className="absolute bottom-8 left-1/2 h-72 w-44 -translate-x-1/2 rounded-full bg-electric/10 blur-3xl" />
          <div className="absolute bottom-16 left-1/2 h-48 w-80 -translate-x-1/2 -rotate-12 rounded-[50%] border border-pastel/18" />
          <div className="absolute bottom-28 left-1/2 h-40 w-72 -translate-x-1/2 rotate-12 rounded-[50%] border border-electric/18" />
          <div className="absolute bottom-10 left-1/2 h-10 w-56 -translate-x-1/2 rounded-[50%] border border-pastel/25" />
          <div className="relative z-10">
            <img
              src="/images/profile/putri-standing-heels-cutout.png"
              alt="Putri Nurul Annisa standing portrait cutout"
              className="h-[370px] w-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-pastel">Capabilities</p>
          <div className="grid gap-3 sm:grid-cols-2">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-offWhite/10 bg-army/45 p-3">
              <Icon className="mb-3 h-4 w-4 text-electric" />
              <p className="text-xs font-black uppercase tracking-[0.12em] text-offWhite">{title}</p>
              <p className="mt-1 text-[0.7rem] leading-5 text-offWhite/60">{description}</p>
            </div>
          ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-pastel">Awards</p>
          <div className="grid gap-3">
            {awards.map(({ title, issuer, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-offWhite/10 bg-army/55 p-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-pastel text-darkArmy">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-electric">{issuer}</p>
                    <h2 className="mt-1 text-sm font-semibold leading-5 text-offWhite">{title}</h2>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-8 max-w-7xl">
        <Experience compact />
      </div>
    </section>
  );
}
