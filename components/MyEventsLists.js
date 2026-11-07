"use client";

import Link from "next/link";
import { events } from "../data";
import { useSavedEvents } from "../context/SavedEventsContext";
import EventCard from "./EventCard";
import "./MyEventsLists.css";

function EmptyState({ title, description, href, linkLabel }) {
  return (
    <div className="event-empty-state" role="status">
      <span className="empty-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M6 4.5h12v16l-6-4-6 4v-16Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="reset-filters" href={href}>
        {linkLabel}
      </Link>
    </div>
  );
}

export default function MyEventsLists() {
  const { savedEventIds } = useSavedEvents();
  const savedEvents = events.filter((event) => savedEventIds.includes(event.id));
  const unsavedEvents = events.filter((event) => !savedEventIds.includes(event.id));

  const formatEventCount = (count) =>
    `${count} ${count === 1 ? "event" : "events"}`;

  return (
    <>
      <nav
        className="my-events-section-navigation"
        aria-label="My event lists"
      >
        <a className="my-events-section-link" href="#saved-events">
          Saved Events
          <span className="my-events-navigation-count">{savedEvents.length}</span>
        </a>
        <a className="my-events-section-link" href="#unsaved-events">
          Unsaved Events
          <span className="my-events-navigation-count">{unsavedEvents.length}</span>
        </a>
      </nav>

      <section
        className="my-events-section"
        id="saved-events"
        aria-labelledby="saved-events-heading"
      >
        <div className="my-events-section-heading">
          <h2 id="saved-events-heading">Saved Events</h2>
          <span className="my-events-section-count">
            {formatEventCount(savedEvents.length)}
          </span>
        </div>
        {savedEvents.length > 0 ? (
          <div className="event-grid">
            {savedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No saved events yet"
            description="Save an event that interests you and it will appear here."
            href="/#events"
            linkLabel="Explore campus events"
          />
        )}
      </section>

      <section
        className="my-events-section"
        id="unsaved-events"
        aria-labelledby="unsaved-events-heading"
      >
        <div className="my-events-section-heading">
          <h2 id="unsaved-events-heading">Unsaved Events</h2>
          <span className="my-events-section-count">
            {formatEventCount(unsavedEvents.length)}
          </span>
        </div>
        {unsavedEvents.length > 0 ? (
          <div className="event-grid">
            {unsavedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="You’re all caught up"
            description="You’ve saved every available campus event."
            href="#saved-events"
            linkLabel="View saved events"
          />
        )}
      </section>
    </>
  );
}
