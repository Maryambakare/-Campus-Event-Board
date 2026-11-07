import "./globals.css";
import { SavedEventsProvider } from "../context/SavedEventsContext";

export const metadata = {
  title: "Campus Loop | Find your next campus moment",
  description:
    "Discover workshops, sports, socials, and more happening around campus.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SavedEventsProvider>{children}</SavedEventsProvider>
      </body>
    </html>
  );
}
