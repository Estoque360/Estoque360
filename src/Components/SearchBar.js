import React from "react";
import style from "./SearchBar.module.css";
import { ReactComponent as Search } from "../assets/search.svg";

const SearchBar = () => {

	const [inputValue, setInputValue] = React.useState("");
  
	function handleSubmit(){
		
	}


	return (
		<form onSubmit={handleSubmit}>
			<input className={style.input} onChange={(event) => setInputValue(event.target.value)} value={inputValue} type="text" placeholder="Pesquisar"/>
			<Search className={style.search}/>
		</form>
	);
};

export default SearchBar;