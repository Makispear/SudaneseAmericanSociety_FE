import "./Leadership.css";

const leaders = [
  {
    initials: "AH",
    name: "Abdalnassir",
    role: "President",
    bio: "Leading the vision, strategy, and community direction."
  },
  {
    initials: "MI",
    name: "Musa Idris",
    role: "Vice President",
    bio: "Helping guide programs, partnerships, and member engagement."
  },
  {
    initials: "NA",
    name: "Nadia Ali",
    role: "Treasurer",
    bio: "Overseeing financial stewardship and long-term planning."
  },
  {
    initials: "YK",
    name: "Yasir Khalid",
    role: "Secretary",
    bio: "Supporting communication, records, and community coordination."
  }
];

const Leadership = () => {
  return (
    <section className="leadership" aria-labelledby="leadership-title">
      <div className="leadership__container">
        <p className="leadership__eyebrow">Leadership</p>
        <h2 id="leadership-title">The people guiding our community.</h2>
        <p className="leadership__note">Community-elected leadership serving two-year terms.</p>

        <div className="leadership__grid">
          {leaders.map((person) => (
            <article key={person.name} className="leadership__card">
              <div className="leadership__avatar" aria-label={person.name}>
                {person.initials}
              </div>
              <h3>{person.name}</h3>
              <p className="leadership__role">{person.role}</p>
              <p className="leadership__bio">{person.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
