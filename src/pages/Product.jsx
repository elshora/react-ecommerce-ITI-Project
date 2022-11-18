import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageTap from "../components/product/ImageTap";
import ProductDetails from "../components/product/ProductDetails";
import { getItem } from "../store/reducers/itemsSlice";
import "../css/product.css";
export default function Product() {
  const { item } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getItem(id));
  }, []);
  return (
    <>
      <div className="display-6 text-capitalize pro-title py-2">
        <div className="container">
          <div className="row">Home &gt; Shop &gt; {item.title}</div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row my-5">
          <ImageTap item={item} />
          <ProductDetails item={item} />
        </div>
      </div>
    </>
  );
}
