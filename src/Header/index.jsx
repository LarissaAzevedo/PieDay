import "./index.scss";

import pieLogo from "../img/pie.png";

const Header = () => {
  return (
    <header>
      <img src={pieLogo} alt="ícone de torta"></img>
      <span>Pie Day</span>
    </header>
  );
};

export default Header;
