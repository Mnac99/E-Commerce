import {createContext, useReducer, useRef,} from "react";
import reducer from "./reducer.js";
export const CartContext = createContext([]);
export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(reducer,[]);
    const totalPrice  = useRef(0);

    return (<CartContext.Provider value={{cart,dispatch,totalPrice}}>
         {children}
     </CartContext.Provider>);
 }