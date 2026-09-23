import { ArrowLeft, ArrowRight, HeartHandshake } from "lucide-react";
import { useState } from "react";
import Section from "./Section.jsx";
import { moments, organizations, volunteerMoments } from "../data/portfolioData.js";

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

  const shuffledMoments = [moments[2], moments[0], moments[5], moments[4], moments[1], moments[10], moments[8], moments[6], moments[3], moments[9], moments[7]].filter(Boolean);
  const pinterestHeights = ["h-48", "h-32", "h-64", "h-40", "h-56", "h-36", "h-72", "h-44", "h-60", "h-36", "h-52"];

  const content = (
    <div className="grid gap-5 lg:grid-cols-2 lg:items-center">
      <div className="volunteer-card rounded-lg border border-pink-200/70 bg-gradient-to-br from-[#ffdce9] via-[#f7e8ef] to-[#cceeff] p-3 text-darkArmy shadow-soft sm:p-4">
        <div className="mb-3 max-w-sm rounded-md bg-white/58 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)]">
          <div className="flex items-start gap-3">
            <HeartHandshake className="mt-1 h-7 w-7 shrink-0" />
            <div>
              <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-darkArmy/55">Volunteer</p>
              <h3 className="text-xl font-black leading-6">Moments</h3>
            </div>
          </div>
          <blockquote className="mt-3 text-xs font-semibold leading-5 text-darkArmy/72">
            "Volunteering has taught me to lead with empathy and act with purpose."
          </blockquote>
        </div>
        <div className="max-h-[30rem] overflow-y-auto pr-1">
          <div className="columns-2 gap-2 sm:columns-3">
            {shuffledMoments.map((moment, index) => (
              <figure key={moment.title} className="mb-2 break-inside-avoid overflow-hidden rounded-lg bg-white/60 shadow-sm">
                <div className={"relative " + pinterestHeights[index % pinterestHeights.length]}>
                  <img src={moment.image} alt={moment.title} className="h-full w-full object-cover" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-darkArmy/95 via-darkArmy/60 to-transparent px-2 pb-2 pt-10 text-[0.62rem] font-bold leading-3 text-offWhite">
                    {moment.title}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <div
        className="impact-carousel relative cursor-grab overflow-hidden active:cursor-grabbing"
        onMouseDown={(event) => setDragStart(event.clientX)}
        onMouseUp={(event) => handleDragEnd(event.clientX)}
        onMouseLeave={(event) => handleDragEnd(event.clientX)}
        onTouchStart={(event) => setDragStart(event.touches[0].clientX)}
        onTouchEnd={(event) => handleDragEnd(event.changedTouches[0].clientX)}
      >
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
                  isActive ? "bg-darkArmy shadow-[0_28px_90px_rgba(255,151,190,0.2)]" : "bg-darkArmy/35"
                } ${hidden ? "pointer-events-none opacity-0" : ""}`}
                style={{
                  transform: `translateX(calc(-50% + ${translateX}px)) translateY(${translateY}px) scale(${scale})`,
                  zIndex,
                  opacity: hidden ? 0 : isActive ? 1 : 0.22 + Math.max(0, 0.16 - absOffset * 0.04),
                  filter: isActive ? "none" : `brightness(${0.72 - absOffset * 0.08}) blur(${absOffset > 1 ? 0.4 : 0}px)`,
                }}
              >
                <div className="flex h-44 items-center justify-center bg-offWhite/95 p-2 sm:h-48">
                  {item.images ? (
                    <div className="grid h-full w-full grid-cols-2 gap-2">
                      {item.images.map((image) => (
                        <img key={image} src={image} alt={item.title} className="h-full w-full rounded-md object-cover" />
                      ))}
                    </div>
                  ) : item.image ? (
                    <img src={item.image} alt={item.title} className={`h-full w-full rounded-md object-contain ${item.tone === "grayscale" ? "grayscale" : ""}`} />
                  ) : (
                    <img
                      src={volunteerMoments[0].image}
                      alt="Documentation moments"
                      className="h-full w-full rounded-md object-cover grayscale"
                    />
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
