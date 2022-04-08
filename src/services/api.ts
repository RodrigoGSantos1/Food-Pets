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