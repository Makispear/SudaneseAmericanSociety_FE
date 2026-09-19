import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./ContactPage.css";

function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("Info@ctsudanese.org");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500); // Reset hint after 2.5 seconds
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <>
      <Navbar />
      <main className="contact-page">
        <section className="contact-hero">
          <p className="eyebrow eyebrow--green">Get In Touch</p>
          <h1>Contact the Sudanese American Society</h1>
          <p className="contact-hero__subtitle">
            Whether you have questions about membership, community events, our
            school programs, or want to connect, we are here for you.
          </p>
        </section>

        <section className="contact-container contact-container--single">
          {/* Information Panel */}
          <div className="contact-info-card contact-info-card--centered">
            <h2>Reach Out Directly</h2>
            <p className="contact-info-desc">
              Rooted in belonging, support, and opportunity across Connecticut.
              Connect with our community team through the details below.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>
                    727 Campbell Ave
                    <br />
                    West Haven, CT 06516
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <button
                    type="button"
                    className="copy-email-btn"
                    onClick={handleCopyEmail}
                    title="Click to copy email address"
                  >
                    <span className="email-address">
                      Info@ctsudanese.org[cite: 1]
                    </span>
                    <span
                      className={`copy-badge ${copied ? "copy-badge--success" : ""}`}
                    >
                      {copied ? "✓ Copied to clipboard" : "Click to copy"}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-constitutional-note">
              <strong>Our Mission</strong>
              <p>
                Operating independently to foster cultural, educational, and
                social bonds, enhancing fraternal ties among Sudanese families
                and the wider community in Connecticut.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactPage;
