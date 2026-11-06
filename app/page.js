import EventCard from "../components/EventCard";
import Navigation from "../components/Navigation";
import { events } from "../data";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="home-main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Campus life, closer
            </p>
            <h1 id="hero-title">
              Find your people.
              <br />
              <span>Find your next thing.</span>
            </h1>
            <p className="hero-description">
              From hands-on workshops to laid-back socials, there&apos;s always
              something happening just around the corner.
            </p>
            <a className="hero-action" href="#events">
              Explore what&apos;s on
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4 10h11m-4-4 4 4-4 4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
              </svg>
            </a>
          </div>
          <div className="hero-decoration" aria-hidden="true" />
        </section>

        <section
          className="events-section"
          id="events"
          aria-labelledby="events-title"
        >
          <div className="section-heading">
            <div>
              <p className="section-kicker">Make campus yours</p>
              <h2 id="events-title">Coming up on campus</h2>
            </div>
            <span className="event-count">{events.length} events</span>
          </div>
          <div className="event-grid">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <p>Campus Loop</p>
          <p>Good things happen when you show up.</p>
        </div>
      </footer>
    </>
  );
}
