import {Link} from 'react-router-dom'


const CardList = ({ card }) => {
  const { imageUrl, name, manaCost, originalType, text, id } = card;

  return (
    <>
      <div>
        <Link to={`/card/${id}`}>
            <img src={imageUrl} alt="Imagen" />        
        </Link>
      </div>
    </>
  );
};

export default CardList;
