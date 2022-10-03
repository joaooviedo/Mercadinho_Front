import "./ProdutoListItem.css";

function ProdutoListaItem({ produto, quantidadeSelecionada, index, onRemove, onAdd }) {

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="ProdutoListaItem__badge">
        {" "}
        {quantidadeSelecionada}{" "}
      </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => onRemove(index)}>
        remover
      </button>
    );
  return (
    <div className="ProdutoListaItem">
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="ProdutoListaItem__titulo">{produto.titulo}</div>
        <div className="ProdutoListaItem__preco">
          R$ {produto.preco.toFixed(2)}
        </div>
        <div className="ProdutoListaItem__descricao"> {produto.descricao} </div>
        <div className="ProdutoListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`}
            onClick={() => onAdd(index)}
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <img
        className="ProdutoListaItem__foto"
        src={produto.foto}
        alt={`Produto de ${produto.sabor}`}
      />
    </div>
  );
}

export default ProdutoListaItem;
