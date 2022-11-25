import { WardAttributes } from "../models/Adminitrative";
import * as fs from "fs";
import * as path from "path";

export default class WardDao {
  public find(districtId: number): Array<WardAttributes> {
    let wards: Array<WardAttributes>;
    try {
      const jsonPath = path.resolve("./public", "data/wards.json");
      const rawdata = fs.readFileSync(jsonPath, "utf8");
      wards = JSON.parse(rawdata);
    } catch (error) {
      wards = [];
    }

    if (isNaN(districtId)) {
      return wards;
    } else {
      wards = wards.filter((e) => e.district_id === districtId);
      return wards;
    }
  }
}
