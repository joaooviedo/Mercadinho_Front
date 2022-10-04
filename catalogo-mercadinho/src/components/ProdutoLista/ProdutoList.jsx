import { useState, useEffect } from "react";
import ProdutoListaItem from "../ProdutoListaItem/ProdutoListItem";
import "./ProdutoList.css";
import { ProdutoService } from "../../services/ProdutoService";

function ProdutoList() {
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState({});

  const adicionarItem = (produtoIndex) => {
    const produto = {
      [produtoIndex]: Number(produtoSelecionado[produtoIndex] || 0) + 1,
    };
    setProdutoSelecionado({ ...produtoSelecionado, ...produto });
  };

  const removerItem = (produtoIndex) => {
    const produto = {
      [produtoIndex]: Number(produtoSelecionado[produtoIndex] || 0) - 1,
    };
    setProdutoSelecionado({ ...produtoSelecionado, ...produto });
  };
  const getLista = async () => {
    const response = await ProdutoService.getLista();
    setProdutos(response);
  };
  useEffect(() => {
    getLista();
  }, []);

  return (
    <div className="ProdutoLista">
      {produtos.map((produto, index) => (
        <ProdutoListaItem
          key={`ProdutoListaItem=${index}`}
          produto={produto}
          quantidadeSelecionada={produtoSelecionado[index]}
          index={index}
          onAdd={(index) => adicionarItem(index)}
          onRemove={(index) => removerItem(index)}
        />
      ))}
    </div>
  );
}

export default ProdutoList;
