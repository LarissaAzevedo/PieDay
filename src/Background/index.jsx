import "./index.scss";

import Cartaz from "../img/torta_day.jpg";

const Background = () => {
  return (
    <div className="background">
      <div className="background-overlay">
        <div className="card-bg">
          <div className="card-bg-texts">
            <h2>Matemática e guloseimas</h2>
            <p>
              Desde 1988, o dia 14 de março (3/14, abreviação da data no inglês)
              é usado para celebrar o dia do Pi (π), letra grega representante do
              valor da razão entre a circunferência e o diâmetro de um círculo
              (3,14).
              <br></br>
              To sem ideia do que mais colocar aqui, sendo assim to aceitando uma torta, de limão. :)
            </p>
          </div>
          <img src={Cartaz} alt="cartaz do torta day" />
        </div>
      </div>
    </div>
  );
};

export default Background;
