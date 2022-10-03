import { useState } from "react";
import "./ProdutoList.css";
import { produtos } from "../mocks/produtos.js";

function ProdutoList() {
  const [produtoSelecionado, setProdutoSelecionado] = useState({});

  const adicionarItem = (produtoIndex) => {
    const produto = {
      [produtoIndex]: Number(produtoSelecionado[produtoIndex] || 0) + 1,
    };
    setProdutoSelecionado({ ...produtoSelecionado, ...produto });
  };
  return (
    <div className="ProdutoLista">
      {produtos.map((produto, index) => (
        <div className="ProdutoListaItem" key={`ProdutoListaItem-${index}`}>
          <span className="ProdutoListaItem__badge">
            {" "}
            {produtoSelecionado[index] || 0}{" "}
          </span>
          <div>
            <div className="ProdutoListaItem__titulo">{produto.titulo}</div>
            <div className="ProdutoListaItem__preco">
              R$ {produto.preco.toFixed(2)}
            </div>
            <div className="ProdutoListaItem__descricao">
              {" "}
              {produto.descricao}{" "}
            </div>
            <div className="ProdutoListaItem__acoes Acoes">
              <button
                className="Acoes__adicionar Acoes__adicionar--preencher"
                onClick={() => adicionarItem(index)}
              >
                adicionar
              </button>
            </div>
          </div>
          <img
            className="ProdutoListaItem__foto"
            src={produto.foto}
            alt={`Produto de ${produto.sabor}`}
          />
        </div>
      ))}
    </div>
  );
}

export default ProdutoList;
