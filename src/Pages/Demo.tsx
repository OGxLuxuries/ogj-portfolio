import React, { useEffect } from "react";
import Card from "../Components/Card";

function Demo() {
    useEffect(() => {
        document.title = 'Demo Page';
      }, []);
    return ( 
        <>
            
            <h1>Demos</h1>
            <Card
                key={1}
                link={"https://www.google.com"}
                thumbnail={"/src/Images/starting-line-ai.jpg"}
                title={"Astronaut"}
                description={"exploring space"}
                technologies={[
                    { "imgSrc": "path/to/tech3.png", "name": "Technology 3" },
                    { "imgSrc": "path/to/tech4.png", "name": "Technology 4" }
                ]}
              />
        </>
     );
}

export default Demo;