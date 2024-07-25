import Hero from "../Components/Hero";
import Card from "../Components/Card";
import projects from "../JSON/projects.json";

function Home() {



  return (
    <>
      <main className="main-content">
        <Hero />

        <section className="grid-container">
          <section className="cards border">
            <h2>Websites</h2>
            {projects.map((project, index) => (
              <Card
                key={index}
                link={project.link}
                thumbnail={project.thumbnail}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
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
