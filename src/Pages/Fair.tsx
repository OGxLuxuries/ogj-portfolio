import { useEffect } from "react";
import PDFDownload from "../Components/PDF";
import GitHubLink from "../Components/Github";
import ImageSlider from "../Components/ImageSlider";
import LinkedInCard from "./Linkedin";

function Fair() {
    useEffect(() => {
        document.title = 'Demo Page';
      }, []);

    const images = [
      'frat-fogo.png',
      'sip-scout.png',
      'og-customs.png',
      '4q-1.png',
      '4q-2.png'



    ]
    return ( 
        <>
            
                    <h1
            style={{
                backgroundColor: 'white',  // Set background color to white
                borderRadius: '15px',      // Set rounded corners
                padding: '20px',           // Add padding
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Optional shadow
                textAlign: 'center',       // Center align text
                margin: '20px auto',       // Center the heading with margin
                maxWidth: '80%'            // Optional: Limit the width
            }}
            >
            Hello Employers!
            </h1>
            <LinkedInCard 
                  profileUrl={"https://www.linkedin.com/in/olivergomesjr/"} 
                  headshotUrl={"headshot.jpg"} 
                  name={"Oliver Gomes Jr."} 
                />
              <PDFDownload/>
              <GitHubLink url={"https://github.com/OGxLuxuries/ogj-portfolio/"} title={"OGJ Portfolio"}/>
              <GitHubLink url={"https://github.com/OGxLuxuries/UnixTutorialsRepo"} title={"Unix Tutorials Team Project"}/>
              <GitHubLink url={"https://github.com/csl5623/SipScout.github.io"} title={"Hackathon Entry"} />
              <ImageSlider images={images} interval={2250} />
              
        </>
     );
}

export default Fair;