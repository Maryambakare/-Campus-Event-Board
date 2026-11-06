import Link from "next/link";

export default function Navigation() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Campus Loop home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4.5 10.1 12 4l7.5 6.1v8.4a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5v-8.4Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
              <path
                d="M9 20v-6h6v6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </span>
          <span>Campus Loop</span>
        </Link>
        <div className="nav-links">
          <Link className="nav-link" href="/" aria-current="page">
            Explore
          </Link>
          <Link className="nav-link nav-link-cta" href="/my-events">
            My events
          </Link>
        </div>
      </nav>
    </header>
  );
}
