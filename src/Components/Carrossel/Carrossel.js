import React from "react";
import "./Carrossel.css";

function Carrosel(props) {


  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="classification">
              <span className="disponivel">Já disponível</span>
              <button className="mais">Saiba mais</button>
            </div>
            <img
              src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TeamSonicRacing_image1600w.jpg"
              class="d-block w-100 "
              alt="..."
            ></img>
            <div className="classification">
              <div className="square">{props.classificationNumber}</div>
              <span className="class-text">{props.classificationText}</span>
            </div>
          </div>
          <div class="carousel-item">
            <div className="classification">
              <span className="disponivel">Já disponível</span>
              <button className="mais">Saiba mais</button>
            </div>
            <img
              src="https://image.api.playstation.com/vulcan/ap/rnd/202010/1623/AgZdPsQzOoQpYqOWFKmHXips.jpg"
              class="d-block w-100 "
              alt="..."
            ></img>
            <div className="classification">
              <div className="square">{props.classificationNumber}</div>
              <span className="class-text">{props.classificationText}</span>
            </div>
          </div>
          <div class="carousel-item">
            <div className="classification">
              <span className="disponivel">Já disponível</span>
              <button className="mais">Saiba mais</button>
            </div>
            <img
              src="https://guildwars2.staticwars.com/wp-content/themes/guildwars2.com-live/img/og-img.f6214476.jpg "
              class="d-block w-100 "
              alt="..."
            ></img>
            <div className="classification">
              <div className="square">{props.classificationNumber}</div>
              <span className="class-text">{props.classificationText}</span>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
}

export default Carrosel;
