import Section from "./Section.jsx";
import Tag from "./Tag.jsx";
import { certifications } from "../data/portfolioData.js";

function CertificationsContent() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {certifications.map((certificate) => (
          <article key={certificate.title} className="tilt-card overflow-hidden rounded-lg border border-offWhite/10 bg-army/70 shadow-soft">
            <div className="aspect-[4/3] bg-offWhite/95 p-1.5">
              <img src={certificate.image} alt={`${certificate.title} certificate`} className="h-full w-full object-contain" />
            </div>
            <div className="p-3">
              <Tag active>{certificate.issuer}</Tag>
              <h3 className="mt-3 text-[0.78rem] font-semibold leading-5 text-offWhite">{certificate.title}</h3>
              {certificate.note && <p className="mt-2 text-xs text-pastel">{certificate.note}</p>}
            </div>
          </article>
        ))}
      </div>
  );
}

export default function Certifications({ embedded = false }) {
  if (embedded) {
    return (
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-pastel">Certificates</p>
        <CertificationsContent />
      </div>
    );
  }

  return (
    <Section id="certifications" eyebrow="Certifications" title="Proof of continuous learning.">
      <CertificationsContent />
    </Section>
  );
}
