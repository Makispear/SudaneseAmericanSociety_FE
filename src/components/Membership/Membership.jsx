import { useNavigate } from "react-router-dom";
import "./Membership.css";

const Membership = () => {
  return (
    <>
      <section className="membership" aria-labelledby="membership-title" id="membership">
        <div className="membership__container">
          <p className="membership__eyebrow">Membership</p>

          <div className="membership__header">
            <h2 id="membership-title" className="membership__title">
              There’s a place for you here.
            </h2>
            <p className="membership__quote">
              Whether you're looking to connect with other Sudanese Americans,
              participate in community activities, learn about your heritage, or
              support our efforts, we welcome you to be part of the Society.
            </p>
          </div>

          <div className="membership__panel">
            <h3>Basic membership eligibility</h3>
            <div className="membership__eligibility">
              <span className="membership__badge">Sudanese Origin</span>
              <p>
                <span>Membership is open</span> to people of Sudanese origin,
                both men and women are welcome, and to Connecticut residents who
                are part of the local Sudanese community.
              </p>
            </div>

            <ul className="membership__list">
              <li>
                <span className="membership__highlight">Sudanese heritage</span>{" "}
                and community ties are the foundation of eligibility.
              </li>
              <li>
                <span className="membership__highlight">
                  Connecticut residency
                </span>{" "}
                is required for membership in the Society.
              </li>
              <li>
                <span className="membership__highlight">
                  Dependants and spouses{" "}
                </span>
                of Sudanese origin are welcome with family membership.
              </li>
              <li>
                <span className="membership__highlight">Age 18 and under</span>{" "}
                for individual membership does not pay;{" "}
                <span className="membership__highlight">
                  family memberships still require payment
                </span>
                .
              </li>
              <li>
                <span className="membership__highlight">All members</span> are
                encouraged to take part in programs, events, and community life.
              </li>
            </ul>

            <div className="membership__guest-note">
              <span className="membership__guest-note-label">
                Non-Sudanese friends
              </span>
              <p>
                If a member invites you to join one of our events or gatherings,
                you are warmly welcome to come along and share in the community.
                We are glad to celebrate with you.
              </p>
            </div>
          </div>

          <div className="membership__note" aria-live="polite">
            <strong>Unable to pay?</strong>
            <p>
              Please reach out to us. We don't want financial circumstances to
              keep you from being part of the community.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
};

function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta__inner">
        <p className="final-cta__eyebrow">Join the community</p>
        <h2 id="final-cta-title" className="final-cta__title">
          Together, we build something that lasts.
        </h2>
        <p className="final-cta__quote">
          A stronger community today. A stronger connection to Sudan tomorrow.
        </p>

        <div className="final-cta__actions">
          <button
            type="button"
            className="final-cta__primary"
            onClick={() => navigate("/signup")}
          >
            Become a Member
          </button>
          <button
            type="button"
            className="final-cta__secondary"
            onClick={() => navigate("/about")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Membership;
