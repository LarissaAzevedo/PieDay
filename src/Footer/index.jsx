import githubLogo from "../img/github.svg";
import instagramLogo from "../img/instagram.svg";
import linkedinLogo from "../img/linkedin.svg";
import twitchLogo from "../img/twitch.svg";
import twitterLogo from "../img/twitter.svg";

import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="developer">
        <span>Este site foi desenvolvido por <strong>Larissa</strong> ©</span>
      </div>
      <div className="social-medias">
        <a href="https://github.com/LarissaAzevedo">
          <img src={githubLogo} alt="ícone do github"></img>
        </a>
        <a href="https://www.linkedin.com/in/larissa-santos-de-azevedo-65bb6a171">
          <img src={linkedinLogo} alt="ícone do linkedin"></img>
        </a>
        <a href="https://www.instagram.com/usakimodoki/">
          <img src={instagramLogo} alt="ícone do instagram"></img>
        </a>
        <a href="https://www.twitch.tv/usakimodoki">
          <img src={twitchLogo} alt="ícone do twitch"></img>
        </a>
        <a href="https://twitter.com/usakimodoki">
          <img src={twitterLogo} alt="ícone do twitter"></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
