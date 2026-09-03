import "./ShowCaseEvents.css";

const eventHighlights = [
  {
    title: "Quran Recitation",
    category: "Islam",
    description:
      "Beginner-friendly tilawa and halaqa sessions. We’re all learning, making mistakes, and growing together at our own pace.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Eid al-Mawlid",
    category: "Celebration",
    description:
      "A joyful gathering honoring the Prophet’s birthday with reflection, togetherness, and gratitude.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Eid al-Fitr",
    category: "Celebration",
    description:
      "Families celebrate the end of Ramadan with warmth, food, and community fellowship.",
    image:
      "https://images.unsplash.com/photo-1541534401786-2077eed87a74?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Eid al-Adha",
    category: "Celebration",
    description:
      "A meaningful day of sacrifice, remembrance, and shared meals across the community.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Independence Day",
    category: "Culture",
    description:
      "We honor Sudan’s independence with pride, reflection, and community recognition. Party hard for our country!",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Summer Trips",
    category: "Youth",
    description:
      "Our children and families enjoy memorable outings and excursions throughout the summer.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Gatherings at Aldar",
    category: "Community",
    description:
      "Warm, regular community meetings strengthen connection, belonging, and shared purpose.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "New Grad Celebrations",
    category: "Achievement",
    description:
      "Our kids grow up fast, and we’re right here to celebrate every big step. From high school graduations and college acceptances to degree days and everything in between.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Funerals",
    category: "Support",
    description:
      "Our community stands together with care and compassion during moments of loss and mourning.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Marriages",
    category: "Family",
    description:
      "We honor life milestones with blessings, support, and joyful community participation.",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Henna",
    category: "Tradition",
    description:
      "A vibrant pre-wedding celebration where men, women, and families gather for music, dancing, and applying henna in joy and unity.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Family Gatherings",
    category: "Togetherness",
    description:
      "Everyday moments of connection, hospitality, and belonging that keep our community rooted.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Ramadan",
    category: "Togetherness",
    description: "Frequent Ramadan Iftars in our Dar",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
  },
];

const ShowCaseEvents = () => {
  return (
    <section
      className="events-showcase"
      aria-labelledby="events-showcase-title"
    >
      <div className="events-showcase__container">
        <div className="events-showcase__header">
          <div>
            <p className="events-showcase__eyebrow">Community Life</p>
            <h2 id="events-showcase-title">
              A full calendar for every generation.
            </h2>
          </div>
          <p className="events-showcase__intro">
            At the heart of our community is connection. From moments of faith
            and celebration to daily life and family milestones, we create a
            space where every generation belongs.
          </p>
        </div>

        <div className="events-showcase__featured">
          <div className="events-showcase__featured-image">
            <img
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80"
              alt="Community members gathering together"
            />
          </div>

          <div className="events-showcase__featured-copy">
            <span className="events-showcase__pill">
              All ages • Men & women • Families
            </span>
            <h3>
              The HEART 💚 of our community. Islam, culture, celebration 🎉,
              care. All YEAR.
            </h3>
            <p>
              We are a community that gathers not only for major holidays, but
              for daily connection, life milestones, and the moments that keep
              families rooted in love, Islam, and belonging.
            </p>
          </div>
        </div>

        <div className="events-showcase__grid">
          {eventHighlights.map((event, index) => (
            <article
              key={event.title}
              className={`events-showcase__card events-showcase__card--${index % 5}`}
            >
              <div className="events-showcase__image-wrap">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="events-showcase__badge">{event.category}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowCaseEvents;
