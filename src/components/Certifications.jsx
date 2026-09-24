import { useState } from "react";
import Section from "./Section.jsx";
import Tag from "./Tag.jsx";
import { certifications } from "../data/portfolioData.js";

const INITIAL_CERTIFICATE_COUNT = 10;
const tabs = [
  { id: "learning", label: "Learning Data" },
  { id: "leadership", label: "Leadership & Award" }
];
const learningIssuers = new Set(["AWS", "DQLab", "Dicoding", "IBM"]);

function CertificationsContent() {
  const [activeTab, setActiveTab] = useState("learning");
  const [showAll, setShowAll] = useState(false);
  const learningIssuerOrder = { IBM: 0, DQLab: 1, Dicoding: 2, AWS: 3 };
  const filteredCertificates = certifications.filter((certificate) => {
    const isLearning = learningIssuers.has(certificate.issuer);
    return activeTab === "learning" ? isLearning : !isLearning;
  }).sort((a, b) => {
    if (activeTab !== "learning") return 0;
    return (learningIssuerOrder[a.issuer] ?? 99) - (learningIssuerOrder[b.issuer] ?? 99);
  });
  const visibleCertificates = showAll ? filteredCertificates : filteredCertificates.slice(0, INITIAL_CERTIFICATE_COUNT);
  const hasMore = filteredCertificates.length > INITIAL_CERTIFICATE_COUNT;

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveTab(tab.id);
              setShowAll(false);
            }}
            className={`rounded-full border px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.12em] transition ${
              activeTab === tab.id
                ? "border-electric bg-electric text-darkArmy"
                : "border-offWhite/15 bg-army/60 text-offWhite hover:border-pastel hover:text-pastel"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {visibleCertificates.map((certificate) => (
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
      {hasMore && (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="rounded-full border border-electric/40 bg-electric px-5 py-2 text-xs font-black uppercase tracking-[0.12em] text-darkArmy transition hover:bg-pastel"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
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
