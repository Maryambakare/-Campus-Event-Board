import "./globals.css";

export const metadata = {
  title: "Campus Loop | Find your next campus moment",
  description:
    "Discover workshops, sports, socials, and more happening around campus.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
