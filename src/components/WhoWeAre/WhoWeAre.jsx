import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section className="who-we-are" aria-labelledby="who-we-are-title">
      <div className="who-we-are__content">
        <p className="who-we-are__eyebrow">WHO WE ARE</p>
        <h2 id="who-we-are-title" className="who-we-are__title">
          A community connected by heritage, strengthened by unity.
        </h2>
        <p className="who-we-are__text">
          The Sudanese American Society brings together Sudanese Americans
          across the United States to build meaningful connections, celebrate
          our heritage, and support one another.
        </p>
        <a
          href="/about"
          className="who-we-are__link"
          aria-label="Learn more about us"
        >
          Learn More About Us <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
};

export default WhoWeAre;
