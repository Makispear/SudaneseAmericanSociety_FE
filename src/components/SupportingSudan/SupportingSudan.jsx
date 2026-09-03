import "./SupportingSudan.css";

const supportPillars = [
  "Fundraising",
  "Emergency relief",
  "Community-led support",
];

const SupportingSudan = () => {
  return (
    <section
      className="supporting-sudan"
      aria-labelledby="supporting-sudan-title"
    >
      <div className="supporting-sudan__content">
        <div className="supporting-sudan__text-wrap">
          <p className="supporting-sudan__eyebrow" title="Blue for Sudan">
            Supporting Sudan
          </p>
          <h2 id="supporting-sudan-title" className="supporting-sudan__title">
            Their struggles are our struggles.
          </h2>

          <blockquote className="supporting-sudan__quote">
            Distance will never break our bond with Sudan. يد واحدة (as one
            hand), we show up. Pooling our donations and community efforts to
            deliver immediate aid and assistance to our families.
          </blockquote>

          <p className="supporting-sudan__text">
            Through random but frequent, collective donations, and fundraising,
            we stand with our people suffering in Sudan, delivering immediate,
            practical relief and support to families facing deep crisis.
          </p>

          <div className="supporting-sudan__tags" aria-label="Support areas">
            {supportPillars.map((item) => (
              <span key={item} className="supporting-sudan__tag">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          className="supporting-sudan__visual"
          aria-label="Sudan support image"
        >
          <div className="supporting-sudan__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="Community members supporting people in need"
            />
          </div>
          <div className="supporting-sudan__overlay-card">
            <span className="supporting-sudan__overlay-label">Our promise</span>
            <strong>Stand with Sudan</strong>
            <p>Small acts, frequent support, and collective care.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportingSudan;
