import useMagic from "../hook/useMagic";
import CardList from "../components/CardList";
import { useState } from "react";
import Logo from "../components/Logo";

const Mainpage = () => {
  const { cards, loading } = useMagic({});
  const[color,setColor]=useState('');
  const[type,setType]=useState('');
  const [isSelected, setIsSelected] = useState(false);

  const imageStyle={
    border: isSelected ? '0.2rem solid white':'0.2rem solid black'
  }

  const handleClick=()=>{
    setIsSelected(!isSelected);
  }


  return (
    <>
      <div className="logo-container">
        <Logo imageUrl={"https://img2.freepng.es/20180615/tgi/kisspng-magic-the-gathering-magic-points-playing-card-car-werewolf-symbol-5b242521549546.0886581015290954573465.jpg"}/>
        <Logo imageUrl={"https://img2.freepng.es/20180524/rgi/kisspng-magic-the-gathering-pro-tour-magic-points-wizards-gather-5b071a0f25d843.717925511527192079155.jpg"}/>
        <Logo imageUrl={"https://img2.freepng.es/20180422/cbe/kisspng-magic-the-gathering-mana-magic-points-symbol-play-5adcb4cd8ccae6.3447432815244136455767.jpg"}/>
        <Logo imageUrl={"https://img2.freepng.es/20180417/how/kisspng-magic-the-gathering-pro-tour-magic-points-mana-pl-creature-5ad637b61ccf96.442804691523988406118.jpg"}/>
        <Logo imageUrl={"https://e7.pngegg.com/pngimages/891/659/png-clipart-magic-the-gathering-magic-points-mana-playing-card-heroes-of-might-and-magic-ii-others-game-logo.png"}/>
      </div>

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
