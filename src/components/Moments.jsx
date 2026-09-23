import { moments } from "../data/portfolioData.js";

export default function Moments({ embedded = false }) {
  const content = (
    <div className="max-h-[760px] overflow-y-auto rounded-lg border border-offWhite/10 bg-darkArmy/30 p-3 shadow-soft">
      <div className="columns-2 gap-3 sm:columns-3 xl:columns-4">
        {moments.map((moment) => (
          <article key={moment.title} className="mb-3 break-inside-avoid overflow-hidden rounded-xl border border-offWhite/10 bg-army/60 shadow-soft">
            <div className="relative overflow-hidden">
              <img src={moment.image} alt={moment.title} className="w-full object-cover transition duration-500 hover:scale-[1.03]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-darkArmy/90 via-darkArmy/45 to-transparent px-3 pb-3 pt-12">
                <h3 className="text-xs font-bold leading-4 text-offWhite">{moment.title}</h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  if (embedded) {
    return (
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-pastel">Moments</p>
        {content}
      </div>
    );
  }

  return content;
}
