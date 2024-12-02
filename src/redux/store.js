import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import reviewsReducer from "./reviewsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsReducer,
  },
});

export default store;