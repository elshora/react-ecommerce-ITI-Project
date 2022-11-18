import { faCartPlus, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addTocart } from "../../store/reducers/cart/cartSlice";

export default function Item({ item }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const prouctLink = `/shop/${item.id}`;
  return (
    <div
      className="col-12 col-md-6 col-lg-4 my-3 shadow rounded text-center"
      onMouseOver={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <img src={item.image} alt={item.title} width="100%" />
      <div className="info p-2">
        <h3 className="display-6 text-capitalize">{item.title}</h3>
        <p className="text-muted">{item.desc}</p>
        <p className="d-flex flex-row justify-content-between fs-2">
          {!show && <span className="text-danger fw-bold">${item.price}</span>}
          {show && (
            <FontAwesomeIcon
              icon={faCartPlus}
              className="btn fs-2"
              onClick={() => dispatch(addTocart(item))}
            />
          )}
          <NavLink to={prouctLink}>
            <FontAwesomeIcon icon={faInfoCircle} className="btn fs-2" />
          </NavLink>
        </p>
      </div>
    </div>
  );
}
