import React from "react";
import styles from "./ModalSetProduto.module.css";
import propTypes from "prop-types";
import ButtonIncluir from "./ButtonIncluir";
import ButtonCancelar from "./ButtonCancelar";

import { UseContext } from "../Context/UseContext";
import { request } from "../utils/request.";

import InputText from "./InputText";
import { validaInput } from "../utils/validaInput";


const ModalSetProduto = ({setModalIsOpen}) => {

	const contexto = React.useContext(UseContext);
	const [error, setError] = React.useState(false);

	const [name, setName] = React.useState([]);
	const [price, setPrice] = React.useState([]);
	const [quantidade, setQuantidade] = React.useState([]);
	const [categoria, setCategoria] = React.useState([]);



	async function handleRequest(event){
		setError(true);
		event.preventDefault();
		let contador = 0;
		const validacoes = [validaInput("text", name), validaInput("number", price), validaInput("number", quantidade), validaInput("text", categoria)];

		if(name && price && quantidade && categoria)
		
			validacoes.map((validacao) =>{
				if(validacao){
					contador += 1;
				}
			});
		if(contador == 0){
			try{
			
				const insert = await request(contexto.requestType, [name, categoria, price, quantidade]);
				location.reload();
				console.log(insert);
			
			}catch(error){
				console.log(error);
			}
		}
		console.log(contador);
		

	}
	return (
		<>
			<div className={styles.title_container}>
				<h2>Adicionar Produto</h2>
				<p onClick={() => setModalIsOpen(false)} className={styles.close}>X</p>
			</div>
			<form onSubmit={handleRequest}>
				<InputText state={name} placeholder="Camisa" setState={setName} label="Nome" idInput="name" error={error} typeInput="text"/> 
				<div className={styles.input_small}>
					<div>
						<InputText state={price} placeholder="R$ 00.00" setState={setPrice} label="Preço" idInput="price" error={error} typeInput="number"/>
					</div>
					<div>
						<InputText state={quantidade} placeholder="000" setState={setQuantidade} label="Quantidade" idInput="qtt" error={error} typeInput="number"/>
					</div>
				</div>
				<InputText state={categoria} placeholder="Vestuário" setState={setCategoria} label="Categoria" idInput="category" error={error} typeInput="text"/>
				<div className={styles.button_container}>
					<ButtonCancelar closeModal={setModalIsOpen}/>
					<ButtonIncluir />
				</div>
			</form>
		</>
	);
};

export default ModalSetProduto;

ModalSetProduto.propTypes = {
	products: propTypes.shape({})
}.isRequired;