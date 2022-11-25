import landingApi from "@api/landingApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list_to_tree } from "@utils/myUtils";

const initialState = {
  latestBlogs: null,
  tags: null,
  homepageSlide: null,
  blogpageSlide: null,
  blogCategories: [],
  shopCategories: [],
  aboutAuthor: [],
};
//function
export const fetchBlogCategories = createAsyncThunk(
  "commmon/fetchBlogCategory",
  async (payload, thunk) => {
    let categories = await landingApi.getBlogCategory();
    categories = list_to_tree(categories);
    thunk.dispatch(setBlogCategories(categories));
    return categories;
  }
);
export const fetchShopCategories = createAsyncThunk(
  "commmon/fetchShopCategory",
  async (payload, thunk) => {
    let categories = await landingApi.getShopCategory();
    categories = list_to_tree(categories);
    thunk.dispatch(setShopCategories(categories));
    return categories;
  }
);
export const fetchAuthorInfor = createAsyncThunk(
  "commmon/fetchAuthorInfor",
  async (payload, thunk) => {
    let author = await landingApi.getAuthorInfor();

    thunk.dispatch(setAuthorInfor(author));
    return author;
  }
);
export const fetchLatestBlogs = createAsyncThunk(
  "commmon/fetchLatestBlogs",
  async (payload, thunk) => {
    let author = await landingApi.getLatestBlogs();

    thunk.dispatch(setLatestBlogs(author));
    return author;
  }
);
export const fetchTags = createAsyncThunk(
  "commmon/fetchTags",
  async (payload, thunk) => {
    let author = await landingApi.getTags();

    thunk.dispatch(setTags(author));
    return author;
  }
);

export const cartSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setBlogCategories: (state, action) => {
      state.blogCategories = action.payload;
    },
    setShopCategories: (state, action) => {
      state.shopCategories = action.payload;
    },
    setAuthorInfor: (state, action) => {
      state.aboutAuthor = action.payload;
    },
    setTags: (state, action) => {
      state.tags = action.payload;
    },
    setLatestBlogs: (state, action) => {
      state.latestBlogs = action.payload;
    },
  },
});
// Reducers and actions
export const {
  setBlogCategories,
  setShopCategories,
  setAuthorInfor,
  setLatestBlogs,
  setTags,
} = cartSlice.actions;

export default cartSlice.reducer;
