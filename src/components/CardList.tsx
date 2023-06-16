import {Link} from 'react-router-dom'

const CardList = ({ card }) => {
  const { imageUrl, name, manaCost, originalType, text, id } = card;

  return (
    <>
      <div>
        <Link to={`/card/${id}`}>
            <img src={imageUrl} alt="Imagen" />        
        </Link>
        

        <div>
          <p>{name}</p>
          <p>{manaCost}</p>
          <p>{originalType}</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default CardList;
