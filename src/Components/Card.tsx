import "../CSS/Card.css"


interface Technology {
    imgSrc: string;
    name: string;
}

interface CardProps {
    link: string;
    thumbnail: string;
    title: string;
    description: string;
    technologies: Technology[];
}

function Card({ link, thumbnail, title, description, technologies }: CardProps) {
    

    return ( 
        <>
        <div className="card">
            <a href={link}><img className="card-image" src={thumbnail} alt="thumbnail" height="100" width="100" /></a>
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{description}</p>
            <ul className="card-technologies">
                {technologies.map((tech, index) => (
                    <li key={index}>
                        <img src={tech.imgSrc} alt={tech.name} height="50" width="50" />
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default Card;
