import { DistrictAttributes } from "../models/Adminitrative";
import * as fs from "fs";
import * as path from "path";

export default class DistrictDao {
  public find(provinceId: number): Array<DistrictAttributes> {
    let districts: Array<DistrictAttributes>;
    try {
      const jsonPath = path.resolve("./public", "data/districts.json");
      const rawdata = fs.readFileSync(jsonPath, "utf8");
      districts = JSON.parse(rawdata);
    } catch (error) {
      districts = [];
    }

    if (isNaN(provinceId)) {
      return districts;
    } else {
      districts = districts.filter((e) => e.province_id === provinceId);
      return districts;
    }
  }
}
