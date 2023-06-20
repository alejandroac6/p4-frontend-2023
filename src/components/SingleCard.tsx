import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
  // componente que renderiza la carta con la informacion detallada
  const { imageUrl, name, manaCost, originalType,rarity, text, id,power,toughness } = card;
  console.log({ card });

  return (
    <>
      <div className="Single-card-container">
        <div>
          <Link to={`/card/${id}`}>
            <img src={imageUrl} alt="Imagen" />
          </Link>
        </div>

        <div className="Card-description">
          <p><span>Name: </span>{name}</p>
          <p><span>Mana Cost:</span>{manaCost}</p>
          <p><span>Type: </span>{originalType}</p>
          <p><span>Rarity: </span>{rarity}</p>
          <p><span>Description: </span>{text}</p>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
