export const getProducts = async () => {
	const produtos = await fetch("http://localhost:3333/produtos");
	const json = await produtos.json({type: "", body:[]});
	return json;
};

export const getSells = async () => {
	const vendas = await fetch("http://localhost:3333/vendidos");
	const json = await vendas.json();
	return json;
};
