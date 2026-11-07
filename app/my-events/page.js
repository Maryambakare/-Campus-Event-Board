import Navigation from "../../components/Navigation";
import MyEventsLists from "../../components/MyEventsLists";

export const metadata = {
  title: "My Events | Campus Loop",
};

export default function MyEvents() {
  return (
    <>
      <Navigation />
      <main className="home-main">
        <section className="events-section" aria-labelledby="saved-events-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Your campus shortlist</p>
              <h1 id="saved-events-title">My Events</h1>
            </div>
          </div>
          <MyEventsLists />
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <p>Campus Loop</p>
          <p>Good things happen when you show up.</p>
        </div>
      </footer>
    </>
  );
}
