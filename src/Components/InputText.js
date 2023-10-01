import React from "react";
import { validaInput } from "../utils/validaInput";
import Error from "./Error";
import {propTypes} from "prop-types";

const InputText = ({state, placeholder, setState, label, idInput, error, typeInput}) => {
	return (
		<>
			{label && <label htmlFor={idInput}>{label}</label>}
			<input type="text" onChange={({target}) =>setState(target.value)} id={idInput} value={state} placeholder={placeholder}/>
			{error && <Error error={validaInput(typeInput, state)}/>}


		</>
	);
};

export default InputText;

InputText.propTypes = {
	state: propTypes,
	placeholder: propTypes,
	setState: propTypes,
	label: propTypes,
	idInput: propTypes,
	error: propTypes
}.isRequired;