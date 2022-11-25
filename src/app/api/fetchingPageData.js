import { BASE_URL_API } from "@definitions/constants";
import axios from "axios";
const baseURL = BASE_URL_API;

export const fetchingPageData = {
  homepage: async () => {
    const getTags = axios
      .get(baseURL + "/landing/tag")
      .then((res) => res.data)
      .catch((error) => {
        return null;
      });
    const getSlides = axios
      .get(baseURL + "/landing/slide/homepage")
      .then((res) => {
        if (res.data?.is_visible) {
          return res.data;
        } else return [];
      })
      .catch((error) => {
        return null;
      });
    const getTestimonials = axios
      .get(baseURL + "/landing/slide/testimonial")
      .then((res) => {
        if (res.data?.is_visible) {
          return res.data;
        } else return [];
      })
      .catch((error) => {
        return null;
      });
    const getAllBlogs = axios
      .get(baseURL + "/landing/blog")
      .then((res) => res.data)
      .catch((error) => {
        return [];
      });
    const getLatestBlogs = axios
      .get(baseURL + "/landing/blog/new")
      .then((res) => res.data)
      .catch((error) => {
        return [];
      });
    const getDealOfWeek = axios
      .get(baseURL + "/landing/deal-of-week")
      .then((res) => res.data)
      .catch((error) => {
        return [];
      });
    const response = await axios
      .all([
        getTags,
        getSlides,
        getAllBlogs,
        getLatestBlogs,
        getDealOfWeek,
        getTestimonials,
      ])
      .then((...response) => {
        const tags = response[0][0];
        const mainSlide = response[0][1];
        const allBlogs = response[0][2];
        const latestBlogs = response[0][3];
        const productsDealOfWeek = response[0][4];
        const testimonials = response[0][5];
        // return response;
        return {
          tags,
          mainSlide,
          allBlogs,
          latestBlogs,
          productsDealOfWeek,
          testimonials,
        };
      })
      .catch((error) => {
        return null;
      });
    return response;
  },
  shopPage: async () => {
    const getSlides = axios
      .get(baseURL + "/landing/slide/allProduct")
      .then((res) => {
        if (res.data?.is_visible) {
          return res.data;
        } else return [];
      })
      .catch((error) => {
        return null;
      });
    const getProducts = axios
      .get(baseURL + "/landing/product")
      .then((res) => res.data)
      .catch((error) => {
        return [];
      });
    const response = await axios
      .all([getSlides, getProducts])
      .then((...response) => {
        const mainSlide = response[0][0];
        const listProducts = response[0][1];
        // return response;
        return { mainSlide, listProducts };
      })
      .catch((error) => {
        return null;
      });
    return response;
  },
  blogpage: async () => {
    const getTags = axios.get(baseURL + "/landing/tag").then((res) => res.data);
    const getSlides = axios
      .get(baseURL + "/landing/slide/allblog")
      .then((res) => {
        if (res.data?.is_visible) {
          return res.data;
        } else return [];
      })
      .catch((error) => {
        return null;
      });
    const getBlogs = axios
      .get(baseURL + "/landing/blog")
      .then((res) => res.data)
      .catch((error) => {
        return [];
      });
    const getLatestBlogs = axios
      .get(baseURL + "/landing/blog/new")
      .then((res) => res.data)
      .catch((error) => {
        return [];
      });
    const getTestimonials = axios
      .get(baseURL + "/landing/slide/testimonial")
      .then((res) => {
        if (res.data?.is_visible) {
          return res.data;
        } else return [];
      })
      .catch((error) => {
        return null;
      });
    const response = await axios
      .all([getTags, getSlides, getBlogs, getLatestBlogs, getTestimonials])
      .then((...response) => {
        const tags = response[0][0];
        const mainSlide = response[0][1];
        const allBlogs = response[0][2];
        const latestBlogs = response[0][3];
        const testimonials = response[0][4];
        // return response;
        return { tags, mainSlide, allBlogs, latestBlogs, testimonials };
      })
      .catch((error) => {
        return null;
      });
    //
    return response;
  },
  blogDetail: async ({ blogPath }) => {
    const getTags = axios
      .get(baseURL + "/landing/tag")
      .then((res) => res.data)
      .catch((error) => []);

    const getPostAndComment = axios
      .get(`${baseURL}/landing/blog/${blogPath}`)
      .then(async (res) => {
        let post = res.data;
        let comments = await axios
          .get(`${baseURL}/landing/comment?blogId=${post.id}`)
          .then((res) => {
            return { ...res.data, id: post.id };
          })
          .catch((err) => []);
        return { post, comments };
      })
      .catch((error) => {
        return { post: null, comments: null };
      });
    const getLatestBlogs = axios
      .get(baseURL + "/landing/blog/new")
      .then((res) => res.data)
      .catch((error) => []);

    const getBlogProducts = axios
      .get(baseURL + `/landing/blog/${blogPath}/product`)
      .then((res) => res.data)
      .catch((error) => []);

    const response = await axios
      .all([getTags, getPostAndComment, getLatestBlogs, getBlogProducts])
      .then((...response) => {
        const tags = response[0][0];
        const postAndComment = response[0][1];
        const latestBlogs = response[0][2];
        const blogProducts = response[0][3];
        return {
          tags,
          latestBlogs,
          post: postAndComment.post,
          blogComments: postAndComment.comments,
          blogProducts,
        };
      })
      .catch((error) => {
        return null;
      });
    return response;
  },
  productDetail: async ({ productPath }) => {
    const getProduct = axios
      .get(baseURL + "/landing/product/" + productPath)
      .then(async (res) => {
        const productData = res.data;
        let relatedProducts = await axios
          .get(
            baseURL + ("/landing/product?category=" + productData.category_id)
          )
          .then((res) => {
            return res.data;
          })
          .catch((err) => []);

        return {
          productData,
          relatedProducts,
        };
        res.data;
      })
      .catch((error) => []);

    const response = await axios
      .all([getProduct])
      .then((...response) => {
        const { relatedProducts, productData } = response[0][0];
        return {
          productData,
          relatedProducts,
        };
      })
      .catch((error) => {
        return null;
      });
    return response;
  },
  getTop1000Blogs: async () => {
    const blogs = axios
      .get(baseURL + "/landing/blog/new?limit=1000")
      .then((res) => res.data)
      .catch((error) => {
        return [];
      });
    return blogs;
  },
  getTop1000Products: async () => {
    const blogs = axios
      .get(baseURL + "/landing/product")
      .then((res) => res.data)
      .catch((error) => {
        return [];
      });
    return blogs;
  },
  getBlogCategories: async () => {
    try {
      let res = await axios.get(baseURL + "/landing/category");
      if (res.data) {
        return res.data;
      }
    } catch (error) {
      return [];
    } finally {
    }
  },
  getShopCategories: async () => {
    try {
      let res = await axios.get(baseURL + "/landing/product-category");
      if (res.data) {
        return res.data;
      }
    } catch (error) {
      return [];
    } finally {
    }
  },
  blogsByCategory: async ({ categoryPath }) => {
    const getSlides = axios
      .get(baseURL + "/landing/slide/allBlog")
      .then((res) => res.data)
      .catch((error) => {
        return null;
      });

    const getBlogs = axios
      .get(baseURL + "/landing/blog?category=" + categoryPath)
      .then((res) => res.data)
      .catch((error) => {
        return [];
      });
    const getBlogCategories = axios
      .get(baseURL + "/landing/category")
      .then((res) => res.data)
      .catch((error) => {
        return null;
      });
    const getTestimonials = axios
      .get(baseURL + "/landing/slide/testimonial")
      .then((res) => {
        if (res.data?.is_visible) {
          return res.data;
        } else return [];
      })
      .catch((error) => {
        return null;
      });
    const response = await axios
      .all([getSlides, getBlogs, getBlogCategories, getTestimonials])
      .then((...response) => {
        const mainSlide = response[0][0];
        const allBlogs = response[0][1];
        const categories = response[0][2];
        const testimonials = response[0][3];
        let currentCategory = categories.find((e) => e.path === categoryPath);
        console.log("🚀🚀 BLOGPAGE FETCH BLOG BY CATEGORY", {
          categoryPath,
          allBlogs,
        });
        return { mainSlide, allBlogs, currentCategory, testimonials };
      })
      .catch((error) => {
        return null;
      });
    return response;
  },
  shopByCategory: async ({ categoryPath }) => {
    const getSlides = axios
      .get(baseURL + "/landing/slide/allProducts")
      .then((res) => res.data)
      .catch((error) => {
        return null;
      });

    const getProducts = axios
      .get(baseURL + ("/landing/product?category=" + categoryPath))
      .then((res) => res.data)
      .catch((error) => {
        return [];
      });
    const getShopCategories = axios
      .get(baseURL + "/landing/product-category")
      .then((res) => res.data)
      .catch((error) => {
        return [];
      });
    const response = await axios
      .all([getSlides, getProducts, getShopCategories])
      .then((...response) => {
        const mainSlide = response[0][0];
        const listProducts = response[0][1];
        const categories = response[0][2];
        //find current blog category
        let currentCategory = categories.find((e) => e.path === categoryPath);
        return { mainSlide, listProducts, currentCategory };
      })
      .catch((error) => {
        return null;
      });
    return response;
  },
  aboutme: async () => {
    const about = axios
      .get(baseURL + "/landing/about")
      .then((res) => res.data)
      .catch((error) => {
        return [];
      });
    return about;
  },
  getInformationPage: async (path) => {
    console.log("getInformatoin page");
    const post = await axios
      .get(`${baseURL}/landing/preview/${path}`)
      .then((res) => {
        console.log("res ne", path, res.data);
        return res.data;
      })
      .catch((error) => {
        return {};
      });
    return post;
  },
  getPreviewPost: async (blogPath) => {
    const getTags = axios
      .get(baseURL + "/landing/tag")
      .then((res) => res.data)
      .catch((error) => []);

    const getPostAndComment = axios
      .get(`${baseURL}/landing/preview/${blogPath}`)
      .then(async (res) => {
        let post = res.data;
        let comments = await axios
          .get(`${baseURL}/landing/comment?blogId=${post.id}`)
          .then((res) => {
            return { ...res.data, id: post.id };
          })
          .catch((err) => []);
        return { post, comments };
      })
      .catch((error) => {
        return { post: null, comments: null };
      });
    const getLatestBlogs = axios
      .get(baseURL + "/landing/blog/new")
      .then((res) => res.data)
      .catch((error) => []);

    const getBlogProducts = axios
      .get(baseURL + `/landing/blog/${blogPath}/product`)
      .then((res) => res.data)
      .catch((error) => []);

    const response = await axios
      .all([getTags, getPostAndComment, getLatestBlogs, getBlogProducts])
      .then((...response) => {
        const tags = response[0][0];
        const postAndComment = response[0][1];
        const latestBlogs = response[0][2];
        const blogProducts = response[0][3];
        return {
          tags,
          latestBlogs,
          post: postAndComment.post,
          blogComments: postAndComment.comments,
          blogProducts,
        };
      })
      .catch((error) => {
        return null;
      });
    return response;
  },
};
