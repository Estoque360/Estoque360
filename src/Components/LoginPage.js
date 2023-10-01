import React from "react";
import styles from "./LoginPage.module.css";
import Logo from "../img/Logo.png";
import InputText from "./InputText";
import { Link } from "react-router-dom";

const LoginPage = () => {

	const [email, setEmail] = React.useState([]);
	const [senha, setSenha] = React.useState([]);
	const [error, setError] = React.useState(null);

	async function handleSubmit(){
		setError(true);
	}


	return (
		<div className={styles.container}>
			<div className={styles.container_login}>
				<img src={Logo}/>
				<div className={styles.input_container}>
					<InputText state={email} placeholder="E-mail" setState={setEmail} idInput="email" error={error} typeInput="email"/>
				</div>
				<div className={styles.input_container}>
					<InputText state={senha} placeholder="Senha" setState={setSenha} idInput="password" error={error}
						typeInput="password"/>
				</div>
				<div className={styles.navigation}>
					<Link to="criar-conta">Criar conta</Link>
					<button onClick={handleSubmit}>Avançar</button>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;