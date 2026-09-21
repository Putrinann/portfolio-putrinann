export default function Tag({ children, active = false }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
        active
          ? "border-electric bg-electric text-darkArmy"
          : "border-pastel/20 bg-pastel/10 text-pastel"
      }`}
    >
      {children}
    </span>
  );
}
