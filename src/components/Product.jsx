import "./ProductStyle.css"
import {CartContext} from "./CreateContext.jsx";
import {useContext} from "react";

const Product = ({price,id,title,image,category,showAdd= true}) => {
    const {dispatch,totalPrice} = useContext(CartContext);

    const addToCart =() => {

        const productItem = {
            id,
            title,
            price,
            image,
            category
        };
        dispatch({type:"ADD_ITEM",payload:productItem});
        totalPrice.current += Number(productItem.price);


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