import axios from "./axiosClient";
const landingApi = {
  getBlogCategory: async () => {
    try {
      let res = await axios.get("/landing/category");
      if (res.data) {
        return res.data;
      }
    } catch (error) {
      return [];
    } finally {
    }
  },
  getShopCategory: async () => {
    try {
      let res = await axios.get("/landing/product-category");
      if (res.data) {
        return res.data;
      }
    } catch (error) {
      return [];
    } finally {
    }
  },
  commentToBlog: async (data) => {
    try {
      let res = await axios.post("/landing/comment", data);
      if (res.data) {
        return { data: res.data };
      }
    } catch (error) {
      return { data: null, error: error.response.data.error };
    } finally {
    }
  },
  getSlide: async (location) => {
    try {
      let res = await axios.get("/landing/slide/" + location);
      //
      if (res.data) {
        return res.data;
      }
    } catch (error) {
      return null;
    } finally {
    }
  },
  postOrder: async (cart) => {
    let res = await axios.post("/landing/order", cart);
    return res;
  },
  postSubcribe: async (infor) => {
    let res = await axios.post("/landing/subscribe", infor);
    return res;
  },
  getAuthorInfor: async () => {
    try {
      let res = await axios.get("/landing/about");
      if (res.data) return res.data;
    } catch (error) {
      return null;
    }
  },
  getTags: async () => {
    try {
      let res = await axios.get("/landing/tag");
      if (res.data) return res.data;
    } catch (error) {
      return [];
    }
  },
  getLatestBlogs: async () => {
    try {
      let res = await axios.get("/landing/blog/new");
      if (res.data) return res.data;
    } catch (error) {
      return [];
    }
  },
  getBlogsByTag: async (tag) => {
    try {
      let res = await axios.get("/landing/blog?tag=" + tag);
      if (res.data) return res.data;
    } catch (error) {
      return [];
    }
  },
  getBlogsByKeyword: async (keyword) => {
    try {
      let res = await axios.get("/landing/blog?query=" + keyword);
      if (res.data) return res.data;
    } catch (error) {
      return [];
    }
  },
  getProductsByKeyword: async (keyword) => {
    try {
      let res = await axios.get("/landing/product?query=" + keyword);
      if (res.data) return res.data;
    } catch (error) {
      return [];
    }
  },
};
export default landingApi;
