"use client";

import Link from "next/link";
import { events } from "../data";
import { useSavedEvents } from "../context/SavedEventsContext";
import EventCard from "./EventCard";

export default function SavedEventsList() {
  const { savedEventIds } = useSavedEvents();
  const savedEvents = savedEventIds
    .map((id) => events.find((event) => event.id === id))
    .filter(Boolean);

  if (savedEvents.length === 0) {
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
        <h3>No saved events yet</h3>
        <p>Save an event that interests you and it will appear here.</p>
        <Link className="reset-filters" href="/">
          Explore campus events
        </Link>
      </div>
    );
  }

  return (
    <>
      <p className="results-summary" aria-live="polite">
        {savedEvents.length} saved {savedEvents.length === 1 ? "event" : "events"}
      </p>
      <div className="event-grid">
        {savedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  );
}
