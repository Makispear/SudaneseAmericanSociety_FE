import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import "./AboutPage.css";

const valueCards = [
  {
    icon: "🤝",
    title: "Civic Integration",
    description:
      "We empower families to successfully navigate local systems, access essential resources, and build self-sufficiency within the broader public community.",
  },
  {
    icon: "📚",
    title: "Youth Empowerment",
    description:
      "We invest in academic support, language learning, and mentorship programs to ensure future generations thrive academically and socially.",
  },
  {
    icon: "🇸🇩",
    title: "Cultural Preservation",
    description:
      "We safeguard and celebrate Sudanese heritage, language, and traditions through public educational, historical, and cultural programming.",
  },
  {
    icon: "🤲",
    title: "Public Service",
    description:
      "We deliver compassionate social support, outreach programs, and emergency assistance to strengthen vulnerable families in times of need.",
  },
  {
    icon: "🏘️",
    title: "Community Resiliency",
    description:
      "We cultivate strong, inclusive social safety networks that foster belonging, mutual aid, and active civic engagement across generations.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Stability",
    description:
      "We provide holistic support services designed to keep families connected, secure, and fully equipped to build sustainable lives.",
  },
];

const principles = [
  {
    title: "Educational & Cultural Continuity",
    text: "Delivering language instruction, heritage education, and cultural programming to build strong identity and academic growth in youth.",
  },
  {
    title: "Social Welfare & Relief Services",
    text: "Providing emergency support, resource navigation, and community aid to assist families during periods of transition or financial hardship.",
  },
  {
    title: "Civic & Family Integration",
    text: "Hosting community gatherings, cultural milestones, and civic programs that strengthen family stability and foster broader social integration.",
  },
  {
    title: "Youth Development & Engagement",
    text: "Organizing structured recreational, mentorship, and educational activities to empower youth and build long-term community resilience.",
  },
];

function AboutHero() {
  const navigate = useNavigate();

  return (
    <section className="about-hero">
      <div className="about-hero__content">
        <p className="eyebrow">ABOUT US</p>
        <h1>More Than an Organization. A Community.</h1>
        <p className="about-hero__text">
          The Sudanese American Society (SAS) is a 501(c)(3) non-profit
          community organization dedicated to civic engagement, cultural
          preservation, and social integration. We bridge the gap between
          Sudanese Americans and their broader local communities by providing
          essential social services, educational resources, and civic support to
          individuals and families.
        </p>
        <div className="about-hero__actions">
          <button
            type="button"
            className="about-hero__primary"
            onClick={() => navigate("/signup")}
          >
            Become a Member
          </button>
          <button
            type="button"
            className="about-hero__secondary"
            onClick={() => navigate("/signup")}
          >
            Get Involved
          </button>
        </div>
      </div>

      <div
        className="about-hero__visual"
        aria-label="Community placeholder image"
      >
        <div className="about-hero__card about-hero__card--main" />
        <div className="about-hero__card about-hero__card--small top" />
        <div className="about-hero__card about-hero__card--small bottom" />
        <div className="about-hero__badge">Community</div>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="story section-shell">
      <div className="section-heading">
        <p className="eyebrow eyebrow--green">Our Story</p>
      </div>

      <div className="story__content">
        <div className="story__copy">
          <p>
            The root of the Sudanese American Society began in 2014. As an
            increasing number of Sudanese families and individuals moved to the
            United States during this period, community leaders saw an urgent
            and growing need for a structured support network. New arrivals
            faced complex challenges navigating a new culture, accessing local
            resources, and establishing self-sufficiency. What started as an
            informal, neighbor-to-neighbor effort to help families settle and
            adapt quickly demonstrated the need for a dedicated, permanent
            organization.
          </p>
          <p>
            As our community grew, so did the necessity of establishing an
            official non-profit organization—a formal entity capable of securing
            resources, organizing public programs, and providing a stable,
            dedicated space for community services. The Sudanese American
            Society was formally created to fund and sustain these critical
            outreach efforts, ensuring that every family has access to
            educational support, cultural preservation programs, and essential
            social services.
          </p>
          <p>
            Today, this organization exists to embody resilience, unity, civic
            support, and shared heritage. It stands as a bridge between
            cultures—helping families thrive in America while honoring their
            roots and building a stronger, self-sustaining future for
            generations to come.
          </p>
        </div>

        <div className="story__aside">
          <div className="story__stamp">
            Built by the community, for the community.
          </div>
          <div className="story__note">
            <p>
              2014 — The Spark: As a growing wave of Sudanese families and
              individuals relocated to the United States, local leaders
              recognized a vital need for organized community support. Informal
              network circles were formed to assist new arrivals with local
              navigation, language support, and cultural transition.{" "}
            </p>
            <p>
              <br />
              2017 — Expanding Outreach: As community needs expanded beyond
              initial resettlement assistance, volunteers organized the first
              structured youth mentorship and heritage programs, providing
              after-school support and cultural education for growing families.
            </p>

            <br />
            <p>
              2020 — Formal Incorporation: To ensure long-term stability and
              expand public service capacity, community members formally
              established the Sudanese American Society as a dedicated
              non-profit organization, creating a transparent framework to fund
              programs and secure community resources.
            </p>
            <br />
            <p>
              2023 — Dedicated Community Hub: The Society launched its permanent
              operational facility, establishing a stable, welcoming space for
              daily educational programs, civic workshops, family support
              services, and cross-cultural events. Today — Sustainable Impact:
              The Sudanese American Society continues to serve hundreds of
              families annually through youth education, civic engagement
              initiatives, integration services, and community-wide cultural
              preservation programming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="mission">
      <div className="mission__inner section-shell">
        <p className="eyebrow eyebrow--light">Our Mission</p>
        <h2>
          To empower Sudanese American families through educational programming,
          cultural preservation, and social integration services that build
          long-term community self-sufficiency.
        </h2>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="vision section-shell">
      <div className="vision__heading">
        <p className="eyebrow eyebrow--green">Our Vision</p>
      </div>

      <div className="vision__content">
        <h2>
          A resilient, integrated Sudanese-American community empowered by
          educational opportunities, preserved heritage, and accessible social
          support for future generations.
        </h2>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="values section-shell">
      <div className="section-heading section-heading--centered">
        <p className="eyebrow eyebrow--green">Our Values</p>
        <h2>Values that guide how we serve.</h2>
      </div>

      <div className="values__grid">
        {valueCards.map((value) => (
          <article key={value.title} className="value-card">
            <div className="value-card__icon" aria-hidden="true">
              {value.icon}
            </div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhatWeStandFor() {
  return (
    <section className="standards section-shell">
      <div className="section-heading section-heading--centered">
        <p className="eyebrow eyebrow--green">What We Stand For</p>
        <h2>Four pillars of community life.</h2>
      </div>

      <div className="standards__grid">
        {principles.map((item) => (
          <article key={item.title} className="standard-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Aldar() {
  return (
    <section className="aldar section-shell">
      <div className="aldar__visual" aria-label="Aldar placeholder image">
        <div className="aldar__image" />
      </div>

      <div className="aldar__content">
        <p className="eyebrow eyebrow--green">Aldar</p>
        <h2>A Place to Gather</h2>
        <p>
          Aldar is a physical gathering place for the Sudanese American
          community. It creates room for connection, celebration, learning, and
          support in a setting that feels familiar, welcoming, and rooted in
          community life.
        </p>
        <ul>
          <li>Community gatherings</li>
          <li>Weekly activities</li>
          <li>Educational programs</li>
          <li>Weddings and Walima</li>
          <li>Nikah</li>
          <li>Gatherings during difficult times</li>
          <li>Social activities</li>
          <li>Community services and events</li>
        </ul>
        <blockquote>
          “A place to gather, celebrate, support, and connect.”
        </blockquote>
      </div>
    </section>
  );
}

function LookingAhead() {
  return (
    <section className="looking-ahead section-shell">
      <p className="eyebrow eyebrow--green">Looking Ahead</p>
      <h2>Building the Future Together</h2>
      <p>
        The Society continues to grow and strengthen its role in the Sudanese
        American community. As it moves forward, it remains focused on creating
        more opportunities for belonging, supporting future generations, and
        preserving Sudanese heritage with care and purpose.
      </p>
    </section>
  );
}

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
      </main>
      <Footer />
    </>
  );
}
