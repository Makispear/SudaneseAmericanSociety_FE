import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import { loginUser } from "../../../services/accountService.js";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFieldChange = (field, value) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: "",
    }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      nextErrors.password = "Password is required.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setApiError("");

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await loginUser({
        email: formData.email.trim(),
        password: formData.password,
        rememberMe: formData.rememberMe,
      });
      setErrors({});
      navigate("/");
    } catch (error) {
      const errorMessage =
        error?.message || "Invalid email or password. Please try again.";
      setApiError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="login-page">
        <section className="login-layout" aria-labelledby="login-title">
          <div className="login-branding login-branding--desktop-only">
            <span className="login-branding__badge">Welcome back</span>
            <h1 id="login-title">Access Your Account</h1>
            <p className="login-branding__subtitle">
              Sign in to connect with the Sudanese American Society community
              and manage your membership.
            </p>

            <div
              className="login-branding__card"
              aria-label="Community highlights"
            >
              <div className="login-branding__stat">
                <strong>Community</strong>
                <span>Share and participate!</span>
              </div>
              <div className="login-branding__stat">
                <strong>Heritage</strong>
                <span>Embrace our Sudani traditions!</span>
              </div>
              <div className="login-branding__stat">
                <strong>Service</strong>
                <span>Show up for one another.</span>
              </div>
            </div>
          </div>

          <div className="login-card">
            <form className="login-form" onSubmit={handleSubmit} noValidate>
              <div className="login-form__header">
                <p className="eyebrow eyebrow--green">Welcome back</p>
                <h2 id="login-title-mobile">Log In</h2>
                <p className="login-form__mobile-subtitle">
                  Sign in to connect with the Sudanese American Society
                  community.
                </p>
              </div>

              {apiError ? (
                <p className="form-error form-error--api">{apiError}</p>
              ) : null}

              <div className="login-form__grid">
                <label className="field field--full">
                  <span>
                    Email{" "}
                    <span aria-hidden="true" className="required-indicator">
                      *
                    </span>
                  </span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      handleFieldChange("email", event.target.value)
                    }
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? (
                    <small className="field-error">{errors.email}</small>
                  ) : null}
                </label>

                <div className="field field--full">
                  <label className="field__label">
                    Password{" "}
                    <span aria-hidden="true" className="required-indicator">
                      *
                    </span>
                  </label>
                  <div className="password-field">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(event) =>
                        handleFieldChange("password", event.target.value)
                      }
                      placeholder="Enter your password"
                      aria-invalid={Boolean(errors.password)}
                    />
                    <button
                      type="button"
                      className="show-password"
                      onClick={() => setShowPassword((current) => !current)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  {errors.password ? (
                    <small className="field-error">{errors.password}</small>
                  ) : null}
                </div>

                <div className="login-options-row">
                  <label className="login-checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={(event) =>
                        handleFieldChange("rememberMe", event.target.checked)
                      }
                      className="login-checkbox"
                    />
                    <span>Remember me</span>
                  </label>

                  <Link to="/forgot-password" className="forgot-password-link">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div className="login-form__footer">
                <button
                  type="submit"
                  className="login-form__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </div>

              <div className="login-signup-prompt">
                <span>Don&apos;t have an account?</span>
                <button
                  type="button"
                  className="login-signup-button"
                  onClick={() => navigate("/signup")}
                >
                  Create an account
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default LoginPage;
