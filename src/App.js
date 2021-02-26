import Background from "./Background";
import Footer from "./Footer";
import Game from "./Game";
import Header from "./Header";
import Infos from "./Infos";
import "./styles.css";

export default function App() {
  return (
    <div className="">
      <Header />
      <Background />
      <Infos />
      <Game />
      <Footer />
    </div>
  );
}
