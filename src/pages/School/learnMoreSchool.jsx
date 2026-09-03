import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import "./learnMoreSchool.css";

const schoolHighlights = [
  {
    title: "Who can join",
    description:
      "This program is created for our members who want to instill a deep love for our heritage, Islam, and culture in their children.",
  },
  {
    title: "Where it happens",
    description:
      "Classes take place every Saturday and Sunday at Aldar. Our rented space for community gatherings, learning, and connection.",
  },
  {
    title: "Additional cost",
    description:
      "The school asks for only a small, symbolic contribution to help cover basic essentials. We keep things simple and accessible.",
  },
];

const programs = [
  {
    icon: "📖",
    title: "Arabi عربي",
    description:
      "Helping children strengthen their Arabic language and stay connected to the language of their roots.",
  },
  {
    icon: "🕌",
    title: "Quran & Islamic Studies",
    description:
      "Helping children build a strong foundation in Quranic learning, memorization, and Islamic character through patient guidance and meaningful study.",
  },
  {
    icon: "🇸🇩",
    title: "Sudanese Culture",
    description:
      "Teaching Sudanese traditions, history, identity, and values so the next generation stays rooted in who they are.",
  },
];

const teamMembers = [
  {
    name: "Aboabida Maki",
    role: "Principal",
    description:
      "Leading our school with care, structure, and dedication to our children.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Osman Albolok",
    role: "Vice Principal",
    description:
      "Keeping school life running smoothly so our children can grow with confidence.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Aladin Ali",
    role: "Treasurer",
    description:
      "Managing resources to keep our children’s programs organized, strong, and sustainable.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hoda Idris",
    role: "Secretary",
    description:
      "Supporting our school operations and caring for our children with warmth and patience.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
];

function LearnMoreSchool() {
  return (
    <>
      <Navbar />
      <main className="school-page">
        <section className="school-hero">
          <div className="school-hero__content">
            <p className="eyebrow">School Program</p>
            <h1 className="school-hero__title">Weekend School at Aldar</h1>
            <p className="school-hero__text">
              This program is exclusively for our members. Helping fund our
              community’s causes while giving our children a warm, supportive
              home to learn Quran, Arabic, and Sudanese culture together.
            </p>
            <div className="school-hero__actions">
              <Link to="/signup" className="school-hero__primary">
                Create an Account
              </Link>
              <Link to="/about" className="school-hero__secondary">
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="school-hero__visual">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
              alt="Children learning together in a classroom"
            />
            <span className="school-hero__badge">Aldar</span>
          </div>
        </section>

        <section className="school-intro" aria-label="School introduction">
          <div className="school-intro__grid">
            {schoolHighlights.map((item) => (
              <article key={item.title} className="school-intro__item">
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="school-programs"
          aria-labelledby="school-programs-title"
        >
          <div className="section-heading">
            <p className="eyebrow">What We Teach</p>
            <h2 id="school-programs-title">
              Rooted in Islam, language, and culture.
            </h2>
          </div>

          <div className="school-programs__grid">
            {programs.map((program) => (
              <article key={program.title} className="school-program__card">
                <div className="school-program__icon" aria-hidden="true">
                  {program.icon}
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="school-team" aria-labelledby="school-team-title">
          <div className="school-team__heading">
            <p className="eyebrow">Our Team</p>
            <h2 id="school-team-title">
              The Hands & Hearts Caring for Our Children.
            </h2>
          </div>

          <div className="school-team__grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="school-team__card">
                <div className="school-team__image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="school-team__body">
                  <h3>{member.name}</h3>
                  <p className="school-team__role">{member.role}</p>
                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="school-cta" aria-labelledby="school-cta-title">
          <div className="school-cta__panel">
            <p className="eyebrow">School details</p>
            <h2 id="school-cta-title">
              Created to inspire, guide, and uplift our children.
            </h2>
            <p>
              Held at Aldar every Saturday and Sunday, our school helps kids
              grow in Islamic faith, language, and culture. Tuition is just a
              modest token separate from membership. Our team will guide you
              through the details once you sign up.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LearnMoreSchool;
