import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import "./EmailVerificationPage.css";

function EmailVerificationPage() {
  return (
    <>
      <Navbar />
      <main className="verification-page">
        <section className="verification-card" aria-labelledby="verification-title">
          <div className="verification-card__icon" aria-hidden="true">
            ✓
          </div>
          <p className="eyebrow eyebrow--green">Account created</p>
          <h1 id="verification-title">Check your email</h1>
          <p className="verification-card__message">
            Your account has been created. Please check your email to verify your account.
          </p>
          <div className="verification-card__actions">
            <Link to="/" className="verification-card__primary">
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default EmailVerificationPage;
