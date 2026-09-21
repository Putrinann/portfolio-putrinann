export default function Section({ id, eyebrow, title, children, className = "", dark = true, align = "left" }) {
  const isCentered = align === "center";

  return (
    <section id={id} className={`relative px-5 py-8 sm:px-8 lg:px-12 lg:py-10 ${className}`}>
      <div className="reveal mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <div className={`mb-7 max-w-2xl ${isCentered ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <p className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${dark ? "text-pastel" : "text-army"}`}>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className={`text-balance text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl ${dark ? "text-offWhite" : "text-darkArmy"}`}>
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
