import "./InitialPage.css";
import "./reset.css";
import { Link } from "react-router-dom";
import logoInitial from "../../assets/Nu Kenzie.png";
import imgInitial from "../../assets/image.png";
function InitialPage({ buttonHomePage }) {
  return (
    <main className="initial__main">
      <div className="container">
        <div className="conteiner__main">
          <div className="div__logo">
            <img src={logoInitial} alt="" />
          </div>
          <div className="div__h1">
            <h1>Centralize o controle das suas finanças</h1>
          </div>
          <div className="div__description">
            <span>de forma rápida e segura</span>
          </div>
          <div className="div__button">
            <button>
              <Link to={"/homepage"}>Iniciar</Link>
            </button>
          </div>
        </div>
        <div className="container__circle">
          <img src={imgInitial} alt="" />
        </div>
      </div>
    </main>
  );
}

export default InitialPage;
