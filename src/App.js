
import axios from 'axios';
import { useEffect } from "react";
import { useReducer } from 'react';
import {cartReducer} from "./reducers/cartReducer";


function App() {

  const [state, dispatch] = useReducer(cartReducer,{
    products:[],
    cart:[],
  });

console.log(state);
  const fetchProduct = async()=>{
    const {data} = await axios.get('https://dummyjson.com/products');
   // console.log(data);

    dispatch({
      type: 'Add_PRODUCTS',
      payload: data.products,
    })

  };

  useEffect( ()=>{
    fetchProduct();
  },[]);
  return (
    <div className="App">
    <h1>pawan</h1>
   </div>
  );
}

export default App;
