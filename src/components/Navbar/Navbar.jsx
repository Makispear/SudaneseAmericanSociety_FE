import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import sudaneseFlag from "../../assets/LandingPage/sudaneseFlag.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);

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

  return (
    <nav
      className={`navbar ${isVisible ? "navbar--visible" : "navbar--hidden"} ${
        isTop ? "navbar--top" : "navbar--scrolled"
      }`}
    >
      <Link to="/" className="logoLink" aria-label="Go to homepage">
        <div className="logoWrap">
          <img src={sudaneseFlag} alt="Sudanese flag" className="logoIcon" />
          <span className="logoText">Sudanese American Society</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
