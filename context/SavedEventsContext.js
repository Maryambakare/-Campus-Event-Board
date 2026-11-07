"use client";

import { createContext, useContext, useMemo, useState } from "react";

const SavedEventsContext = createContext(null);

export function SavedEventsProvider({ children }) {
  const [savedEventIds, setSavedEventIds] = useState([]);

  const value = useMemo(
    () => ({
      savedEventIds,
      isSaved: (eventId) => savedEventIds.includes(eventId),
      toggleSavedEvent: (eventId) => {
        setSavedEventIds((currentIds) =>
          currentIds.includes(eventId)
            ? currentIds.filter((id) => id !== eventId)
            : [...currentIds, eventId],
        );
      },
    }),
    [savedEventIds],
  );

  return (
    <SavedEventsContext.Provider value={value}>
      {children}
    </SavedEventsContext.Provider>
  );
}

export function useSavedEvents() {
  const context = useContext(SavedEventsContext);
  if (context === null) {
    throw new Error("useSavedEvents must be used within SavedEventsProvider.");
  }
  return context;
}
