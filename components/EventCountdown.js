"use client";

import { useEffect, useState } from "react";
import { getEventCountdown } from "../lib/eventCountdown.mjs";
import styles from "./EventCountdown.module.css";

function formatUnit(value, unit) {
  return `${value} ${unit}${value === 1 ? "" : "s"}`;
}

function unitLabel(value, unit) {
  return value === 1 ? unit : `${unit}s`;
}

export default function EventCountdown({ event }) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const initialUpdateId = window.setTimeout(() => setNow(Date.now()), 0);
    const intervalId = window.setInterval(() => setNow(Date.now()), 60_000);

    return () => {
      window.clearTimeout(initialUpdateId);
      window.clearInterval(intervalId);
    };
  }, []);

  const countdown =
    now === null ? null : getEventCountdown(event, new Date(now));

  return (
    <section className={styles.countdown} aria-label="Event countdown">
      <div className={styles.clockIcon} aria-hidden="true">
        <svg viewBox="0 0 20 20" fill="none">
          <circle
            cx="10"
            cy="10"
            r="7.25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10 5.75v4.5l3 1.75"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Event countdown</h2>
        {countdown === null ? (
          <p className={styles.message}>Calculating time until this event…</p>
        ) : countdown.status === "invalid" ? (
          <p className={styles.message}>Countdown unavailable</p>
        ) : countdown.status === "started" ? (
          <p className={styles.message}>This event has started.</p>
        ) : countdown.status === "passed" ? (
          <p className={styles.message}>This event has passed.</p>
        ) : (
          <div
            className={styles.units}
            role="timer"
            aria-label={`Starts in ${formatUnit(countdown.days, "day")} ${formatUnit(countdown.hours, "hour")} ${formatUnit(countdown.minutes, "minute")}`}
          >
            <span className={styles.prefix}>Starts in</span>
            <span className={styles.unit}>
              <strong>{countdown.days}</strong>
              <span>{unitLabel(countdown.days, "day")}</span>
            </span>
            <span className={styles.unit}>
              <strong>{countdown.hours}</strong>
              <span>{unitLabel(countdown.hours, "hour")}</span>
            </span>
            <span className={styles.unit}>
              <strong>{countdown.minutes}</strong>
              <span>{unitLabel(countdown.minutes, "minute")}</span>
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
