interface AdminitrativeAtrributes {
  id: number;
  type: string;
  name: string;
}

export interface WardAttributes extends AdminitrativeAtrributes {
  district_id: number;
}

export interface DistrictAttributes extends AdminitrativeAtrributes {
  province_id: number;
}

export interface ProvinceAtrributes extends AdminitrativeAtrributes {}
