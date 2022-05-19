import Gateway from "./gateway";

export async function postCadastroCliente(data: any) {
  return await Gateway.roteador({
    method: "post",
    url: `user`,
    data,
  });
}

export async function postLogin(data: any) {
  return await Gateway.roteador({
    method: "post",
    url: `login`,
    data,
  });
}

export async function postCadastroProduto(data: any) {
  return await Gateway.roteador({
    method: "post",
    url: `painel/products`,
    data,
  });
}

export async function getProducts() {
  return await Gateway.roteador({
    method: "get",
    url: `products`,
  });
}

export async function getClients() {
  return await Gateway.roteador({
    method: "get",
    url: `users`,
  });
}