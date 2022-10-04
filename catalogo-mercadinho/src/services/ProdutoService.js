import { Api } from "../helper/Api";

const parseResponse = (response) => response.json();

export const ProdutoService = {
    getLista: () =>
      fetch(Api.produtoLista(), { method: "GET" }).then(parseResponse),
    getById: (id) =>
      fetch(Api.produtoById(id), { method: "GET" }).then(parseResponse),
    create: () =>
      fetch(Api.createProduto(), { method: "POST" }).then(parseResponse),
    updateById: (id) =>
      fetch(Api.updateProdutoById(id), { method: "PUT" }).then(parseResponse),
    deleteById: (id) =>
      fetch(Api.deleteProdutoById(id), { method: "DELETE" }).then(parseResponse),
  };