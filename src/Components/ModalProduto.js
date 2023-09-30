import React from "react";
import styles from "./ModalProduto.module.css";
import propTypes from "prop-types";
import ModalSetProduto from "./ModalSetProduto";


const ModalProduto = ({setModalIsOpen, modalIsOpen}) => {
	function handleCloseModal(event){
		if(event.target.className.includes("background") || event.target.className.includes("close")){
			setModalIsOpen(false);
		}
	}

	return (
		<div onClick={handleCloseModal} className={modalIsOpen == true ? `${styles.background} ${styles.visible}`: styles.background}>
			<div className={styles.modal_container}>
				<ModalSetProduto setModalIsOpen={setModalIsOpen}/>
			</div>
		</div>
	);
};

export default ModalProduto;

ModalProduto.propTypes = {
	setModalIsOpen: propTypes.shape()
}.isRequired;