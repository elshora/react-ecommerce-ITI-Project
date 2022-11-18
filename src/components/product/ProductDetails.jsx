import {
  faCircle,
  faMinus,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../../store/reducers/cart/cartSlice";

export default function ProductDetails({ item }) {
  const dipatch = useDispatch();
  const addOneItem = () => {
    dipatch(addTocart(item));
    // dipatch(addToCartApi(item));
  };
  return (
    <div className="col-12 col-md-6">
      <h2 className="display-6 ">{item.title}</h2>
      <p className="text-muted fs-3 fw-bold">$ {item.price}</p>
      <div className="info">
        <div>
          <span className="text-danger">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span> | </span>
          <span className="text-muted"> Customer Reviews</span>
        </div>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          reprehenderit cupiditate quis consequuntur fuga, possimus officia
          optio voluptatem assumenda.
        </p>
        <div className="size my-2">
          <h6 className="text-muted">Size</h6>
          <button className="btn mx-1 btn-outline-secondary">L</button>
          <button className="btn mx-1 btn-outline-secondary">XL</button>
          <button className="btn mx-1 btn-outline-secondary">XS</button>
        </div>
        <div className="color my-2 fs-3">
          <h6 className="text-muted">Color</h6>
          <FontAwesomeIcon icon={faCircle} className="text-danger mx-3" />
          <FontAwesomeIcon icon={faCircle} className="text-warning mx-3" />
          <FontAwesomeIcon icon={faCircle} className="text-success mx-3" />
        </div>
        <div className="control">
          <button className="btn btn-outline-dark rounded  px-3 py-3 d-inline-flex align-items-center gap-3">
            <FontAwesomeIcon icon={faMinus} />
            <span>1</span>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            className="btn btn-outline-dark rounded mx-3 px-3 py-3"
            onClick={addOneItem}
          >
            Add To Cart
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
}
