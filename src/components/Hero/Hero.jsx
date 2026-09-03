import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <p className="hero-section__eyebrow">UNITED IN COMMUNITY</p>
        <h2>Together We&apos;re Stronger</h2>
        <p>
          Connecting Sudanese in Connecticut. Building a stronger community rooted
          in belonging, support, and opportunity.
        </p>
        <div className="hero-section__actions">
          <button
            type="button"
            className="join"
            onClick={() => navigate("/signup")}
          >
            Join &amp; Become a Member
          </button>
          <button
            type="button"
            className="learn"
            onClick={() => navigate("/about")}
          >
            Learn About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
