import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CSS/UnderConstruction.css'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { useState } from 'react';


function UnderConstruction() {


    //@ts-expect-error icon prop is not working
    const myIcon : IconProp = "fa-solid fa-helmet-safety"
    //@ts-expect-error icon prop is not working
    const iconCog : IconProp = "fa-solid fa-cog"

    const [cogSpeed, setCogSpeed] = useState('cog-slow');
    

    const accelerate = () => {
        if (cogSpeed === 'cog-slow') {
            // Change to accelerated 
            setCogSpeed('cog-accelerated');
            
        } else {
            // Revert back to original
            setCogSpeed('cog-slow');
            
        }
    };
    
    return (<>
        <main className="main-content under-construction">
        <h1><FontAwesomeIcon icon={myIcon}   />Website Under Development</h1>
        <div className='cogs'>        
        <FontAwesomeIcon className={cogSpeed}  icon={iconCog} size="6x" spin spinReverse/>
        <FontAwesomeIcon className={cogSpeed}  icon={iconCog} size="3x" spin />
        

        </div>
        <button onClick={accelerate}>Click Here to Speed Up Process</button>
        
            
            <h2>
                <em>Hey there! I'm Oliver, a passionate IT student, and
                    my portfolio is getting some exciting updates.
                </em>
            </h2>
            <p>Currently coding my next big project...
                New features loading... 80% complete! Real-time debugging in progress...
                but the magic is almost ready!
                <br />
                Stay tuned something awesome is coming soon!
                <br />
                In the meantime, feel free to connect with me on LinkedIn or check out my GitHub for a sneak peek into what I'm working on!
            </p>
        </main>

    </>);
}

export default UnderConstruction;