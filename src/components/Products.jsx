import dataFetch from "../datafetch.js";
import {useState, useEffect} from "react";
import Product from "./Product.jsx";
import App from "../App.jsx";
const Products = ()=> {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        dataFetch().then(data => setProducts(data));
    },[])
    console.log(products);
    return (

    <div>{products.map((item) =>
        (<Product{...item}></Product>))
    }
    </div>

    )

}
export default Products;