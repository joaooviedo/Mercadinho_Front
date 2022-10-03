import { useState } from "react";
import ProdutoListaItem from "../ProdutoListaItem/ProdutoListItem";
import { produtos } from "../../mocks/produtos";
import "./ProdutoList.css";

function ProdutoList() {
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
