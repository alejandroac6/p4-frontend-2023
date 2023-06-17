import useMagic from "../hook/useMagic";
import CardList from "../components/CardList";
const Mainpage = () => {
  const { cards, loading } = useMagic("");

  return (
    <>
      <div className="cards-distribution">
        {cards.length ? (
          <>
            {cards.map((card) => (
              <CardList key={card.id} card={card} />
            ))}
          </>
        ) : (
          <>
            <p className="spinner-text">Loading</p>
            <div className="spinner"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Mainpage;
