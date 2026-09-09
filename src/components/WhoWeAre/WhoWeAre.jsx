import { useState } from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  const [expandedMobile, setExpandedMobile] = useState(false);

  return (
    <section className="who-we-are" aria-labelledby="who-we-are-title">
      <div className="who-we-are__content">
        <div className="who-we-are__text-wrap">
          <p className="who-we-are__eyebrow">WHO WE ARE</p>
          <h2 id="who-we-are-title" className="who-we-are__title">
            A community connected by heritage, strengthened by unity.
          </h2>

          {/* Collapsible paragraph on mobile */}
          <div
            className={`who-we-are-collapsible ${expandedMobile ? "who-we-are-collapsible--expanded" : ""}`}
          >
            <p className="who-we-are__text">
              We bring together Sudanese across Connecticut to build meaningful
              connections, celebrate our heritage, and support one another.
            </p>
          </div>

          {/* Mobile-only toggle button */}
          <button
            type="button"
            className="who-we-are__mobile-toggle"
            onClick={() => setExpandedMobile(!expandedMobile)}
          >
            {expandedMobile ? "Show Less" : "Read More"}
          </button>

          <div className="who-we-are__actions">
            <span className="who-we-are__tag">
              Community • Culture • Belonging
            </span>
          </div>
        </div>

        <div
          className="who-we-are__visual"
          aria-label="Our community image and values"
        >
          <div className="who-we-are__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="Sudanese community gathering"
            />
          </div>
          <div className="who-we-are__floating-card">
            <span className="who-we-are__floating-label">Our mission</span>
            <strong>Lift each other up</strong>
            <p>
              Celebrating identity, building belonging, and creating
              opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
