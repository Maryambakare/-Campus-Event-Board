import Image from "next/image";
import Link from "next/link";
import SaveEventButton from "./SaveEventButton";

const dateFormatter = new Intl.DateTimeFormat("en", {
  weekday: "short",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export default function EventCard({ event }) {
  const date = dateFormatter.format(new Date(`${event.date}T12:00:00Z`));

  return (
    <article className="event-card">
      <Link
        className="event-image-wrap"
        href={`/events/${event.id}`}
        aria-label={`View ${event.title}`}
      >
        <Image
          className="event-image"
          src={event.image}
          alt=""
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          unoptimized
        />
        <span className="category-badge">{event.category}</span>
      </Link>
      <div className="event-card-content">
        <p className="event-date">
          <time dateTime={`${event.date}T${event.time}`}>{date}</time>
          <span aria-hidden="true"> · </span>
          <time dateTime={`${event.date}T${event.time}`}>{event.time}</time>
        </p>
        <h3>
          <Link href={`/events/${event.id}`}>{event.title}</Link>
        </h3>
        <p className="event-description">{event.description}</p>
        <div className="event-card-footer">
          <span className="event-venue" title={event.venue}>
            {event.venue}
          </span>
          <SaveEventButton eventId={event.id} />
          <Link className="event-link" href={`/events/${event.id}`}>
            Details
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
      </div>
    </article>
  );
}
