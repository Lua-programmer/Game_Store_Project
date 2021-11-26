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
       classificationNumber='L'
       classificationText='Livre para qualquer idade'
      />
      <div className="card-home">
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
      
    </div>
  );
}

export default Home;
