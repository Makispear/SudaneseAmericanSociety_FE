import { Link } from "react-router-dom";
import "./OurSchool.css";

const schoolPrograms = [
  {
    title: "Arabic",
    description: "Learn and preserve our language.",
  },
  {
    title: "Quran",
    description: "Build a strong foundation in Quranic learning.",
  },
  {
    title: "Culture",
    description: "Discover Sudanese traditions, history, and identity.",
  },
];

const OurSchool = () => {
  return (
    <section className="our-school" aria-labelledby="our-school-title">
      <div className="our-school__container">
        <div className="our-school__header">
          <p className="our-school__eyebrow">EDUCATION</p>
          <h2 id="our-school-title" className="our-school__title">
            Growing the next generation.
          </h2>
        </div>

        <div className="our-school__body">
          <div className="our-school__visual">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
              alt="Students learning together in a classroom setting"
            />
          </div>

          <div className="our-school__content">
            <blockquote className="our-school__quote">
              We believe our children should know where they come from. Through
              Arabic, Quran, and Sudanese culture, we help the next generation
              build a lasting connection to their heritage.
            </blockquote>

            <div className="our-school__programs" aria-label="Education programs">
              {schoolPrograms.map((program) => (
                <article key={program.title} className="our-school__program">
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </article>
              ))}
            </div>

            <Link to="/school" className="our-school__cta" aria-label="Learn about our school">
              Learn About Our School <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSchool;
