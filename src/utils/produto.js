export const getProducts = async () => {
  const produtos = await fetch("http://localhost:3333/produtos");
  const json = await produtos.json();
  return json;
};
