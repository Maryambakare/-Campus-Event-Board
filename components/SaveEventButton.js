"use client";

import { useSavedEvents } from "../context/SavedEventsContext";
import styles from "./SaveEventButton.module.css";

export default function SaveEventButton({ eventId }) {
  const { isSaved, toggleSavedEvent } = useSavedEvents();
  const saved = isSaved(eventId);

  return (
    <button
      className={`${styles.button}${saved ? ` ${styles.saved}` : ""}`}
      type="button"
      aria-pressed={saved}
      onClick={() => toggleSavedEvent(eventId)}
    >
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M5 3.75h10v13L10 13.5l-5 3.25v-13Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
      {saved ? "Unsave Event" : "Save Event"}
    </button>
  );
}
