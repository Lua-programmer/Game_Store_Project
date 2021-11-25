import React from 'react';
import './Carrossel.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Carrosel(props) {

    const [game, setGame] = useState([]);
    const [mounted, setMoounted] = useState(false);

    const getData = async () => {
      await axios.get(`/game/find/${props.id}`).then((response) => {
        if (mounted) {
          setGame(response.data);
        }
      });
    };

    useEffect(() => {
      setMoounted(true);
      getData();
    }, [mounted]);


    return (
        <div>
            {/* <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <div className="classification">
                        <span className='disponivel'>Já disponível</span>
                        <button className='mais'>
                        Saiba mais
                        </button>
                    </div>
                    <img src="https://i.pinimg.com/originals/11/68/89/116889de7a1d09316e376501f77a05b3.jpg" class="d-block w-100 " alt="..."></img>
                        <div className="classification">
                            <span className='disponivel'>Já disponível</span>
                            <button className='mais'>
                            Saiba mais
                            </button>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div className="classification">
                        <span className='disponivel'>Já disponível</span>
                        <button className='mais'>
                        Saiba mais
                        </button>
                    </div>
                    <img src="https://xboxpower-wp.s3.amazonaws.com/wp-content/uploads/2017/04/04134517/Forza-7-1.png" class="d-block w-100 " alt="..."></img>
                        <div className="classification">
                            <span className='disponivel'>Já disponível</span>
                            <button className='mais'>
                            Saiba mais
                            </button>
                        </div>
                    </div>
                    <div class="carousel-item">
                                        <div className="classification">
                            <span className='disponivel'>Já disponível</span>
                            <button className='mais'>
                            Saiba mais
                            </button>
                    </div>
                    <img src="http://www.comboinfinito.com.br/principal/wp-content/uploads/2017/03/gears_of_war_4_xbox_one-wallpaper-1920x1080.jpg " class="d-block w-100 " alt="..."></img>
                        <div className="classification">
                            <span className='disponivel'>Já disponível</span>
                            <button className='mais'>
                            Saiba mais
                            </button>
                        </div>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}




            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">

                    <div className="classification">
                            <span className='disponivel'>Já disponível</span>
                            <button className='mais'>
                            Saiba mais
                            </button>
                    </div>
                    
                    <img src={game.image} class="d-block w-100 h-200" alt={game.nome}></img>
                      
                    </div>
                </div>
                <div className='classification'>
                    <div className='square'>
                        {props.classificationNumber}
                    </div>
                    <span className='class-text'>{props.classificationText}</span>
                </div>
                
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carrosel
