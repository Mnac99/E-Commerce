import dataFetch from "../datafetch.js";
import {useState, useEffect} from "react";
import Product from "./Product.jsx";
import "./ProductStyle.css";
import { CartContext } from "./CreateContext.jsx";
import {useContext} from "react";
import product from "./Product.jsx";
const Products = ()=> {

    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(true);
    const {cart,setCart} = useContext(CartContext);
    useEffect(()=>{
        dataFetch().then(data => setProducts(data));
    },[])
    console.log(products);

    const showHandler = () => {
        setShow(!show);
    }
    const removeHandler = (key) => {
       const updated =  cart.filter(item =>item.id !== key);
       setCart(updated);
    }
    return (<div style={{width:"100vw",height:"100vh"}} >
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "30px",
            marginRight: "30px",
        }}>
            <h1>Card</h1>
            <button
                onClick={showHandler}
            >
                {show? " toCart " : " toProducts "}
            </button>
        </div>
        <div className="Products">
            {show
                ? (
                    products.map((item) =>
                        (<Product {...item}></Product>)
                    )
                ): cart.map((item) =>(
                    <div key={item.id}>
                        <Product {...item} showAdd={false}></Product>
                        <button onClick={()=>removeHandler(item.id)}>removefromCart</button>
                    </div>)
                )
            }
        </div>
    </div>)

}
export default Products;