import React from "react";
import axios from "axios";
import './Home.css'
import { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card'
import Carrossel from "../../Components/Carrossel/Carrossel";

function Home() {

    const [games, setGames] = useState([]);
    const [mounted, setMounted] = useState(false);

    const getData = async () => {
        await axios.get("/game/findMany").then((response) => {
        if (mounted) {
            setGames(response.data);
        }
        });
    };

    useEffect(() => {
        setMounted(true);
        getData();
    }, [mounted]);

  return (
    <div className='home'>
      <Carrossel
       id='cd310662-5d46-4852-aace-2194ed21ada5'
       classificationNumber='L'
       classificationText='Livre para qualquer idade'
      />
      {
        games.map(game => (
          <Card 
            id={game.id}
            image={game.image}
            title={game.name}
            preco={game.price}
            key={game.id}
          />
        ))
      }
    </div>
  );
}

export default Home;
