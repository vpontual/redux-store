import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./index";

// Apply middleware
const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

// Create the Redux store
const store = createStore(rootReducer, middlewareEnhancer);

export default store;
