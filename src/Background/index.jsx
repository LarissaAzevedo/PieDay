import "./index.scss";

import pieBg from "../img/pie-bg.jpg";

const Background = () => {
  return (
    <div className="background">
        <img src={pieBg} alt="background com imagem de torta" />
      <div className="background-overlay">
      </div>
    </div>
  );
};

export default Background;
