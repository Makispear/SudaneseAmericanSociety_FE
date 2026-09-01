import "./SupportingSudan.css";

const supportPillars = [
  "Fundraising",
  "Emergency relief",
  "Community-led support",
];

const SupportingSudan = () => {
  return (
    <section className="supporting-sudan" aria-labelledby="supporting-sudan-title">
      <div className="supporting-sudan__content">
        <div className="supporting-sudan__text-wrap">
          <p className="supporting-sudan__eyebrow">Supporting Sudan</p>
          <h2 id="supporting-sudan-title" className="supporting-sudan__title">
            Our community doesn’t stop at the border.
          </h2>

          <blockquote className="supporting-sudan__quote">
            We remain connected to our homeland by supporting people in Sudan
            through fundraising, donations, and community-led efforts to provide
            assistance to those in need.
          </blockquote>

          <p className="supporting-sudan__text">
            We do random but frequent donations to our beloved Sudanese people in
            Sudan who are suffering from the consequences of hardship and crisis.
            Through collective care and practical support, we stand in solidarity
            with families experiencing deep need.
          </p>

          <div className="supporting-sudan__tags" aria-label="Support areas">
            {supportPillars.map((item) => (
              <span key={item} className="supporting-sudan__tag">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="supporting-sudan__visual" aria-label="Sudan support image">
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
