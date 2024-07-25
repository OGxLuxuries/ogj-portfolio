import mypic from "./../Images/headshot.jpg";

function Hero() {
    return ( 

        <header>
            <div className="flex-row"> 
            <hgroup>
                <h1 id="my-name">  Oliver  Gomes  Jr.</h1>
                <p>Welcome to my collection of work.</p>
            </hgroup>
            <img src={mypic} alt="oliver" id="oliver" />
            </div>
          
        </header>

     );
}

export default Hero;