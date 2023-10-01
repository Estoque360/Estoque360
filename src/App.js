import "./App.css";
import React from "react";
import Inventario from "./Components/Inventario";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import {GlobalStorage} from "./Context/UseContext";
import LoginPage from "./Components/LoginPage";

function App() {
	return (
		<GlobalStorage>
			<BrowserRouter>			
				<Routes>
					<Route path="/" element={<Inventario/>}/>
					<Route path="/login" element={<LoginPage/>}/>
				</Routes>
			</BrowserRouter>
		</GlobalStorage>

	);
}

export default App;
