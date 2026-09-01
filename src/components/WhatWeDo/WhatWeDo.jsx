import "./WhatWeDo.css";

const WhatWeDo = () => {
  const cards = [
    {
      icon: "📚",
      title: "Our Children's Education & Heritage",
      description:
        "Keeping Arabic, Quran, Sudanese culture, and our connection to Sudan alive for the next generation.",
    },
    {
      icon: "🤝",
      title: "Community Support",
      description:
        "Standing beside one another through difficult times, including funerals, loss, and other moments when our community needs us.",
    },
    {
      icon: "🎉",
      title: "Life & Celebrations",
      description:
        "Coming together for marriages, Henna, Walima, Eid, graduations, and the moments that bring us together.",
    },
    {
      icon: "🌟",
      title: "Activities & Connection",
      description:
        "Creating opportunities to make friends, have fun, and spend time together through weekly activities, trips, gatherings, and more.",
    },
  ];

  return (
    <section className="what-we-do" aria-labelledby="what-we-do-title">
      <div className="what-we-do__container">
        <h2 id="what-we-do-title" className="what-we-do__title">
          We stand together.
        </h2>
        <p className="what-we-do__intro">
          From educating our children and preserving our heritage to supporting
          one another through life's most important moments, we are here for
          each other.
        </p>

        <div className="what-we-do__grid">
          {cards.map((card) => (
            <article key={card.title} className="what-we-do__card">
              <div className="what-we-do__icon" aria-hidden="true">
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>

        <div className="what-we-do__membership-note" aria-label="Membership access notice">
          <span className="what-we-do__membership-label">Member access</span>
          <p>
            Paying members receive access to our WhatsApp community group for updates,
            reminders, and family announcements. Creating an account alone does not
            grant access. For individual memberships, anyone age 18 or under does not
            pay; family memberships still require payment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
