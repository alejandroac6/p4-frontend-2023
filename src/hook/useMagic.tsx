import React, { useState, useEffect } from "react";
import axios from "axios";

const useMagic = ({id="",type="",color=""}) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          `https://api.magicthegathering.io/v1/cards/${id}`
        );
        if (id) {
          const filteredCards = response.data.card;
          const array =[]
          array.push(filteredCards)
          setCards(array)
        } else {
          console.log(`https://api.magicthegathering.io/v1/cards?supertypes=${type}&colors=${color}`)

          const generalResponse=await axios.get(
            `https://api.magicthegathering.io/v1/cards?supertypes=${type}&colors=${color}`
          )
          const filteredCards = generalResponse.data.cards.filter(
            (card) => card.imageUrl
          );

          console.log(filteredCards)
          setCards(filteredCards);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [color]);

  return { cards, loading };
};

export default useMagic;
