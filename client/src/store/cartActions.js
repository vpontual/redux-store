export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_MULTIPLE_TO_CART = "ADD_MULTIPLE_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
export const TOGGLE_CART = "TOGGLE_CART";

// Action creators for cart
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product: product,
  };
};

export const addMultipleToCart = (products) => {
  return {
    type: ADD_MULTIPLE_TO_CART,
    products: products,
  };
};

export const removeFromCart = (_id) => {
  return {
    type: REMOVE_FROM_CART,
    _id: _id,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const updateCartQuantity = (_id, purchaseQuantity) => {
  return {
    type: UPDATE_CART_QUANTITY,
    _id: _id,
    purchaseQuantity: purchaseQuantity,
  };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART,
  };
};
