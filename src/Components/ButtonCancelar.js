import React from "react";
import styles from "./ButtonCancelar.module.css";
import {propTypes} from "prop-types";

const ButtonCancelar = ({closeModal}) => {
	return (
		<button className={styles.button} onClick={() => closeModal(false)}>Cancelar</button>
	);
};

export default ButtonCancelar;

ButtonCancelar.propTypes = {
	closeModal: propTypes.shape()
}.isRequired;