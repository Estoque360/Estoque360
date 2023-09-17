import React from "react";
import SearchBar from "./SearchBar";
import style from "./Inventario.module.css";
import Table from "./Table";
import { getProducts } from "../utils/produto";

const Inventario = () => {

  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    async function get(){
      const produtos = await getProducts();
      setProducts(produtos.users);
    }
    get();
  }, []);

  console.log(products);

  return (
    <div className={`${style.inventario_container} container`}>
      <SearchBar/>
      {products && <Table produtos={products}/>}
    </div>
  );
};

export default Inventario;