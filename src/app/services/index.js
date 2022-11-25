import { BASE_URL_IMAGE } from "@definitions/constants";

export const imageLoader = ({ src }) => {
  return `${BASE_URL_IMAGE}${src}`;
};
