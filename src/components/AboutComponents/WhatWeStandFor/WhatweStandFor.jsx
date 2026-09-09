const principles = [
  {
    title: "Educational & Cultural Continuity",
    text: "Delivering language instruction, heritage education, and cultural programming to build strong identity and academic growth in youth.",
  },
  {
    title: "Social Welfare & Relief Services",
    text: "Providing emergency support, resource navigation, and community aid to assist families during periods of transition or financial hardship.",
  },
  {
    title: "Civic & Family Integration",
    text: "Hosting community gatherings, cultural milestones, and civic programs that strengthen family stability and foster broader social integration.",
  },
  {
    title: "Youth Development & Engagement",
    text: "Organizing structured recreational, mentorship, and educational activities to empower youth and build long-term community resilience.",
  },
];

export default function WhatWeStandFor() {
  return (
    <section className="standards section-shell">
      <div className="section-heading section-heading--centered">
        <p className="eyebrow eyebrow--green">What We Stand For</p>
        <h2>Four pillars of community life.</h2>
      </div>

      <div className="standards__grid">
        {principles.map((item) => (
          <article key={item.title} className="standard-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
