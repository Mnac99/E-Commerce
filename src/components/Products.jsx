import dataFetch from "../datafetch.js";
import {useState, useEffect,} from "react";
import Product from "./Product.jsx";
import "./ProductStyle.css";
import { CartContext } from "./CreateContext.jsx";
import {useContext} from "react";
const Products = ()=> {

    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(true);
    const {cart,dispatch,totalPrice} = useContext(CartContext);

    useEffect(()=>{
        dataFetch().then(data => setProducts(data));
    },[])

    const showHandler = () => {
        setShow(!show);
    }
    const removeHandler = (item) => {
        dispatch({type:"REMOVE_ITEM",payload:item.id});
        totalPrice.current = totalPrice.current -item.price ;

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
                ):(
                    cart.length > 0 ? (
                        <>
                            <h2>TotalPrice is:{totalPrice.current}</h2>
                            {cart.map((item) =>(
                                <div key={item.id}>
                                    <Product {...item} showAdd={false}></Product>
                                    <button onClick={()=>removeHandler(item)}>removefromCart</button>
                                </div>))
                            }
                        </>):(
                        <p>Cart is Empty</p>
                             )
                )
            }
        </div>
    </div>)

}
export default Products;