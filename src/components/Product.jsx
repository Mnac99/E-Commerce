import "./ProductStyle.css"
import {CartContext} from "./CreateContext.jsx";
import {useContext} from "react";
import {useState} from "react";
import products from "./Products.jsx";
const Product = ({price,id,title,image,category,showAdd= true}) => {
    const {cart,setCart} = useContext(CartContext);

    const addToCart =() => {
        const productItem = {
            id,
            title,
            price,
            image,
            category
        };
        const checker = cart.some((item) => item.id === productItem.id);
        if(!checker) {
            setCart([...cart, productItem]);
        }
    }

    return (
        <div key={id} className="product">
            <img src={image} alt={title} />
            <strong>{title}</strong>
            <i>{category}</i>
            price:{price}

            {showAdd && (
                <button onClick={addToCart}>ToCart</button>
            )}


        </div>
    )
}
export default Product;