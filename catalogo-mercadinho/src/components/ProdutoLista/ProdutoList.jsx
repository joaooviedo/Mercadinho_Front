import { useState } from "react";
import "./ProdutoList.css";
import { produtos } from "../../mocks/produtos";

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

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="ProdutoListaItem__badge">
        {" "}
        {produtoSelecionado[index]}{" "}
      </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => removerItem(index)}>
        remover
      </button>
    );

  return (
    <div className="ProdutoLista">
      {produtos.map((produto, index) => (
        <div className="ProdutoListaItem" key={`ProdutoListaItem-${index}`}>
          {badgeCounter(produtoSelecionado[index], index)}
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
                className={`Acoes__adicionar ${
                  !produtoSelecionado[index] && "Acoes__adicionar--preencher"
                }`}
                onClick={() => adicionarItem(index)}
              >
                adicionar
              </button>
              {removeButton(produtoSelecionado[index], index)}
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
