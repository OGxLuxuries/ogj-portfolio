import Hero from "../Components/Hero";
import Card from "../Components/Card";
import projects from "../JSON/projects.json";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <main className="main-content">
        <Hero />
        <div className="heading-wrapper rounded">
          <div className="subheading rounded">
            <h1 className="heading rounded">Websites</h1>
          </div>

          
        </div>

        {projects.map((project, index) => (
          <Card
            key={index}
            link={project.link}
            thumbnail={project.thumbnail}
            title={project.title}
            description={project.description}
            
          />
        ))}
      </main>
    </>
  );
}

export default Home;
