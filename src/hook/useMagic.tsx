import React, { useState, useEffect } from "react";
import axios from "axios";

const useMagic = ({ id = "", type = "", color = "" }) => {
  // hook destinado a consultar a la API, el llamado se actualiza cada vez que cambia el estado de color de los componentes del main layout
  // retorna una lista de objetos (cartas) y  si esta cargando o no
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (id) {
          // si le pasamos un id la peticion axios cambia
          const response = await axios.get(
            `https://api.magicthegathering.io/v1/cards/${id}`
          );
          const filteredCards = response.data.card;
          const array = [];
          array.push(filteredCards);
          setCards(array);
        } else {
          // si no le pasamos id la peticion axios es la siguiente
          const generalResponse = await axios.get(
            `https://api.magicthegathering.io/v1/cards?supertypes=${type}&colors=${color}`
          );

          // filtro las cartas que no tienen imagen
          const filteredCards = generalResponse.data.cards.filter(
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
  }, [color]);

  return { cards, loading };
};

export default useMagic;
