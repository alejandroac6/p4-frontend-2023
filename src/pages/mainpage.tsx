import useMagic from "../hook/useMagic";

const Mainpage = () => {
  const { cards, loading } = useMagic();
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Card List</h1>
      {cards.map((card) => (
        <div key={card.id}>
          <h3>{card.name}</h3>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Mainpage;
