import DistrictDao from "../DataAccess/DistrictDAO";
import ProvinceDao from "../DataAccess/ProvinceDAO";
import WardDao from "../DataAccess/WardDAO";

const provinceDao = new ProvinceDao();
const districtDao = new DistrictDao();
const wardDao = new WardDao();

export async function getAllProvinces() {
  const provinces = provinceDao.find(NaN);
  return provinces;
}

export async function getDistricts(provinceId: number) {
  const districts = districtDao.find(provinceId);
  return districts;
}
export async function getWards(districtId: number) {
  const wards = wardDao.find(districtId);
  return wards;
}
