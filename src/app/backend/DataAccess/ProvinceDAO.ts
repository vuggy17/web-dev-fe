import { ProvinceAtrributes } from "../models/Adminitrative";
import * as fs from "fs";
import * as path from "path";

export default class ProvinceDao {
  public find(id: number): Array<ProvinceAtrributes> {
    let provinces: Array<ProvinceAtrributes>;
    try {
      const jsonPath = path.resolve("./public", "data/provinces.json");
      const rawdata = fs.readFileSync(jsonPath, "utf8");
      provinces = JSON.parse(rawdata);
    } catch (error) {
      provinces = [];
    }

    if (isNaN(id)) {
      return provinces;
    } else {
      return provinces;
    }
  }
}
