import Hero from "../Components/Hero";
import Card from "../Components/Card";
import projects from "../JSON/projects.json";
import html_logo from "../images/html-logo.png";
import css_logo from "../images/css3-logo.svg";
import ts_logo from "../images/ts-logo.png";
import js_logo from "../images/js-logo.png";
import react_logo from "../images/react-logo.png";
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
            <h2>Made With:</h2>
          </div>

          <div className="web-technologies flex-row">
            <img src={html_logo} alt="html" />
            <img src={css_logo} alt="css" />
            <img src={js_logo} alt="javascript" />
            <img src={ts_logo} alt="typescript" />
            <img src={react_logo} alt="react" />
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
