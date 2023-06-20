import { Link } from "react-router-dom";

const CardList = ({ card }) => {
  // carta dentro de la lista de cartas buscadas, tiene un link que va a parar a el detalle de la carta
  const { imageUrl, name, manaCost, originalType, text, id } = card;

  return (
    <>
      <div>
        <Link to={`/card/${id}`}>
          <img src={imageUrl} alt="Imagen" className="cardList" />
        </Link>
      </div>
    </>
  );
};

export default CardList;
