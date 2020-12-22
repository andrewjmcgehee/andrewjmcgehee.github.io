import "./Card.css";

const Card = ({text}) => {
  return (
    <div className="card">
      {text}
    </div>
  );
};

export default Card;