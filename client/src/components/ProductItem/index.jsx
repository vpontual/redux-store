import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/actions/cartActions";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const { image, name, _id, price, quantity } = item;
  const cart = useSelector((state) => state.cart.items);

  const addToCartHandler = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      // Update existing item in cart
      dispatch(addToCart(_id, itemInCart.purchaseQuantity + 1));
    } else {
      // Add new item to cart
      dispatch(addToCart(_id, 1));
    }
  };

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
      </Link>
      <div>
        <div>
          {quantity} {pluralize("item", quantity)} in stock
        </div>
        <span>${price}</span>
      </div>
      <button onClick={addToCartHandler}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
