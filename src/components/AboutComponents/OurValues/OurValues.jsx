import "./OurValues.css";
import { useState } from "react";

const valueCards = [
  {
    icon: "🤝",
    title: "Civic Integration",
    description:
      "We empower families to successfully navigate local systems, access essential resources, and build self-sufficiency within the broader public community.",
  },
  {
    icon: "📚",
    title: "Youth Empowerment",
    description:
      "We invest in academic support, language learning, and mentorship programs to ensure future generations thrive academically and socially.",
  },
  {
    icon: "🇸🇩",
    title: "Cultural Preservation",
    description:
      "We safeguard and celebrate Sudanese heritage, language, and traditions through public educational, historical, and cultural programming.",
  },
  {
    icon: "🤲",
    title: "Public Service",
    description:
      "We deliver compassionate social support, outreach programs, and emergency assistance to strengthen vulnerable families in times of need.",
  },
  {
    icon: "🏘️",
    title: "Community Resiliency",
    description:
      "We cultivate strong, inclusive social safety networks that foster belonging, mutual aid, and active civic engagement across generations.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Stability",
    description:
      "We provide holistic support services designed to keep families connected, secure, and fully equipped to build sustainable lives.",
  },
];

export default function Values() {
  const [expandedMobile, setExpandedMobile] = useState(false);

  return (
    <section className="values section-shell">
      <div className="section-heading section-heading--centered">
        <p className="eyebrow eyebrow--green">Our Values</p>
        <h2>Values that guide how we serve.</h2>
      </div>

      <div
        className={`values__grid ${expandedMobile ? "values__grid--expanded" : ""}`}
      >
        {valueCards.map((value, index) => (
          <article
            key={value.title}
            className={`value-card ${index >= 2 ? "value-card--mobile-hidden" : ""}`}
          >
            <div className="value-card__icon" aria-hidden="true">
              {value.icon}
            </div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        ))}
      </div>

      <div className="values__toggle-wrap">
        <button
          type="button"
          className="values__mobile-toggle"
          onClick={() => setExpandedMobile(!expandedMobile)}
        >
          {expandedMobile
            ? "Show Less"
            : `View All Values (${valueCards.length})`}
        </button>
      </div>
    </section>
  );
}
