import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../assets/features/Product";
import basketReducer from "../assets/features/Basket";

export default configureStore({
  reducer: {
    products: productReducer,
    basket: basketReducer,
  },
});
