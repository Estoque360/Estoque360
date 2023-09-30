import React from "react";
import propTypes from "prop-types";
import styles from "./ButtonCadastrar.module.css";
import { ReactComponent as Adicionar } from "../assets/adicionar.svg";


const ButtonCadastrar = ({children, setModalIsOpen}) => {
	return (
		<>
			<div onClick={() => setModalIsOpen(true)}className={styles.div}>
				<button className={styles.button}>{children}</button>
				<Adicionar className={styles.icon}/>
			</div>
		</>
	);
};

export default ButtonCadastrar;

ButtonCadastrar.propTypes = {
	children: propTypes.shape()
}.isRequired;