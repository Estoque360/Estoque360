import React from "react";
import {propTypes} from "prop-types";
import styles from "./Error.module.css";

const Error = ({error}) => {
	if(error)
		return (
			<span className={styles.error}>{error}</span>
		);
};

export default Error;

Error.propTypes = {
	error: propTypes
}.isRequired;