import React, { useContext } from "react";
import { appContext } from "../appContext.js";
import CartItem from "../components/CartItem.js";

function Cart() {
  const { cartItems } = useContext(appContext);
  const cartItemsEl = cartItems.map((cartItem) => (
    <CartItem key={cartItem.id} cartItem={cartItem} />
  ));

  return (
    <div>
      {cartItemsEl}
      <hr />
      <div> Total : Rs {cartItems.length * 2} </div>
    </div>
  );
}

export default Cart;
