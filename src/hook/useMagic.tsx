import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useMagic = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.magicthegathering.io/v1/cards');
        const filteredCards = response.data.cards.filter(card => card.imageUrl);
        setCards(filteredCards);
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

export default useMagic