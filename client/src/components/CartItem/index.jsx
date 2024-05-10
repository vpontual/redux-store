import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartQuantity,
} from "../store/actions/cartActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(item._id));
  };

  const updateQuantityHandler = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch(removeFromCart(item._id));
    } else {
      dispatch(updateCartQuantity(item._id, parseInt(value)));
    }
  };

  return (
    <div className="flex-row">
      <div>
        <img src={`/images/${item.image}`} alt="" />
      </div>
      <div>
        <div>
          {item.name}, ${item.price}
        </div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={updateQuantityHandler}
          />
          <span role="img" aria-label="trash" onClick={removeFromCartHandler}>
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
