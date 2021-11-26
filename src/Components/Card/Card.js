import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsBookmarkHeart } from 'react-icons/bs'

function Card(props) {

    const navigate = useNavigate();

    const goToGamePage = () => {
      navigate("/viewgame", { state: props.id });
    };

    const wishGame = () => {
      const token = localStorage.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const id = props.id;

      axios.get(`/game/wish/${id}`, config)
      .then(window.alert('Incluído a lista de desejos'))
    };


    return (
        <div className="grid -">
                
          <div className="card w-90" >
              <img src={props.image} alt={props.title} className="card-img-top" onClick={goToGamePage}></img>
              <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <span classNameName='card-preco'>{'R$ ' + props.preco}</span>
              </div>

              <button onClick={wishGame}>
                <BsBookmarkHeart />
              </button>
          </div>
                
            
        </div>
    );
}

export default Card

