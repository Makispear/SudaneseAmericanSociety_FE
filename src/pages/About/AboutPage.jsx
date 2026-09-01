import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import "./AboutPage.css";

const valueCards = [
  {
    icon: "🤝",
    title: "Unity",
    description:
      "We believe strength grows when people stand together, support one another, and show up for the community.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family",
    description:
      "We value the bonds that keep families connected, resilient, and rooted in care, love, and belonging.",
  },
  {
    icon: "🇸🇩",
    title: "Heritage",
    description:
      "We honor Sudanese culture, language, faith, and identity as living traditions worth protecting and passing on.",
  },
  {
    icon: "🤲",
    title: "Service",
    description:
      "We serve with compassion, generosity, and a commitment to helping our community through both good times and difficult ones.",
  },
  {
    icon: "📚",
    title: "Education",
    description:
      "We invest in learning, growth, and knowledge so future generations stay connected to who they are and where they come from.",
  },
  {
    icon: "🏘️",
    title: "Community",
    description:
      "We build a space where people belong, connect, celebrate, and carry each other forward.",
  },
];

const principles = [
  {
    title: "Education & Heritage",
    text: "Preserving Arabic, Quran, Sudanese culture, history, and identity for future generations.",
  },
  {
    title: "Community Support",
    text: "Being there for one another during difficult moments and helping members when they need support.",
  },
  {
    title: "Life & Celebrations",
    text: "Coming together for important moments in life, including marriages, family gatherings, celebrations, and other milestones.",
  },
  {
    title: "Activities & Connection",
    text: "Creating opportunities for members to socialize, make friends, participate in activities, and build lasting relationships.",
  },
];

const leaders = [
  {
    initials: "NH",
    name: "Name Here",
    role: "President",
    description:
      "Working to guide the mission, strengthen the community, and lead with care and purpose.",
  },
  {
    initials: "MI",
    name: "Name Here",
    role: "Vice President",
    description:
      "Supporting community initiatives and helping connect members to opportunities and resources.",
  },
  {
    initials: "ED",
    name: "Name Here",
    role: "Education Director",
    description:
      "Helping preserve Sudanese identity through learning, cultural engagement, and youth connection.",
  },
  {
    initials: "CC",
    name: "Name Here",
    role: "Community Coordinator",
    description:
      "Building warm, welcoming spaces where people can connect, participate, and feel supported.",
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
          Learn about the people, purpose, and values behind the Sudanese
          American Society.
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
            The Sudanese American Society was created by people who wanted a
            place where Sudanese Americans could come together, feel at home,
            and build lasting connections across distance, generations, and life
            experiences.
          </p>
          <p>
            As the community grew, so did the need for a welcoming space rooted
            in culture, friendship, support, and shared identity. What began as
            a desire to stay connected evolved into a broader mission: to
            preserve heritage, support one another, and create stronger
            opportunities for families and future generations.
          </p>
          <p>
            This organization exists to reflect the values of the community
            itself — resilience, unity, generosity, and belonging. It is a place
            where people can gather, celebrate, support, and build a future that
            honors both Sudan and life in America.
          </p>
        </div>

        <div className="story__aside">
          <div className="story__stamp">
            Built by the community, for the community.
          </div>
          <div className="story__note">
            Placeholder text: Replace this section with the Society’s real
            history, milestones, and founding story as needed.
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
          To bring Sudanese Americans together, strengthen our community,
          preserve our heritage, support one another, and create opportunities
          for current and future generations.
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
          A strong, connected Sudanese-American community where people can find
          belonging, support one another, preserve their culture, help Sudan,
          and give future generations a deep connection to their heritage.
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

function Leadership() {
  return (
    <section className="leadership section-shell">
      <div className="section-heading section-heading--centered">
        <p className="eyebrow eyebrow--green">Leadership</p>
        <h2>The People Behind the Society</h2>
      </div>

      <p className="leadership__intro">
        Our community is strengthened by the people who dedicate their time,
        energy, and experience to serving others.
      </p>

      <div className="leadership__grid">
        {leaders.map((person) => (
          <article
            key={`${person.role}-${person.name}`}
            className="leader-card"
          >
            <div className="leader-card__photo" aria-label={person.name}>
              {person.initials}
            </div>
            <h3>{person.name}</h3>
            <p className="leader-card__role">{person.role}</p>
            <p className="leader-card__bio">{person.description}</p>
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
        <Leadership />
        <Aldar />
        <LookingAhead />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
