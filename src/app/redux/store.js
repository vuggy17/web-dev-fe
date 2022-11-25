import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import commonReducer from "./commonSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    common: commonReducer,
  },
});
