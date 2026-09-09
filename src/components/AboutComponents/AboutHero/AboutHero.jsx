import { useNavigate } from "react-router-dom";

export default function AboutHero() {
  const navigate = useNavigate();

  return (
    <section className="about-hero">
      <div className="about-hero__content">
        <p className="eyebrow">ABOUT US</p>
        <h1>More Than an Organization. A Community.</h1>
        <p className="about-hero__text">
          The Sudanese American Society (SAS) is a 501(c)(3) non-profit
          community organization dedicated to civic engagement, cultural
          preservation, and social integration. We bridge the gap between
          Sudanese Americans and their broader local communities by providing
          essential social services, educational resources, and civic support to
          individuals and families.
        </p>
        <div className="about-hero__actions">
          <button
            type="button"
            className="about-hero__primary"
            onClick={() => navigate("/signup")}
          >
            Become a Member
          </button>
          <button
            type="button"
            className="about-hero__secondary"
            onClick={() => navigate("/signup")}
          >
            Get Involved
          </button>
        </div>
      </div>

      <div
        className="about-hero__visual"
        aria-label="Community placeholder image"
      >
        <div className="about-hero__card about-hero__card--main" />
        <div className="about-hero__card about-hero__card--small top" />
        <div className="about-hero__card about-hero__card--small bottom" />
        <div className="about-hero__badge">Community</div>
      </div>
    </section>
  );
}
