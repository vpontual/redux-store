import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import {
  fetchCart,
  toggleCart,
  addToCart,
  removeFromCart,
} from "../store/actions/cartActions";
import "./style.css";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const isCartOpen = useSelector((state) => state.cart.isOpen);
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };

  const calculateTotal = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  };

  const submitCheckout = () => {
    const productIds = [];
    cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });
    getCheckout({ variables: { products: productIds } });
  };

  if (!isCartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCartHandler}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCartHandler}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {cart.length ? (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              addToCart={() => dispatch(addToCart(item._id))}
              removeFromCart={() => dispatch(removeFromCart(item._id))}
            />
          ))}
          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>
            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
