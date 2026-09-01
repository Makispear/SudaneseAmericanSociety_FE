import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import "./learnMoreSchool.css";

const schoolHighlights = [
  {
    title: "Who can join",
    description:
      "This program is for paying family members of the Sudanese American Community who want to register their children for learning and cultural growth.",
  },
  {
    title: "Where it happens",
    description:
      "Classes take place every Saturday and Sunday in Aldar, the building we rent for community gatherings and educational activities.",
  },
  {
    title: "Additional cost",
    description:
      "The school operates with a small symbolic contribution, a modest token to help cover essentials and support the program. More details are available after creating an account and speaking with the school team.",
  },
];

const programs = [
  {
    icon: "📖",
    title: "Arabic",
    description: "Helping children strengthen their Arabic language and stay connected to the language of their roots.",
  },
  {
    icon: "🕌",
    title: "Quran & Deen Studies",
    description: "Helping children build a strong foundation in Quranic learning, memorization, and Islamic character through patient guidance and meaningful study.",
  },
  {
    icon: "🇸🇩",
    title: "Sudanese Culture",
    description: "Teaching Sudanese traditions, history, identity, and values so the next generation stays rooted in who they are.",
  },
];

const teamMembers = [
  {
    name: "Aboabida Maki",
    role: "Principal",
    description:
      "Leading the school with care, structure, and a strong commitment to the children and families we serve.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Osman Albolok",
    role: "Vice Principal",
    description:
      "Supporting daily operations and helping create a positive, encouraging environment for learning and growth.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Aladin Ali",
    role: "Treasurer",
    description:
      "Managing school finances and helping ensure the program remains organized, sustainable, and well supported.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hoda Idris",
    role: "Secretary",
    description:
      "Helping families, supporting school operations, and caring for children with patience, warmth, and attentiveness.",
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
            <h1 className="school-hero__title">Sudanese School at Aldar</h1>
            <p className="school-hero__text">
              For paying family members of the Sudanese American Community,
              our school offers a welcoming place for children to learn Quran,
              Arabic, and Sudanese culture in a warm and supportive space.
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

        <section className="school-programs" aria-labelledby="school-programs-title">
          <div className="section-heading">
            <p className="eyebrow">What We Teach</p>
            <h2 id="school-programs-title">
              Rooted in faith, language, and culture.
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
            <h2 id="school-team-title">The people guiding our school.</h2>
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
            <h2 id="school-cta-title">This is a community program built for families.</h2>
            <p>
              The school is held at Aldar every Saturday and Sunday, with a focus on
              nurturing confident, connected children who grow stronger in their faith,
              language, and identity. Membership is separate from the school’s modest
              symbolic contribution, and more details are shared after creating an account
              and speaking with the school team.
            </p>
            <Link to="/signup" className="school-cta__button">
              Create Account to Get Started
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LearnMoreSchool;
