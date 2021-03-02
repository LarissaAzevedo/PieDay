import "./index.scss";

import Cartaz from "../img/torta_day.jpg"

const Background = () => {
  return (
    <div className="background">
      <div className="background-overlay">
        <div className="card-bg">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <img src={Cartaz} alt="cartaz do torta day"/>
        </div>
      </div>
    </div>
  );
};

export default Background;
