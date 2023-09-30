import React from "react";
import style from "./Header.module.css";
import logo from "../img/Logo.png";
import {ReactComponent as Sair} from "../assets/sair.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className={style.header}>
			<nav className={`${style.nav} container`}>
				<div>
					<Link to="/">Inventário</Link>
					<Link to="vendidos" >Vendas</Link>
				</div>
				<img className={style.logo} src={logo}/>
				<div>
					<Sair className={style.sair}/>
				</div>
			</nav>
		</header>
	);
};

export default Header;