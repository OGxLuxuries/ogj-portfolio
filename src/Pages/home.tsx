import mypic from "./../images/";

function Home() {
  return (
    <>
      <main className="main-content">
        <header>
          <img src={mypic} alt="oliver" />
          <hgroup>
            <h1 id="my-name">Oliver Gomes Jr.</h1>
            <p>Welcome to my collection of work.</p>
          </hgroup>
        </header>

        <section className="grid-container">
          <section className="intro">
            <h2>My Career</h2>
            <p>
              I am a second year studying{" "}
              <span>Computing and Information Technologies</span>. I also work
              part-time at RIT's Corner Store as a student manager.
            </p>
            <p>I have interests in:</p>
            <ul>
              <li>Data Analytics</li>
              <li>Artificial Intelligence</li>
              <li>Web Development</li>
            </ul>
          </section>
          <section className="contact">
            <h2>Contact</h2>
            <p>
              Email: <a href="mailto:odg1896@rit.edu">odg1896@rit.edu</a>
            </p>
            <p>Discord: ogluxuries</p>

            <div className="contact-buttons">
              <form
                action="https://www.linkedin.com/in/oliver-gomes-jr/"
                method="get"
                target="_blank"
              >
                <button id="linkedin" type="submit">
                  LinkedIn
                </button>
              </form>
            </div>
          </section>

          <section className="personal">
            <h2>Personal Life</h2>
            <h3>Where am I from?</h3>
            <p>
              Waterbury, Connecticut, a.k.a. <em>The Brass City</em>
            </p>
            <h3>Sports</h3>
            <p>I play golf.</p>
          </section>
        </section>
      </main>
    </>
  );
}

export default Home;
