export const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;
export const BASE_URL_BE = process.env.NEXT_PUBLIC_BASE_URL_BE;
export const BASE_URL_FE = process.env.NEXT_PUBLIC_BASE_URL_FE;
export const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
export const COOKIE_CART = "dongphuongblog_cart";
export const CHECKOUT_INFOR = "dongphuongblog_checkoutInfor";
export const LOCALSTORAGE_CART = "dongphuongblog_cart";

type InformationPageType = {
  name: string;
  slug: string;
  pathDb: string;
};
export const INFORMATION_PAGE: {
  HuongDanMuaHang: InformationPageType;
  ChinhSachDoiTra: InformationPageType;
  PhuongThucThanhToan: InformationPageType;
  PhuongThucVanChuyen: InformationPageType;
  DieuKhoanDichVu: InformationPageType;
  LienHe: InformationPageType;
  DichVu: InformationPageType;
} = {
  HuongDanMuaHang: {
    name: "Hướng dẫn mua hàng",
    slug: "huong-dan-mua-hang",
    pathDb: "huong-dan-mua-hang",
  },
  ChinhSachDoiTra: {
    name: "Chính sách đổi trả",
    slug: "chinh-sach-doi-tra",
    pathDb: "chinh-sach-doi-traa",
  },
  PhuongThucThanhToan: {
    name: "Phương thức thanh toán",
    slug: "phuong-thuc-thanh-toan",
    pathDb: "phuong-thuc-thanh-toan",
  },
  PhuongThucVanChuyen: {
    name: "Phương thức vận chuyển",
    slug: "phuong-thuc-van-chuyen",
    pathDb: "phuong-thuc-van-chuyen",
  },
  DieuKhoanDichVu: {
    name: "Điều khoản dịch vụ",
    slug: "dieu-khoan-dich-vu",
    pathDb: "dieu-khoan-dich-vu",
  },
  DichVu: {
    name: "Điều khoản dịch vụ",
    slug: "dieu-khoan-dich-vu",
    pathDb: "dich-vu",
  },
  LienHe: { name: "Liên hệ", slug: "lien-he", pathDb: "lien-he" },
};

// NEXT_PUBLIC_GA_ID - for .env
