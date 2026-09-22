import { ArrowLeft, ArrowRight, HeartHandshake } from "lucide-react";
import { useState } from "react";
import Section from "./Section.jsx";
import { organizations, volunteerMoments } from "../data/portfolioData.js";

export default function Organizations({ embedded = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const nextItem = () => setActiveIndex((index) => Math.min(index + 1, organizations.length - 1));
  const previousItem = () => setActiveIndex((index) => Math.max(index - 1, 0));
  const getOffset = (index) => {
    const rawOffset = index - activeIndex;
    return rawOffset;
  };
  const handleDragEnd = (clientX) => {
    if (dragStart === null) return;

    const distance = clientX - dragStart;
    if (distance < -48) nextItem();
    if (distance > 48) previousItem();
    setDragStart(null);
  };

  const content = (
    <div className="grid gap-5 lg:grid-cols-2 lg:items-center">
      <div className="volunteer-card rounded-lg border border-pastel/30 bg-[#f8dfdc]/90 p-4 text-darkArmy shadow-soft">
        <div className="mb-4 flex items-start gap-3">
          <HeartHandshake className="mt-1 h-7 w-7" />
          <div>
            <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-darkArmy/55">Volunteer</p>
            <h3 className="text-xl font-black leading-6">Moments</h3>
            <blockquote className="mt-2 max-w-md text-xs font-semibold leading-5 text-darkArmy/62">
              "Volunteering has taught me to lead with empathy and act with purpose."
            </blockquote>
          </div>
        </div>
        <div className="grid h-[330px] grid-cols-2 gap-3 overflow-hidden sm:h-[350px]">
          <figure className="relative overflow-hidden rounded-md bg-[#fff6eb]/70">
            <img src={volunteerMoments[0].image} alt={volunteerMoments[0].title} className="h-full w-full object-contain" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-darkArmy/80 to-transparent p-3 text-xs font-bold text-offWhite">
              {volunteerMoments[0].title}
            </figcaption>
          </figure>
          <div className="grid gap-3">
            {volunteerMoments.slice(1).map((moment) => (
              <figure key={moment.title} className="relative overflow-hidden rounded-md bg-[#fff6eb]/70">
                <img src={moment.image} alt={moment.title} className="h-full w-full object-contain" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-darkArmy/80 to-transparent p-3 text-xs font-bold text-offWhite">
                  {moment.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <div
        className="impact-carousel relative cursor-grab overflow-hidden py-2 active:cursor-grabbing"
        onMouseDown={(event) => setDragStart(event.clientX)}
        onMouseUp={(event) => handleDragEnd(event.clientX)}
        onMouseLeave={(event) => handleDragEnd(event.clientX)}
        onTouchStart={(event) => setDragStart(event.touches[0].clientX)}
        onTouchEnd={(event) => handleDragEnd(event.changedTouches[0].clientX)}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.16),transparent_34rem)]" />
        <div className="relative h-[430px] sm:h-[450px]">
          {organizations.map((item, index) => {
            const isActive = index === activeIndex;
            const offset = getOffset(index);
            const absOffset = Math.abs(offset);
            const hidden = absOffset > 3;
            const translateX = offset * 146;
            const translateY = isActive ? 0 : 28 + absOffset * 6;
            const scale = Math.max(0.72, 1 - absOffset * 0.12);
            const zIndex = 20 - absOffset;

            return (
              <article
                key={item.title || item}
                className={`impact-slide absolute left-1/2 top-3 flex w-[18rem] -translate-x-1/2 flex-col overflow-hidden rounded-lg transition-all duration-500 ease-out sm:w-[21rem] ${
                  isActive ? "bg-darkArmy shadow-[0_28px_90px_rgba(163,230,53,0.18)]" : "bg-darkArmy/70"
                } ${hidden ? "pointer-events-none opacity-0" : ""}`}
                style={{
                  transform: `translateX(calc(-50% + ${translateX}px)) translateY(${translateY}px) scale(${scale})`,
                  zIndex,
                  opacity: hidden ? 0 : isActive ? 1 : 0.36 + Math.max(0, 0.22 - absOffset * 0.04),
                  filter: isActive ? "none" : `brightness(${0.72 - absOffset * 0.08}) blur(${absOffset > 1 ? 0.4 : 0}px)`,
                }}
              >
                <div className="flex h-44 items-center justify-center bg-offWhite/95 p-2 sm:h-48">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="h-full w-full rounded-md object-contain" />
                  ) : (
                    <div className="rounded-full border border-darkArmy/10 bg-pastel/60 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.16em] text-darkArmy">
                      Photo soon
                    </div>
                  )}
                </div>
                <div className="flex min-h-36 flex-1 flex-col justify-between bg-darkArmy/92 p-4">
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-pastel">Impact 0{index + 1}</p>
                  <h3 className="mt-3 text-base font-semibold leading-6 text-offWhite">{item.title || item}</h3>
                </div>
              </article>
            );
          })}
        </div>
        <div className="-mt-3 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous impact item"
            onClick={previousItem}
            disabled={activeIndex === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-offWhite/10 bg-army/70 text-offWhite transition hover:border-electric hover:text-electric disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ArrowLeft size={17} />
          </button>
          <div className="flex gap-2">
            {organizations.map((item, index) => (
              <button
                key={item.title || item}
                type="button"
                aria-label={`Show impact item ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-6 bg-electric" : "w-2.5 bg-offWhite/20 hover:bg-pastel/70"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next impact item"
            onClick={nextItem}
            disabled={activeIndex === organizations.length - 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-offWhite/10 bg-army/70 text-offWhite transition hover:border-electric hover:text-electric disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return (
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-pastel">Leadership & Impact</p>
        {content}
      </div>
    );
  }

  return (
    <Section id="impact" eyebrow="Organization & Social Impact" title="Leadership & Empathy in Action">
      {content}
    </Section>
  );
}
