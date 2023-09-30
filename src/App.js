import "./App.css";
import Header from "./Components/Header";
import React from "react";
import Inventario from "./Components/Inventario";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import {GlobalStorage} from "./Context/UseContext";

function App() {
	return (
		<GlobalStorage>
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route path="/" element={<Inventario/>}/>
					<Route path="/vendas" element={<Header/>}/>
				</Routes>
			</BrowserRouter>
		</GlobalStorage>

	);
}

export default App;
