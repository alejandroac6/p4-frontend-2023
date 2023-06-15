const CardList = ({ card }) => {
  const { imageUrl, name, manaCost, originalType, text } = card;

  return (
    <>
      <div>
        <img src={imageUrl} alt="Imagen" />

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
