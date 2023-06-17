import useMagic from '../hook/useMagic';
import { useParams } from 'react-router-dom';
import SingleCard from '../components/SingleCard';

const Card = () => {
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
