import React from "react";
import { NavLink } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="text-center my-5 container">
      <img
        src="./images/emptycart.png"
        alt=""
        className="float-center"
        width="300px"
      />
      <h4 className="mt-4">Your cart is Empty</h4>
      <p>
        Looks like you have noy added anything to your cart. Go ahead & explore
        our store.
      </p>
      <NavLink to="/shop">
        <button className="btn btn-outline-dark my-4 mx-3">Take Me shop</button>
      </NavLink>
    </div>
  );
}
