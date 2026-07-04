import "./Card.css";

export default function Card({ title, description, image }) {
  return (
    <div className="card">
      {image && <img className="card__image" src={image} alt={title} />}
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}
