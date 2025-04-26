import {useEffect,useReducer } from 'react'
import dataFetch from "./datafetch.js";
import Products from "./components/Products.jsx";

function App() {



  return (
    <>
       <h1>Card</h1>
      <Products/>
    </>
  )
}

export default App
