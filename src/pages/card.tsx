import useMagic from '../hook/useMagic';
import { useParams } from 'react-router-dom';
import SingleCard from '../components/SingleCard';

const Card = () => {
  // pagina de la carta detallada, si la carta no esta cargada lanza el loading, si esta cargada muesta el componente carta detallada
  const params = useParams()
  const { cards, loading } = useMagic({id:params.id});


  return (
    <>
      {cards.length ? (
          <div>

            {cards.map(card=>(
              <SingleCard key={card.id} card={card} />
            ))}

          </div>
        ):(
          <>
          <p className="spinner-text">Loading</p>
          <div className="spinner"></div>
        </>
        )
      }
    </>
  );
};

export default Card;
