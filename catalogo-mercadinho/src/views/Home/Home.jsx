import "./Home.css";
import "../../components/Navbar/Navbar";
import ProdutoList from "../../components/ProdutoLista/ProdutoList";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__container">
        <ProdutoList></ProdutoList>
      </div>
    </div>
  );
}

export default Home;
