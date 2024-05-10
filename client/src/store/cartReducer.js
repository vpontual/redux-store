import {
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  UPDATE_CART_QUANTITY,
  TOGGLE_CART,
} from "./cartActions";

const initialState = {
  cart: [],
  cartOpen: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };
    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    default:
      return state;
  }
};

export default cartReducer;
