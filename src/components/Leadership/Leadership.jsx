import "./Leadership.css";

const leaders = [
  {
    initials: "AM",
    name: "Abdalnasir Mahmoud",
    role: "President",
    bio: "Serving as the top elected leader and guiding the community’s overall direction.",
    level: "top",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    initials: "AA",
    name: "Ahmed Alrayah",
    role: "General Secretary",
    bio: "Acting as a key point of contact between the north and south and supporting the president’s work.",
    level: "secondary",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    initials: "AA",
    name: "Ahmed Alfakih",
    role: "Sports Secretary",
    bio: "Helping organize sports, youth activities, and community engagement opportunities.",
    level: "standard",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
  },
  {
    initials: "MB",
    name: "Mamoun Babikr",
    role: "Cultural Secretary",
    bio: "Supporting Sudani culture, heritage programs, and community identity initiatives.",
    level: "standard",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=900&q=80",
  },
  {
    initials: "MS",
    name: "Mohammed Salah",
    role: "Money Secretary",
    bio: "Helping manage the community’s financial responsibilities and operational support.",
    level: "standard",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    initials: "HI",
    name: "Hoda Idris",
    role: "Women’s Affairs",
    bio: "Supporting women’s engagement, community care, and family support initiatives.",
    level: "standard",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    initials: "HO",
    name: "Hiam Obaid",
    role: "Women’s Affairs",
    bio: "Helping build intentional support for women and community well-being across the society.",
    level: "standard",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
];

const topLeaders = leaders.filter((person) => person.level !== "standard");
const supportingLeaders = leaders.filter(
  (person) => person.level === "standard",
);

const Leadership = () => {
  return (
    <section className="leadership" aria-labelledby="leadership-title">
      <div className="leadership__container">
        <p className="leadership__eyebrow">Leadership</p>
        <h2 id="leadership-title">The hands behind our community.</h2>
        <p className="leadership__note">
          No suits here. Just neighbors volunteering for a two-year stint to
          keep things moving. Vote in our next election, or better yet,
          volunteer to run and take the wheel yourself!
        </p>

        <div className="leadership__top-grid">
          {topLeaders.map((person) => (
            <article
              key={person.name}
              className={`leadership__card leadership__card--${person.level}`}
            >
              <div className="leadership__photo" aria-label={person.name}>
                <img src={person.image} alt={person.name} />
              </div>
              <div className="leadership__body">
                <h3>{person.name}</h3>
                <p className="leadership__role">{person.role}</p>
                <p className="leadership__bio">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="leadership__grid">
          {supportingLeaders.map((person) => (
            <article
              key={person.name}
              className="leadership__card leadership__card--standard"
            >
              <div className="leadership__photo" aria-label={person.name}>
                <img src={person.image} alt={person.name} />
              </div>
              <div className="leadership__body">
                <h3>{person.name}</h3>
                <p className="leadership__role">{person.role}</p>
                <p className="leadership__bio">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
