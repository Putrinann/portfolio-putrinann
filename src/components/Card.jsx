export default function Card({ children, className = "" }) {
  return (
    <article className={`tilt-card rounded-lg border border-offWhite/10 bg-army/70 p-6 shadow-soft backdrop-blur ${className}`}>
      {children}
    </article>
  );
}
