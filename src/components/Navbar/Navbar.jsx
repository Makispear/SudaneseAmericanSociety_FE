import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import sudaneseFlag from "../../assets/LandingPage/sudaneseFlag.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsTop(currentScrollY < 20);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 60);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`navbar ${isVisible ? "navbar--visible" : "navbar--hidden"} ${
        isTop ? "navbar--top" : "navbar--scrolled"
      }`}
    >
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="logoLink" aria-label="Go to homepage" onClick={closeMenu}>
          <div className="logoWrap">
            <img src={sudaneseFlag} alt="Sudanese flag" className="logoIcon" />
            <span className="logoText">Sudanese American Society</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="navbar__links">
          <Link to="/" className="navbar__link">Home</Link>
          <Link to="/about" className="navbar__link">About</Link>
          <Link to="/school" className="navbar__link">School</Link>
          {/* <Link to="/contact" className="navbar__link">Contact</Link> */}
          <Link to="/signup" className="navbar__link navbar__link--join">signup</Link>
          <Link to="/login" className="navbar__link navbar__link--login">Login</Link>
        </div>

        {/* Mobile Burger Toggle Button */}
        <button
          className={`navbar__burger ${isMobileMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}>
        <div className="navbar__mobile-links">
          <Link to="/" className="navbar__mobile-link navbar__highlight" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/login" className="navbar__mobile-link navbar__highlight" onClick={closeMenu}>
            Login
          </Link>
          <Link to="/join" className="navbar__mobile-link navbar__highlight" onClick={closeMenu}>
            Join Page
          </Link>
          <Link to="/about" className="navbar__mobile-link" onClick={closeMenu}>
            About
          </Link>
          <Link to="/school" className="navbar__mobile-link" onClick={closeMenu}>
            School
          </Link>
          {/* <Link to="/contact" className="navbar__mobile-link" onClick={closeMenu}>
            Contact
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;