import { useEffect } from "react";
import Card from "../Components/Card";
import PDFDownload from "../Components/PDF";
import GitHubLink from "../Components/Github";
import ImageSlider from "../Components/ImageSlider";
import LinkedInCard from "./Linkedin";

function Demo() {
    useEffect(() => {
        document.title = 'Demo Page';
      }, []);

    const images = [
      '../../public/frat-fogo.png',
      '../../public/sip-scout.png',
      '../../public/og-customs.png',
      '../../4q-1.png',
      '../../4q-2.png'



    ]
    return ( 
        <>
            
            <h1>Demos</h1>
            <Card
                key={1}
                link={"https://www.google.com"}
                thumbnail={"/src/Images/starting-line-ai.jpg"}
                title={"Astronaut"}
                description={"exploring space"}
                // technologies={[
                //     { "imgSrc": "path/to/tech3.png", "name": "Technology 3" },
                //     { "imgSrc": "path/to/tech4.png", "name": "Technology 4" }
                // ]}
              />
              <PDFDownload/>
              <GitHubLink url={"https://github.com/OGxLuxuries/ogj-portfolio/"} title={"OGJ Portfolio"}/>
              <GitHubLink url={"https://github.com/OGxLuxuries/UnixTutorialsRepo"} title={"Unix Tutorials Team Project"}/>
              <GitHubLink url={"https://github.com/csl5623/SipScout.github.io"} title={"Hackathon Entry"} />
              <ImageSlider images={images} interval={2250} />
              <LinkedInCard 
                  profileUrl={"https://www.linkedin.com/in/olivergomesjr/"} 
                  headshotUrl={"../../public/headshot.jpg"} 
                  name={"Oliver Gomes Jr."} 
                />
        </>
     );
}

export default Demo;