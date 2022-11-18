import React from "react";
import { useDispatch } from "react-redux";
import "../../css/cart.css";
import { clearCart } from "../../store/reducers/cart/cartSlice";

export default function CartTotal({ total }) {
  let dispatch = useDispatch();
  return (
    <>
      <div className=" total col-12 col-md-3 text-center rounded shadow">
        <h3 className="my-3 display-7 fw-bold py-1">Cart Total</h3>
        <div className="d-flex justify-content-around fs-5">
          <span>Total</span>{" "}
          <span className="fw-bold price">${total.toFixed(2)}</span>
        </div>
        <button
          className="btn btn-outline-dark my-3 mx-5 fs-5"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          clear Cart
        </button>
      </div>
    </>
  );
}
