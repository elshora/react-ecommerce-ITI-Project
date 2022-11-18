import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/dumb/Loading";
import MyHeader from "../components/MyHeader";
import Item from "../components/shop/Item";
import { getItems } from "../store/reducers/itemsSlice";

export default function Shop() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  setTimeout(() => setShow(true), 1000);
  const { items, isLoading, error } = useSelector((state) => state.items);
  useEffect(() => {
    dispatch(getItems());
  }, []);
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && <MyHeader />}
      {show && (
        <div className="container my-5">
          <div className="row">
            {items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
      {error && (
        <div>
          <error />
        </div>
      )}
    </>
  );
}
