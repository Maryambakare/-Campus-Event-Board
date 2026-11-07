# Campus Event Board

Campus Event Board is a responsive web application designed to help students discover, explore, and keep track of campus events.

Students can browse upcoming events, search by title, filter by category, view event details, and save events they are interested in.

## Features

- **Event Listings:** Browse campus events displayed in responsive cards.
- **Search:** Find events by title.
- **Category Filtering:** Filter events by Tech, Sports, Faith, and Social.
- **Date Sorting:** View events in chronological order.
- **Event Details:** View individual event information, including date, time, venue, description, and image.
- **Save Events:** Bookmark events and manage saved and unsaved event lists.
- **Countdown Timer:** See how much time remains before an event starts.
- **Category Badges:** Easily identify event categories using distinct colours.
- **Responsive Design:** Optimized for desktop and mobile screens.
- **Image Fallback:** Displays a fallback image if an event image fails to load.

## Technologies Used

- Next.js 16 (App Router)
- React 19
- JavaScript
- CSS and CSS Modules, with Tailwind CSS 4 in the CSS toolchain
- Node.js and npm

## Getting Started

Make sure Node.js and npm are installed. Replace the repository URL placeholder below with the HTTPS or SSH clone URL for your GitHub repository.

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL> campus-event-board
```

### 2. Navigate into the project folder

```bash
cd campus-event-board
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit:

```text
http://localhost:3000
```

## Project Structure

```text
campus-event-board/
├── app/
│   ├── events/
│   │   └── [id]/page.js
│   ├── my-events/page.js
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── CategoryBadge.js
│   ├── EventBrowser.js
│   ├── EventCard.js
│   ├── EventCountdown.js
│   ├── EventCountdown.module.css
│   ├── EventImage.js
│   ├── MyEventsLists.js
│   ├── MyEventsLists.css
│   ├── Navigation.js
│   ├── SaveEventButton.js
│   └── SaveEventButton.module.css
├── context/
│   └── SavedEventsContext.js
├── lib/
│   └── eventCountdown.mjs
├── public/
│   ├── events/             # Eight event photographs
│   ├── event-image-fallback.svg
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── data.js
├── .gitignore
├── AGENTS.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
└── README.md
```

## Purpose

The project demonstrates practical frontend development skills, including component-based architecture, React state management, dynamic routing, data filtering, responsive styling, and interactive user interfaces.

## Future Improvements

- Persist saved events after refreshing the browser.
- Add event registration functionality.
- Introduce event creation and management for administrators.

---

**Campus Event Board** — Making it easier for students to discover and keep track of campus events.