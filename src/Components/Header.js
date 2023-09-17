import React from "react";
import style from "./Header.module.css";
import logo from "../img/Logo.png";
import {ReactComponent as Sair} from "../assets/sair.svg";

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <div>
          <a href=''>Inventário</a>
          <a href=''>Vendas</a>
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