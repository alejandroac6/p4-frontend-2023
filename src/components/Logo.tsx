import { useState } from "react";
const Logo = ({ imageUrl }) => {
    // componente que dada una imagen crea un logo que al dar click cambia el color del borde externo
  const [isSelected, setIsSelected] = useState(false);

  const imageStyle = {
    border: isSelected ? "0.2rem solid white" : "0.2rem solid black",
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div onClick={handleClick}>
      <img className="mana" src={imageUrl} alt="ManaLogo" style={imageStyle} />
    </div>
  );
};

export default Logo;
