import React, { useState, useEffect } from "react";
import axios from "axios";

const useMagic = ({id="",type="",color=""}) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.magicthegathering.io/v1/cards/${id}`
        );
        if (id) {
          const filteredCards = response.data.card;
          const array =[]
          array.push(filteredCards)
          setCards(array)
        } else {
          const generalResponse=await axios.get(
            `https://api.magicthegathering.io/v1/cards?supertypes=${type}&colors=${color}`
          )
          const filteredCards = response.data.cards.filter(
            (card) => card.imageUrl
          );
          setCards(filteredCards);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { cards, loading };
};

export default useMagic;
