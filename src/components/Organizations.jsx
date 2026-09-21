import { ArrowLeft, ArrowRight, HeartHandshake } from "lucide-react";
import { useState } from "react";
import Section from "./Section.jsx";
import { organizations } from "../data/portfolioData.js";

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
    <div className="grid gap-5 lg:grid-cols-[0.45fr_1.55fr] lg:items-center">
      <div className="volunteer-card rounded-lg bg-offWhite p-5 text-darkArmy">
        <HeartHandshake className="mb-5 h-7 w-7" />
        <blockquote className="text-lg font-semibold leading-7">
          "Volunteering has taught me to lead with empathy and act with purpose."
        </blockquote>
      </div>
      <div
        className="impact-carousel relative cursor-grab overflow-hidden py-4 active:cursor-grabbing"
        onMouseDown={(event) => setDragStart(event.clientX)}
        onMouseUp={(event) => handleDragEnd(event.clientX)}
        onMouseLeave={(event) => handleDragEnd(event.clientX)}
        onTouchStart={(event) => setDragStart(event.touches[0].clientX)}
        onTouchEnd={(event) => handleDragEnd(event.changedTouches[0].clientX)}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.16),transparent_34rem)]" />
        <div className="relative h-[420px] sm:h-[440px]">
          {organizations.map((item, index) => {
            const isActive = index === activeIndex;
            const offset = getOffset(index);
            const absOffset = Math.abs(offset);
            const hidden = absOffset > 3;
            const translateX = offset * 176;
            const translateY = isActive ? 0 : 28 + absOffset * 6;
            const scale = Math.max(0.72, 1 - absOffset * 0.12);
            const zIndex = 20 - absOffset;

            return (
              <article
                key={item}
                className={`impact-slide absolute left-1/2 top-3 flex w-[20rem] -translate-x-1/2 flex-col overflow-hidden rounded-lg transition-all duration-500 ease-out sm:w-[23rem] ${
                  isActive ? "bg-darkArmy shadow-[0_28px_90px_rgba(163,230,53,0.18)]" : "bg-darkArmy/70"
                } ${hidden ? "pointer-events-none opacity-0" : ""}`}
                style={{
                  transform: `translateX(calc(-50% + ${translateX}px)) translateY(${translateY}px) scale(${scale})`,
                  zIndex,
                  opacity: hidden ? 0 : isActive ? 1 : 0.36 + Math.max(0, 0.22 - absOffset * 0.04),
                  filter: isActive ? "none" : `brightness(${0.72 - absOffset * 0.08}) blur(${absOffset > 1 ? 0.4 : 0}px)`,
                }}
              >
                <div className="flex h-44 items-center justify-center bg-offWhite/95 p-4 sm:h-48">
                  <div className="rounded-full border border-darkArmy/10 bg-pastel/60 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.16em] text-darkArmy">
                    Photo soon
                  </div>
                </div>
                <div className="flex min-h-36 flex-1 flex-col justify-between bg-darkArmy/92 p-4">
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-pastel">Impact 0{index + 1}</p>
                  <h3 className="mt-3 text-base font-semibold leading-6 text-offWhite">{item}</h3>
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
                key={item}
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
