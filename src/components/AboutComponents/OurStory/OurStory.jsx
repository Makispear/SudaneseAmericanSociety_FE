import { useState } from "react";
import "./OurStory.css"

export default function OurStory() {
  const [expandedMobile, setExpandedMobile] = useState(false);

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
          
          <div className={`story__note ${expandedMobile ? "story__note--expanded" : ""}`}>
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

          <button
            type="button"
            className="story__mobile-toggle"
            onClick={() => setExpandedMobile(!expandedMobile)}
          >
            {expandedMobile ? "Show Less" : "Read Timeline"}
          </button>
        </div>
      </div>
    </section>
  );
}