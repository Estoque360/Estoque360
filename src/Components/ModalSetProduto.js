import React from "react";
import styles from "./ModalSetProduto.module.css";
import propTypes from "prop-types";
import ButtonIncluir from "./ButtonIncluir";
import ButtonCancelar from "./ButtonCancelar";
import Error from "./Error";
import { UseContext } from "../Context/UseContext";
import { request } from "../utils/request.";
import { validaInput } from "../utils/validaInput";


const ModalSetProduto = ({setModalIsOpen}) => {

	const contexto = React.useContext(UseContext);
	const [error, setError] = React.useState(false);


	const [name, setName] = React.useState("");
	const [price, setPrice] = React.useState(null);
	const [quantidade, setQuantidade] = React.useState(null);
	const [categoria, setCategoria] = React.useState("");


	async function handleRequest(event){
		setError(true);
		event.preventDefault();
		try{
			
			const insert = await request(contexto.requestType, [name, categoria, price, quantidade]);
			location.reload();
			console.log(insert);
			
		}catch(error){
			console.log(error);
		}

	}
	return (
		<>
			<div className={styles.title_container}>
				<h2>Adicionar Produto</h2>
				<p onClick={() => setModalIsOpen(false)} className={styles.close}>X</p>
			</div>
			<form onSubmit={handleRequest}>
				<label htmlFor="name">Nome</label>
				<input type="text" onChange={({target}) => setName(target.value)} value={name} id="name" placeholder="Camisa"/>
				{error && <Error error={validaInput("text", name)}/>}
				<div className={styles.input_small}>
					<div>
						<label htmlFor="price">Preço</label>
						<input onChange={({target}) => setPrice(target.value)} value={price} type="text" id="price" placeholder="R$ 00,00"/>
						{error && <Error error={validaInput("number", price)}/>}
					</div>
					<div>
						<label htmlFor="quantidade">Quantidade</label>
						<input onChange={({target}) => setQuantidade(target.value)} value={quantidade} type="text" id="quantidade" placeholder="000"/>
						{error && <Error error={validaInput("number", quantidade)}/>}
					</div>
				</div>
				<label htmlFor="categoria">Categoria</label>
				<input onChange={({target}) => setCategoria(target.value)} value={categoria} type="text" id="categoria" placeholder="Vestuário"/>
				{error && <Error error={validaInput("text", categoria)}/>}
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