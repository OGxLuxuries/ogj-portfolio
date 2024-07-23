import mypic from "./../Images/headshot.jpg";
import Card from "../Components/Card";
import cardData from "../JSON/card_data.json"
function Home() {

  const johnDoeCard = cardData.find(card => card.title === "A.I. Research");

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
          <section className="cards border">
            <h2>Websites</h2>
          {johnDoeCard && (
                <>
                    <Card
                        link={johnDoeCard.link}
                        thumbnail={johnDoeCard.thumbnail}
                        title={johnDoeCard.title}
                        description={johnDoeCard.description}
                        technologies={johnDoeCard.technologies}
                    />
                    
                </>
            )}
          </section>
          <section className="recruiting border">
            <h2>For Recruiters</h2>
            <p>Resume download</p>
            <button className="linkedin-button">LinkedIn Profile</button>
          </section>
          <section className="business border">
            <h2>For Business Inquiries</h2>
            <p>Google Form</p>
          </section>

          
        </section>
      </main>
    </>
  );
}

export default Home;
