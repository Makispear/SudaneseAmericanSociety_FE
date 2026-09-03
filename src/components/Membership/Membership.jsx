import { useNavigate } from "react-router-dom";
import "./Membership.css";

const Membership = () => {
  return (
    <>
      <section
        className="membership"
        aria-labelledby="membership-title"
        id="membership"
      >
        <div className="membership__container">
          <p className="membership__eyebrow">Membership</p>

          <div className="membership__header">
            <h2 id="membership-title" className="membership__title">
              There’s a place for you here.
            </h2>
            <p className="membership__quote">
              Whether you're looking to connect with other Sudanese, participate
              in community activities, learn about your heritage, or support our
              efforts, we welcome you to be part of the Society.
            </p>
          </div>

          <div className="membership__panel">
            <h3>Basic membership eligibility</h3>
            <div className="membership__eligibility">
              <span className="membership__badge">
                Welcoming any Sudani and Sudaniya
              </span>
              <p>
                We keep things relaxed with zero pressure or
                strict rules!
              </p>
            </div>

            <ul className="membership__list">
              <li>
                <span className="membership__highlight">Sudani/Sudaniya</span>{" "}
                - Heritage and community ties are the foundation of eligibility.
              </li>
              <li>
                <span className="membership__highlight">In Connecticut</span> - Ideal for CT residents or anyone who can
                regularly join our events in CT.
              </li>
            </ul>

            <div className="membership__guest-note">
              <span className="membership__guest-note-label">
                Non-Sudanese spouses and dependants
              </span>
              <p>
                Married to a Sudani/Sudaniya or a dependant of a member? You’re
                already part of the family. Come on in and join us!
              </p>
            </div>

            <div className="membership__guest-note">
              <span className="membership__guest-note-label">
                Coming as a guest?
              </span>
              <p>
                Welcome! Whether you’re Sudanese or not, our doors are wide
                open. Come share a meal, meet the community, and experience true
                Sudanese{" "}
                <span
                  className="membership__mujamala"
                  title="The art of active social courtesy, generosity, and presence."
                >
                  Mujamala
                </span>{" "}
                firsthand.
              </p>
            </div>
          </div>

          <div className="membership__note" aria-live="polite">
            <strong>Unable to pay?</strong>
            <p>
              Please reach out to us. Money will never stand between family.
              That’s just not the Sudani way.
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
          Strengthening our lives and community across Connecticut today, while
          keeping our bond with Sudan alive for tomorrow.
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
