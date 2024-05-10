export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

// Action creator for updating products
export const updateProducts = (products) => {
  return {
    type: UPDATE_PRODUCTS,
    products: products,
  };
};
