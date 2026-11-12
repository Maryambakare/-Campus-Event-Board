import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryBadge from "../../../components/CategoryBadge";
import EventCountdown from "../../../components/EventCountdown";
import EventImage from "../../../components/EventImage";
import Navigation from "../../../components/Navigation";
import SaveEventButton from "../../../components/SaveEventButton";
import { events } from "../../../data";

const dateFormatter = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}

export default async function EventDetails({ params }) {
  const { id } = await params;
  const event = events.find((item) => item.id === id);

  if (!event) {
    notFound();
  }

  const date = dateFormatter.format(new Date(`${event.date}T12:00:00Z`));

  return (
    <>
      <Navigation />
      <main className="detail-main">
        <Link className="detail-back-link" href="/">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M16 10H5m4 4-4-4 4-4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
          </svg>
          All campus events
        </Link>

        <article className="detail-card">
          <div className="detail-image-wrap">
            <EventImage
              className="detail-image"
              src={event.image}
              alt={`${event.title} event`}
              fill
              sizes="(max-width: 760px) 100vw, 1180px"
              priority
            />
            <CategoryBadge category={event.category} />
          </div>

          <div className="detail-content">
            <div className="detail-heading">
              <p className="section-kicker">Campus event</p>
              <h1>{event.title}</h1>
              <p className="detail-description">{event.description}</p>
            </div>

            <div className="detail-information">
              <section className="detail-info-item">
                <span className="detail-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <rect
                      x="3.25"
                      y="4.25"
                      width="13.5"
                      height="12.5"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6.5 2.75v3m7-3v3M3.5 8h13"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <div>
                  <h2>Date and time</h2>
                  <p>
                    <time dateTime={`${event.date}T${event.time}`}>
                      {date}
                    </time>
                    <br />
                    <time dateTime={`${event.date}T${event.time}`}>
                      {event.time}
                    </time>
                  </p>
                </div>
              </section>

              <section className="detail-info-item">
                <span className="detail-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d="M16.25 8.25c0 4.5-6.25 9-6.25 9s-6.25-4.5-6.25-9a6.25 6.25 0 1 1 12.5 0Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="10"
                      cy="8"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <div>
                  <h2>Location</h2>
                  <p>{event.venue}</p>
                </div>
              </section>
            </div>

            <EventCountdown event={event} />
            <SaveEventButton eventId={event.id} detail />
            <Link className="detail-action" href="/">
              Explore more events
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4 10h11m-4-4 4 4-4 4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
              </svg>
            </Link>
          </div>
        </article>
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
