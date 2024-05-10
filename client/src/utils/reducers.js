// import {
//   UPDATE_PRODUCTS,
//   ADD_TO_CART,
//   UPDATE_CART_QUANTITY,
//   REMOVE_FROM_CART,
//   ADD_MULTIPLE_TO_CART,
//   UPDATE_CATEGORIES,
//   UPDATE_CURRENT_CATEGORY,
//   CLEAR_CART,
//   TOGGLE_CART,
// } from "./actions";

// // This is where we will define the initial state of the app
// export const reducer = (state, action) => {
//   // This switch statement will determine what happens to the state based on the action.type
//   switch (action.type) {
//     // UPDATE_PRODUCTS is used to update the products in the global state
//     case UPDATE_PRODUCTS:
//       // The spread operator is used to copy the current state and update the products array with the new products array
//       return {
//         ...state,
//         products: [...action.products],
//       };
//     // In the ADD_TO_CART case, we set cartOpen to true and add the product to the cart array
//     case ADD_TO_CART:
//       // The spread operator is used to copy the current state and update the cartOpen and cart arrays
//       return {
//         ...state,
//         cartOpen: true,
//         cart: [...state.cart, action.product],
//       };
//     // In the ADD_MULTIPLE_TO_CART case, we set cartOpen to true and add the products to the cart array
//     case ADD_MULTIPLE_TO_CART:
//       // The spread operator is used to copy the current state and update the cartOpen and cart arrays
//       return {
//         ...state,
//         cart: [...state.cart, ...action.products],
//       };
//     // In the UPDATE_CART_QUANTITY case, we update the quantity of a product in the cart
//     case UPDATE_CART_QUANTITY:
//       // The spread operator is used to copy the current state and update the cart array with the new quantity
//       return {
//         ...state,
//         cartOpen: true,
//         // The map method is used to update the quantity of the product in the cart
//         cart: state.cart.map((product) => {
//           if (action._id === product._id) {
//             product.purchaseQuantity = action.purchaseQuantity;
//           }
//           return product;
//         }),
//       };

//     // In the REMOVE_FROM_CART case, we remove a product from the cart
//     case REMOVE_FROM_CART:
//       // The filter method is used to remove the product from the cart
//       let newState = state.cart.filter((product) => {
//         return product._id !== action._id;
//       });

//       return {
//         ...state,
//         cartOpen: newState.length > 0,
//         cart: newState,
//       };

//     case CLEAR_CART:
//       return {
//         ...state,
//         cartOpen: false,
//         cart: [],
//       };

//     case TOGGLE_CART:
//       return {
//         ...state,
//         cartOpen: !state.cartOpen,
//       };

//     case UPDATE_CATEGORIES:
//       return {
//         ...state,
//         categories: [...action.categories],
//       };

//     case UPDATE_CURRENT_CATEGORY:
//       return {
//         ...state,
//         currentCategory: action.currentCategory,
//       };

//     // The default case is used to return the current state if the action.type does not match any of the cases
//     default:
//       return state;
//   }
// };
