import { BASE_URL_IMAGE } from "@definitions/constants";

// TODO: rever to original
export const imageLoader = ({ src }) => {
  return `${BASE_URL_IMAGE}${src}`;
};


// // TODO: remove this
// export const imageLoader = ({ src }) => {
//   return "https://source.unsplash.com/random/1920x500"
// }