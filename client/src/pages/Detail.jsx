import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/Cart";
import {
  fetchProduct,
  addToCart,
  removeFromCart,
} from "../store/actions/productActions";
import spinner from "../assets/spinner.gif";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.products.currentProduct);
  const cart = useSelector((state) => state.cart.items);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch(addToCart(id, itemInCart.purchaseQuantity + 1));
    } else {
      dispatch(addToCart(id, 1));
    }
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {product && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Products</Link>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>
            <strong>Price:</strong>${product.price}{" "}
            <button onClick={addToCartHandler}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === product._id)}
              onClick={removeFromCartHandler}
            >
              Remove from Cart
            </button>
          </p>
          <img src={`/images/${product.image}`} alt={product.name} />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
