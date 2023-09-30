import React from "react";
import propTypes from "prop-types";
import style from "./Table.module.css";
import {ReactComponent as Editar} from "../assets/editar.svg";
import {ReactComponent as Excluir} from "../assets/excluir.svg";

const Table = ({produtos}) => {
	
	return (
		<table className={style.table}>
			<thead>
				{produtos &&
					<tr className={style.table_title}>
						<th>Item</th>
						<th>Nome</th>
						<th>Preço</th>
						<th>Categoria</th>
						<th>Quantidade</th>
						<th>Ação</th>
					</tr>
				}
			</thead>
			<tbody>
				{produtos && produtos.map((produto) => (
					<>
						<tr>
							<th >{produto.produto_id}</th>
							<th >{produto.produto_nome}</th>
							<th >{produto.produto_preco}</th>
							<th >{produto.produto_categoria}</th>
							<th >{produto.produto_quantidade}</th>
							<th><Editar style={{"cursor": "pointer"}}/><Excluir style={{"cursor": "pointer"}}/></th>
						</tr>
					</>
				))}
				
			</tbody>
		</table>
	);
};

export default Table;

Table.propTypes = {
	products: propTypes.shape({})
}.isRequired;