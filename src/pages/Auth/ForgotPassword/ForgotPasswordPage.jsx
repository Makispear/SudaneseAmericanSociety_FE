import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar.jsx";
// Import your API client/service function that calls /api/auth/forgotPassword
import { requestPasswordReset } from "../../../services/accountService.js";
import "./ForgotPasswordPage.css"; // Reuse or create a matching stylesheet

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!email.trim()) {
      return setError("Email is required.");
    }

    setIsSubmitting(true);

    try {
      // Calls your backend API endpoint /api/auth/forgotPassword
      await requestPasswordReset({ email: email.trim() });
      setSubmitted(true);
    } catch  {
      // Industry standard: Show a generic success message even if the email
      // fails or doesn't exist, to prevent email enumeration attacks.
      // But you can log it or display a safe fallback error if needed.
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="auth-page">
        <div className="auth-card">
          <div className="auth-header">
            <p className="eyebrow eyebrow--green">Account Recovery</p>
            <h2>Forgot Password?</h2>
            <p className="auth-subtitle">
              Enter your email address below and we&apos;ll send you a secure
              link to reset your password.
            </p>
          </div>

          {!submitted ? (
            <form className="auth-form" onSubmit={handleSubmit} noValidate>
              {error ? <p className="form-error">{error}</p> : null}

              <div className="field">
                <label className="field__label">
                  Email Address <span className="required-indicator">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="auth-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Link..." : "Send Reset Link"}
              </button>
            </form>
          ) : (
            <div className="auth-success-box">
              <p>
                If an account matches <strong>{email}</strong>, a password reset
                link has been sent to your inbox. Please check your spam folder
                if you don&apos;t see it shortly.
              </p>
            </div>
          )}

          <div className="auth-footer-link">
            <Link to="/login">← Back to Login</Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default ForgotPasswordPage;
