import landingApi from "@api/landingApi";
import { COOKIE_CART } from "@definitions/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie, removeCookie } from "@utils/cookie";

const initialState = {
  cartItems: [],
  cartItemsQuantity: 0,
  isLoading: false,
  error: null,
};

export const orderAction = createAsyncThunk(
  "cart/orderAction",
  async (payload, thunk) => {
    const { getState, dispatch } = thunk;
    try {
      dispatch(setLoading(true));
      const { customer_email, customer_name, phone, address } = payload;
      const items = getState().cart.cartItems.map((item) => {
        const { product_id, variant_id, number } = item;
        return { product_id, variant_id, number };
      });
      const cart = { customer_email, customer_name, phone, address, items };
      let res = await landingApi.postOrder(cart);
      if (res.data) {
        alert("Đặt hàng thành công");
        dispatch(emptyCart);
      }
    } catch (error) {
      dispatch(setError(error.response.data));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export function calcQuantity(cart) {
  if (!cart) return 0;
  let quantity = 0;
  cart.forEach((item) => {
    quantity += item.number;
  });
  return quantity;
}

export function calcCartCost(cart) {
  if (!cart) return;
  let total = 0;
  let res = cart.map((item) => {
    let subTotal;

    subTotal = item.price * item.number;
    total += subTotal;
    return { ...item, subTotal };
  });
  return { total, cartItems: res };
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initCart: (state) => {
      let cart = [];
      try {
        cart = JSON.parse(getCookie(COOKIE_CART)) || [];
      } catch (e) {
        cart = [];
      }
      state.cartItems = cart;
      state.cartItemsQuantity = calcQuantity(cart);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setItem: (state, action) => {
      // const { product, product_id, variant_id, number, variant,price,salePrice } = action.payload;
      const itemInfo = action.payload;
      let newCart = state.cartItems;
      let index = newCart.findIndex(
        (e) => e.variant_id === itemInfo.variant_id
      );
      if (index >= 0) {
        newCart[index] = { ...itemInfo };
      } else {
        newCart.push({ ...itemInfo });
      }
      state.cartItems = newCart;
      state.cartItemsQuantity = calcQuantity(newCart);
      setCookie(COOKIE_CART, JSON.stringify(newCart));
    },
    addItem: (state, action) => {
      const itemInfo = action.payload;
      let newCart = state.cartItems;
      let index = newCart.findIndex(
        (e) => e.variant_id === itemInfo.variant_id
      );
      if (index >= 0) {
        newCart[index] = {
          ...itemInfo,
          number: (newCart[index].number += itemInfo.number),
        };
      } else {
        newCart.push({ ...itemInfo });
      }
      state.cartItems = newCart;
      state.cartItemsQuantity = calcQuantity(newCart);
      setCookie(COOKIE_CART, JSON.stringify(newCart));
    },
    removeItem: (state, action) => {
      const { product_id, variant_id } = action.payload;
      let newCart = state.cartItems;
      newCart = state.cartItems.filter(
        (e) => e.variant_id !== variant_id || e.product_id !== product_id
      );
      state.cartItems = newCart;
      state.cartItemsQuantity = calcQuantity(newCart);
      setCookie(COOKIE_CART, JSON.stringify(newCart));
    },

    emptyCart: (state) => {
      removeCookie(COOKIE_CART);
      state.cartItemsQuantity = 0;
      state.cartItems = [];
    },
  },
});
// Reducers and actions
export const {
  removeItem,
  setItem,
  initCart,
  setLoading,
  setError,
  emptyCart,
  addItem,
} = cartSlice.actions;

export default cartSlice.reducer;
