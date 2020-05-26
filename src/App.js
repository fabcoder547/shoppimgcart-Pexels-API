import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Components/cart";
import BuyPage from "./Components/BuyPage";
import "./App.css";
function App() {
  const [cartItem, setCartItem] = useState([]);
  //Method For adding Item from cart
  const addItemInCart = (item) => {
    const isAdded = cartItem.findIndex(function (arrayItem) {
      return item.id === arrayItem.id;
    });

    if (isAdded !== -1) {
      return toast("already added", { type: "error" });
    }

    setCartItem([...cartItem, item]);
  };
  //Method For buying Item from cart
  const buyNow = () => {
    setCartItem([]);
    toast("Buyed Successfully", { type: "success" });
  };
  //Method For removing Item from cart
  const removeItem = (item) => {
    setCartItem(
      cartItem.filter((arrayItem) => {
        return arrayItem.id !== item.id;
      })
    );
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="col-md-8">
          <BuyPage addItemInCart={addItemInCart} />
        </div>
        <div className="col-md-4">
          <Cart cartItem={cartItem} buyNow={buyNow} removeItem={removeItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
