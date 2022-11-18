import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Ads from "../components/Ads";
import CartItem from "../components/cart/CartItem";
import CartTotal from "../components/cart/CartTotal";
import EmptyCart from "../components/cart/EmptyCart";
import MyHeader from "../components/MyHeader";

export default function Cart() {
  const { cartItems, amount, total } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <>
        <MyHeader />
        <EmptyCart />;
      </>
    );
  }
  return (
    <>
      <MyHeader />
      <div className="container my-5">
        <div className="row">
          <div className="items  col-12 col-md-9 ">
            <table className="table table-borderless">
              <thead>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>amount</th>
              </thead>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </table>
          </div>
          <CartTotal total={total} />
        </div>
      </div>
      <Ads />
    </>
  );
}
