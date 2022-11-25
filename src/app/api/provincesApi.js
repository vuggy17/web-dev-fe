import axios from "axios";

const provinceApi = {
  getAllProvinces: async () => {
    try {
      let res = await axios.get("/api/vn-administrative/province");

      if (res.data) {
        return res.data;
      }
    } catch (error) {
      return [];
    }
  },
  getDistricts: async (provinceId) => {
    try {
      let res = await axios.get(
        `/api/vn-administrative/province/${provinceId}/district`
      );

      if (res.data) {
        return res.data;
      }
    } catch (error) {
      return [];
    }
  },
  getWards: async (districtId) => {
    try {
      let res = await axios.get(
        `/api/vn-administrative/district/${districtId}/ward`
      );

      if (res.data) {
        return res.data;
      }
    } catch (error) {
      return [];
    }
  },
};

export default provinceApi;
