"use client";

import { useMemo, useState } from "react";
import EventCard from "./EventCard";

const categories = ["All", "Tech", "Sports", "Faith", "Social"];

export default function EventBrowser({ events }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return events.filter((event) => {
      const matchesCategory = category === "All" || event.category === category;
      const matchesTitle = event.title
        .toLocaleLowerCase()
        .includes(normalizedQuery);

      return matchesCategory && matchesTitle;
    });
  }, [category, events, query]);

  return (
    <>
      <div className="event-tools">
        <div className="category-filters" aria-label="Filter by category">
          {categories.map((option) => (
            <button
              className={`filter-button${category === option ? " is-active" : ""}`}
              key={option}
              type="button"
              aria-pressed={category === option}
              onClick={() => setCategory(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <label className="event-search">
          <svg
            className="search-icon"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="8.75"
              cy="8.75"
              r="5.75"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="m13 13 4 4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.6"
            />
          </svg>
          <span className="visually-hidden">Search events by title</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search events"
          />
          {query && (
            <button
              className="clear-search"
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </label>
      </div>

      <p className="results-summary" aria-live="polite">
        {filteredEvents.length === events.length
          ? `${events.length} events`
          : `${filteredEvents.length} of ${events.length} events`}
      </p>

      {filteredEvents.length > 0 ? (
        <div className="event-grid">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="event-empty-state" role="status">
          <span className="empty-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <circle
                cx="10.5"
                cy="10.5"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="m15.5 15.5 4 4M8 10.5h5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.6"
              />
            </svg>
          </span>
          <h3>No events found</h3>
          <p>Try a different title or choose another category.</p>
          <button
            className="reset-filters"
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Clear search and filters
          </button>
        </div>
      )}
    </>
  );
}
