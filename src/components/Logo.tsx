import { useState } from "react";
const Logo = ({ imageUrl }) => {
  const [isSelected, setIsSelected] = useState(false);

  const imageStyle = {
    border: isSelected ? "0.2rem solid white" : "0.2rem solid black",
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div onClick={handleClick}>
      <img
        className="mana"
        src={imageUrl}
        alt="ManaLogo"
        style={imageStyle}
      />
    </div>
  );
};

export default Logo;
