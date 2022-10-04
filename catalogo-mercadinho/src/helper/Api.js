const ProdutoContext = {
  produtoEndpoint: () => `${Api.baseUrl}/produtos`,
  produtoLista: () => `${ProdutoContext.produtoEndpoint()}/todos-produtos`,
  produtoById: (id) => `${ProdutoContext.produtoEndpoint()}/produto/${id}`,
  createproduto: () => `${ProdutoContext.produtoEndpoint()}/criar-produto`,
  updateprodutoById: (id) =>
    `${ProdutoContext.produtoEndpoint()}/atualizar-produto/${id}`,
  deleteprodutoById: (id) =>
    `${ProdutoContext.produtoEndpoint()}/deletar-produto/${id}`,
};

export const Api = {
  baseUrl: "https://mercadinhoapi.herokuapp.com",
  ...ProdutoContext,
};
