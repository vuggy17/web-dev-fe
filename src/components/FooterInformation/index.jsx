import { AtSymbolIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import React from "react";
import { useSelector } from "react-redux";
import ContactElement from "./ContactElement";
import style from "./FooterInformation.module.scss";
import LinkElement from "./LinkElement";
import HoTroKhachHang from "./HoTroKhachHang";

function FooterInformation() {
  const blogCategories = useSelector((state) => state.common.blogCategories);
  return (
    <div
      className="w-full flex flex-col justify-around items-center md:grid md:grid-cols-3 md:items-start md:gap-7"
      style={{ color: "#4e3618" }}
    >
      <div className="text-center flex flex-col items-center mb-10 md:text-left md:items-start">
        {/* <div className="mb-4">
          <h3 className={style.header}>CÔNG TY TNHH MỘT MÌNH TAO</h3>
          <CompanyInformation title="Head Office:" address="61/11 đường Cô Giang, phường Cầu Ông Lãnh, quận 1, TPHCM" />
          <CompanyInformation title="Branch Office:" address="Tầng 07, Building 52 Nguyễn Chí Thanh, Phường Láng Thượng, Quận Đống Đa, TP. Hà Nội" />
          <CompanyInformation title="Công ty cổ phần Nền Tảng - MST:" address="0304263353 do sở Kế Hoạch và Đầu Tư TPHCM cấp ngày 31/03/2006" />
        </div> */}

        <div className="mb-4">
          <h3 className={style.header}>THÔNG TIN LIÊN HỆ</h3>
          <ContactElement
            Icon={PhoneIcon}
            contactInfor="Điện thoại: 0943.993.665"
          />
          <ContactElement
            Icon={MailIcon}
            contactInfor="Email: drdphuong@gmail.com"
          />
          <ContactElement Icon={AtSymbolIcon} contactInfor="drdongphuong.com" />
        </div>

        <div className="flex">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100009362074337"
          >
            <div className="mr-4 cursor-pointer">
              <FacebookIcon style={{ fontSize: "30px" }} />
            </div>
          </a>
          {/* <Link target="_blank" rel="noreferrer" href="https://www.instagram.com/drdongphuong/">
            <div className="mr-4 cursor-pointer">
              <YouTubeIcon style={{ fontSize: '30px' }} />
            </div>
          </Link> */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/drdongphuong/"
          >
            <div className="cursor-pointer">
              <InstagramIcon style={{ fontSize: "30px" }} />
            </div>
          </a>
        </div>
      </div>

      <div className="text-center flex flex-col items-center mb-10 md:text-left md:items-start mx-auto">
        <h3 className={style.header}>DR ĐÔNG PHƯƠNG</h3>
        <div className="capitalize">
          <LinkElement title="Bài viết" link="/blogs" />
          <LinkElement title="Sản phẩm" link="/shop" />
          {/* <LinkElement title="Hình ảnh" link="/preview/hinh-anh" /> */}
          <LinkElement title="Dịch Vụ" link="/preview/dich-vu" />
          <LinkElement title="Về tôi" link="/about-me" />
        </div>
        {/* <LinkElement title="Câu chuyện thương hiệu" link="#" />
        <LinkElement title="Giá trị cốt lõi của Teoxane" link="#" />
        <LinkElement title="Nhà sáng lập Teoxane" link="#" /> */}
      </div>

      <div className="text-center flex flex-col items-center mb-10 md:text-left md:items-start mx-auto">
        <h3 className={style.header}>HỖ TRỢ KHÁCH HÀNG</h3>
        <HoTroKhachHang />
        {/* <LinkElement title="Hướng dẫn mua hàng" link="#" />
        <LinkElement title="Phương thức thanh toán" link="#" />
        <LinkElement title="Phương thức vận chuyển" link="#" />
        <LinkElement title="Chính sách đổi trả" link="/information/chinh-sach-doi-tra" />
        <LinkElement title="Điều khoản dịch vụ" link="#" />
        <LinkElement title="Liên hệ" link="#" /> */}
      </div>
    </div>
  );
}

export default FooterInformation;
