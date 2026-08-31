import "./WhatWeDo.css";

const WhatWeDo = () => {
  const cards = [
    {
      icon: "📚",
      title: "Our Children & Heritage",
      description:
        "Keeping our language, faith, culture, and connection to Sudan alive for our children and generations to come."
    },
    {
      icon: "🤝",
      title: "Community Support",
      description:
        "Supporting one another through life's difficult moments and making sure no one has to face them alone."
    },
    {
      icon: "🎉",
      title: "Life & Celebrations",
      description:
        "Sharing life's most important moments together, from marriages and family gatherings to celebrations at Aldar."
    },
    {
      icon: "🌟",
      title: "Activities & Connection",
      description:
        "Creating opportunities to have fun, build friendships, share experiences, and simply enjoy being together."
    }
  ];

  return (
    <section className="what-we-do" aria-labelledby="what-we-do-title">
      <div className="what-we-do__container">
        <h2 id="what-we-do-title" className="what-we-do__title">
          We stand together.
        </h2>
        <p className="what-we-do__intro">
          From supporting one another here in America to giving back to Sudan and
          nurturing the next generation, we come together as a community to build
          something stronger—together.
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
      </div>
    </section>
  );
};

export default WhatWeDo;
