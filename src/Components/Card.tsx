import "../CSS/Card.css";


interface CardProps {
  link: string;
  thumbnail: string;
  title: string;
  description: string;
}

function Card({
  link,
  thumbnail,
  title,
  description,
}: CardProps) {
  return (
    <>
      <div className="card">
        <a href={link}>
          <img
            className="card-image"
            src={thumbnail}
            alt="site-thumbnail"
          />
        </a>
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        
      </div>
    </>
  );
}

export default Card;
