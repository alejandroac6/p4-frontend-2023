import useMagic from '../hook/useMagic';
import { useParams } from 'react-router-dom';
import SingleCard from '../components/SingleCard';

const Card = () => {
  const params = useParams()
  const { cards, loading } = useMagic(params.id);


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
          <h2> Cargando </h2>
        </>
        )
      }
    </>
  );
};

export default Card;
