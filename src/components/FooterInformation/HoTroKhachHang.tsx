import { INFORMATION_PAGE } from "@definitions/constants";
import React, { ReactElement } from "react";
import LinkElement from "./LinkElement";

export default function HoTroKhachHang(): ReactElement {
  const {
    HuongDanMuaHang,
    ChinhSachDoiTra,
    PhuongThucThanhToan,
    PhuongThucVanChuyen,
    DieuKhoanDichVu,
    LienHe,
  } = INFORMATION_PAGE;
  const menus: Array<{ name: string; slug: string }> = [
    HuongDanMuaHang,
    PhuongThucThanhToan,
    PhuongThucVanChuyen,
    ChinhSachDoiTra,
    DieuKhoanDichVu,
    LienHe,
  ];
  return (
    <div className="">
      {menus.map((item) => {
        return (
          <LinkElement
            key={item.slug}
            title={item.name}
            link={`/information/${item.slug}`}
          />
        );
      })}
    </div>
  );
}
