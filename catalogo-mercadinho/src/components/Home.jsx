import "./Home.css";
import ProdutoList from "./ProdutoList";
import sacola from "../assets/icons/sacola.png";
import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="Home">
      <div className="Home__header Header">
        <div className="row">
          <div className="Header__logo Logo">
            <img
              src={logo}
              width="70px"
              alt="Logo Emercadinho"
              className="Logo__icone"
            />
            <span className="Logo__titulo"> Mercadinho </span>
          </div>
          <div className="Header__opcoes Opcoes">
            <div className="Opcoes__sacola Sacola">
              <img
                src={sacola}
                width="40px"
                className="Sacola__icone"
                alt="Sacola de compras"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Home__container">
        <ProdutoList></ProdutoList>
      </div>
    </div>
  );
}

export default Home;
