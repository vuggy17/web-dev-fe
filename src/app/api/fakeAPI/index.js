import axiosClient from "@api/axiosClient";

import axios from "axios";
import { BLOGS, SLIDES, TAGS } from "./fakeData";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export const callAPI = async (url, options = {}) => {
  const { time, response, status, data } = options;
  return new Promise((resolve, reject) => {
    console.log(
      `✈️✈️ Fake API called url ${url},request: ${data}, response: ${response} `
    );
    setTimeout(() => {
      switch (status || 200) {
        case 200:
          resolve(response || { data: "no-response" });
          break;

        default:
          reject({ data: "error" });
          break;
      }
    }, time || 1000);
  });
};

export const fakeAPI = {
  getTags: async () => {
    try {
      let response = await callAPI("/landing/tags", { status: 400 });

      return response;
    } catch (error) {
      return [];
    }
  },
  getHomepageData: async () => {
    const getTags = callAPI("/tags", { time: 2000, response: TAGS });
    const getSlides = callAPI("/slide", { time: 1000, response: SLIDES });
    const getBlogs = callAPI("/blog", { time: 5000, response: BLOGS });
    const response = await Promise.all([getTags, getSlides, getBlogs])
      .then((res) => {
        let a = getRandomInt(1, 20) * 100;
        return {
          tags: res[0],
          slides: res[1],
          blogs: res[2],
          image: `https://picsum.photos/${a}/${a}`,
        };
      })
      .catch((error) => {
        return [];
      });
    return response;
  },
};
