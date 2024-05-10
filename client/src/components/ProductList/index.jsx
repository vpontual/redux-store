import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";
import spinner from "../../assets/spinner.gif";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const currentCategory = useSelector(
    (state) => state.categories.currentCategory
  );
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filterProducts = () => {
    if (!currentCategory) {
      return products;
    }
    return products.filter(
      (product) => product.category._id === currentCategory
    );
  };

  const filteredProducts = filterProducts();

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {products.length ? (
        <div className="flex-row">
          {filteredProducts.map((product) => (
            <ProductItem key={product._id} item={product} />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
};

export default ProductList;
