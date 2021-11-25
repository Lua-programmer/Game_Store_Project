import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsBookmarkHeart } from 'react-icons/bs'

function Card(props) {

    const navigate = useNavigate();

    const goToGamePage = () => {
      navigate("/game", { state: props.id });
    };

    const wishGame = () => {
      const token = localStorage.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const id = props.id;

      axios.get(`/game/wish/${id}`, config);
    };


    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4 ">
                <div className="col">
                <div className="card mb-4 mt-2" onClick={goToGamePage}>
                    <img src={props.image} alt={props.title} className="card-img-top"></img>
                    <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <span classNameName='card-preco'>{'R$ ' + props.preco}</span>
                    </div>

                    <button onClick={wishGame}>
                      <BsBookmarkHeart />
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Card

