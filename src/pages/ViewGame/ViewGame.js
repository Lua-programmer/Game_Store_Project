import React from 'react';
import './ViewGame.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ViewGame() {

    const state = useLocation()
    const id = state.state;
  
    const [game, setGame] = useState({})
    const [mounted, setMounted] = useState(false)
  
    const getData = async () => {
      await axios.get(`/game/find/${id}`)
      .then(response => {
        if(mounted) {
          setGame(response.data)
          console.log(game)
        }
      })
    }
  
    useEffect(() => {
      setMounted(true)
      getData()
    }, [mounted])


    return (
        <div className="card mb-3 card-view">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={game.image} alt={game.name} className="img-fluid rounded-start"></img>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{game.name}</h5>
                    <span>R$ {game.price}</span>
                    <h3>{game.year}</h3>
                    <p>{game.storyline}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ViewGame
