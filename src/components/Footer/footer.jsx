import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__brand">
          <h3>Sudanese American Society</h3>
          <p>
            Bringing families and friends together through culture, belonging,
            and shared opportunity.
          </p>
          <span className="site-footer__accent">Community First</span>
        </div>

        <div className="site-footer__column">
          <h4>Explore</h4>
          <nav className="site-footer__links" aria-label="Footer navigation">
            <a href="/about">About Us</a>
            <a href="/school">School</a>
            <a href="/#membership">Membership</a>
            <a href="/signup">Become a Member</a>
          </nav>
        </div>

        <div className="site-footer__meta">
          <h4>Community</h4>
          <p>
            Supporting connection, heritage, and care across generations in
            Connecticut and beyond.
          </p>
        </div>
      </div>

      <div className="site-footer__credit">
        <p>
          This website was built with care by the{" "}
          <strong>Sudanese American</strong> community.
        </p>
        <p>
          © {new Date().getFullYear()} Sudanese American Society. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
