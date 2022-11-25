import { INFORMATION_PAGE } from "@definitions/constants";
import React, { ReactElement } from "react";
import Link from "next/link";
import CustomLink from "@components/Common/CustomLink";

interface Props {}

export default function PageMenus({}: Props): ReactElement {
  function ListPages({}: Props): ReactElement {
    const {
      ChinhSachDoiTra,
      PhuongThucThanhToan,
      PhuongThucVanChuyen,
      HuongDanMuaHang,
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
            <div key={item.slug}>
              <CustomLink
                href={`/information/${item.slug}`}
                defaultClass="cursor-pointer inline-block text-sm py-4 px-10  uppercase   transition ease-linear mb-2"
                activeClass="bg-primary text-gray-50"
                nonActiveClass="bg-secondary  text-textPrimary"
              >
                {item.name}
              </CustomLink>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div>
      <ListPages />
    </div>
  );
}
