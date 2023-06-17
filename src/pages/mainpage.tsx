import useMagic from "../hook/useMagic";
import CardList from "../components/CardList";
const Mainpage = () => {
  const { cards, loading } = useMagic('');

  return (
    <>
      {cards.length ? (
        <>
          {cards.map((card) => (
            <CardList key={card.id} card={card} />
          ))}
        </>
      ) : (
        <>
          <p className="spinner-text">Cargando</p>
          <div className="spinner"></div>
        </>
      )}
    </>
  );
};

export default Mainpage;
