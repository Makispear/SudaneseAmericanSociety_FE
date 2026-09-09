import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import Leadership from "../../components/Leadership/Leadership.jsx";

import AboutHero from "../../components/AboutComponents/AboutHero/AboutHero.jsx";
import OurStory from "../../components/AboutComponents/OurStory/OurStory.jsx";
import Mission from "../../components/AboutComponents/OurMission/OurMission.jsx";
import Vision from "../../components/AboutComponents/OurVision/OurVision.jsx";
import Values from "../../components/AboutComponents/OurValues/OurValues.jsx";
import WhatWeStandFor from "../../components/AboutComponents/WhatWeStandFor/WhatweStandFor.jsx";
import Aldar from "../../components/AboutComponents/Aldar/Aldar.jsx";
import LookingAhead from "../../components/AboutComponents/LookingAhead/LookingAhead.jsx";
import "./AboutPage.css";

function AboutCTA() {
  const navigate = useNavigate();

  return (
    <section className="about-cta">
      <div className="about-cta__content section-shell">
        <p className="eyebrow eyebrow--light">Join Us</p>
        <h2>Be Part of Something Bigger.</h2>
        <p>
          Whether you are looking to connect, contribute, learn, or simply find
          your people, there is a place for you here.
        </p>
        <div className="about-cta__actions">
          <button
            type="button"
            className="about-cta__primary"
            onClick={() => navigate("/signup")}
          >
            Become a Member
          </button>
          <button
            type="button"
            className="about-cta__secondary"
            onClick={() => navigate("/signup")}
          >
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="about-page">
        <AboutHero />
        <OurStory />
        <Mission />
        <Vision />
        <Values />
        <WhatWeStandFor />
        <Aldar />
        <LookingAhead />
        <AboutCTA />
        <Leadership />
      </main>
      <Footer />
    </>
  );
}
