import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  decrease,
  increase,
  removeItem,
} from "../../store/reducers/cart/cartSlice";
export default function CartItem({ id, image, title, price, quantity }) {
  let dispatch = useDispatch();
  return (
    <tr>
      <td>
        <img src={image} alt={title} width="40px" />
      </td>
      <td className="text-muted">{title}</td>
      <td className="text-price">{price}</td>
      <td className="d-flex flex-column align-items-center">
        <button className="btn p-0">
          <FontAwesomeIcon
            icon={faChevronUp}
            onClick={() => {
              dispatch(increase(id));
            }}
          />
        </button>
        {quantity}
        <button className="btn p-0">
          <FontAwesomeIcon
            icon={faChevronDown}
            onClick={() => {
              if (quantity === 1) {
                dispatch(removeItem(id));
              }
              dispatch(decrease(id));
            }}
          />
        </button>
      </td>
      <td>
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          -
        </button>
      </td>
    </tr>
  );
}
