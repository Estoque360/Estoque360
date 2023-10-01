import React from "react";
import SearchBar from "./SearchBar";
import style from "./Inventario.module.css";
import Table from "./Table";
import { getProducts } from "../utils/produto";
import ButtonCadastrar from "./ButtonCadastrar";
import ModalProduto from "./ModalProduto";
import Header from "./Header";

const Inventario = () => {

	const [products, setProducts] = React.useState(null);
	const [modalIsOpen, setModalIsOpen] = React.useState(false);

	React.useEffect(() => {
		async function get(){
			try{
				const produtos = await getProducts();
				setProducts(produtos.users);
			} catch(error){
				console.log(error);
			}
		}
		get();
	}, []);

	console.log(products);

	return (
		<>
			<Header/>
			{modalIsOpen && <ModalProduto modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>}
			<div className={`${style.inventario_container} container`}>
				<div className={style.navegation_products}>
					<SearchBar/>
					<ButtonCadastrar setModalIsOpen={setModalIsOpen}>Adicionar Produto</ButtonCadastrar>
				</div>
				<Table produtos={products}/>
				{!products && <h2 className={style.not_products}>Nenhum produto cadastrado</h2>}
			</div>
		</>
	);
};

export default Inventario;