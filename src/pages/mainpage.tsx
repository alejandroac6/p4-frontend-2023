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
          <h2> No hay cartas </h2>
        </>
      )}
    </>
  );
};

export default Mainpage;
