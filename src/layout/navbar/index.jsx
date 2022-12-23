import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { openHamburgerMenu } from "../../app/lib/GoogleAnalytics/eventAnalytics";
import styles from "./navbar.module.scss";

export default function Navbar({ appRoute, onOpenSearch }) {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const blog_categories = useSelector((state) => state.common.blogCategories);
  const shop_categories = useSelector((state) => state.common.shopCategories);

  const router = useRouter();
  useEffect(() => {
    setExpandNavbar(false);
  }, [appRoute.asPath]);
  const { cartItemsQuantity } = useSelector((state) => state.cart);
  return (
    <>
      <div className={styles.wrapper}>
        <div
          onClick={() => {
            if (!expandNavbar) {
              //nếu mở navbar -- Google Analytics
              openHamburgerMenu();
            }
            setExpandNavbar(!expandNavbar);
          }}
          className={`${styles.wrapper__hamburgerBar}`}
        >
          <i className="bx bx-menu"></i>
        </div>
        <div className={styles.wrapper__headerLeft}>
          <div className={styles.headerSocial}>
            <a
              href="https://www.facebook.com/profile.php?id=100009362074337"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="bx bxl-twitter"></i>
            </a>
                  
            <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
              <i className="bx bxl-pinterest"></i>
            </a> 
            */}
            <a
              href="https://www.instagram.com/drdongphuong/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>

            <Link passHref href="/search">
              <div className={styles.searchBtn} target="_blank">
                <i className="bx bx-search"></i>
              </div>
            </Link>
          </div>
        </div>
        <div className={`${styles.wrapper__headerCenter}`}>
          <ul
            className={`${styles.mainMenu} ${expandNavbar ? styles.mainMenuExpand : styles.mainMenuCollapse
              }`}
          >
            <li className={styles.mainMenu__menuItem}>
              <Link href="/" scroll passHref>
                <div className={styles.mainMenu__menuItem__navLink}>
                  TRANG CHỦ
                </div>
              </Link>
            </li>

            <li className={styles.mainMenu__menuItem}>
              <div className={styles.mainMenu__menuItem__navLink}>
                <Link href="/shop" passHref scroll>
                  <span
                    onClick={() => {
                      router.push("/shop");
                    }}
                    className={styles.mainMenu__menuItem__navLink__title}
                    style={{ marginRight: "8px" }}
                  >
                    SẢN PHẨM
                  </span>
                </Link>
                <div
                  className={styles.mainMenu__menuItem__navLink__iconWrapper}
                >
                  {/* <div className="styles.mainMenu__menuItem__navLink__icon"> */}
                  <i
                    style={{ fontSize: "13px" }}
                    className={`bx bx-chevron-down `}
                  ></i>
                  {/* </div> */}
                </div>
              </div>
              <div className={`${styles.dropdownMenuContainer}`}>
                <ul className={styles.dropdownMenu}>
                  {shop_categories
                    ? shop_categories.map((cate) => {
                      const { id, name, path, children } = cate;
                      return (
                        <li key={id} className={styles.dropdownMenu__item}>
                          <div className={styles.dropdownMenu__item__title}>
                            <Link href={`/shop/${path}`} passHref scroll>
                              <span className="cursor-pointer">{name}</span>
                            </Link>
                            {(children || []).length > 0 ? (
                              <i
                                style={{ fontSize: "13px" }}
                                className="bx bx-chevron-right"
                              ></i>
                            ) : (
                              ""
                            )}
                          </div>
                          {children || [].length > 0 ? (
                            <div className={styles.subMenuDropdownContainer}>
                              <ul className={styles.subMenuDropdown}>
                                {children.map((child) => {
                                  const { id, name, path } = child;
                                  return (
                                    <li
                                      key={id}
                                      className={styles.subMenuDropdown__item}
                                    >
                                      <Link
                                        href={`/shop/${path}`}
                                        passHref
                                        scroll
                                      >
                                        <div
                                          className={
                                            styles.subMenuDropdown__item__title
                                          }
                                        >
                                          <span>{name}</span>
                                        </div>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </li>
                      );
                    })
                    : []}
                </ul>
              </div>
            </li>

            <li className={styles.mainMenu__menuItem}>
              <div className={styles.mainMenu__menuItem__navLink}>
                <Link href="/blogs" passHref scroll>
                  <span
                    onClick={() => {
                      router.push("/blogs");
                    }}
                    className={styles.mainMenu__menuItem__navLink__title}
                    style={{ marginRight: "8px" }}
                  >
                    BÀI VIẾT
                  </span>
                </Link>
                <div
                  className={styles.mainMenu__menuItem__navLink__iconWrapper}
                >
                  {/* <div className="styles.mainMenu__menuItem__navLink__icon"> */}
                  <i
                    style={{ fontSize: "13px" }}
                    className={`bx bx-chevron-down `}
                  ></i>
                  {/* </div> */}
                </div>
              </div>
              <div className={`${styles.dropdownMenuContainer}`}>
                <ul className={styles.dropdownMenu}>
                  {blog_categories
                    ? blog_categories.map((cate) => {
                      const { id, name, path, children } = cate;
                      return (
                        <li key={id} className={styles.dropdownMenu__item}>
                          <div className={styles.dropdownMenu__item__title}>
                            <Link href={`/category/${path}`} passHref scroll>
                              <span className="cursor-pointer">{name}</span>
                            </Link>
                            {(children || []).length > 0 ? (
                              <i
                                style={{ fontSize: "13px" }}
                                className="bx bx-chevron-right"
                              ></i>
                            ) : (
                              ""
                            )}
                          </div>
                          {children || [].length > 0 ? (
                            <div className={styles.subMenuDropdownContainer}>
                              <ul className={styles.subMenuDropdown}>
                                {children.map((child) => {
                                  const { id, name, path } = child;
                                  return (
                                    <li
                                      key={id}
                                      className={styles.subMenuDropdown__item}
                                    >
                                      <Link
                                        href={`/category/${path}`}
                                        passHref
                                        scroll
                                      >
                                        <div
                                          className={
                                            styles.subMenuDropdown__item__title
                                          }
                                        >
                                          <span>{name}</span>
                                        </div>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </li>
                      );
                    })
                    : []}
                </ul>
              </div>
            </li>

            <li className={styles.mainMenu__menuItem}>
              <Link passHref href="/preview/dich-vu">
                <div className={styles.mainMenu__menuItem__navLink}>
                  DỊCH VỤ
                </div>
              </Link>
            </li>
            {/* <li className={styles.mainMenu__menuItem}>
              <Link passHref href="/preview/hinh-anh">
                <div className={styles.mainMenu__menuItem__navLink}>
                  HÌNH ẢNH
                </div>
              </Link>
            </li> */}
            <li className={styles.mainMenu__menuItem}>
              <Link passHref href="/about-me">
                <div className={styles.mainMenu__menuItem__navLink}>VỀ TÔI</div>
              </Link>
            </li>
            {/* <li className={styles.mainMenu__menuItem}>
              <Link passHref href="/about-me">
              <div className={styles.mainMenu__menuItem__navLink}>
                  LIÊN HỆ
                </div>
              </Link>
            </li> */}
            {/* <li className={styles.mainMenu__menuItem}>
              <Link href="/for-demo" scroll passHref>
                <div className={styles.mainMenu__menuItem__navLink}>DEMO</div>
              </Link>
            </li> */}
          </ul>
        </div>
        <div className={styles.wrapper__headerRight}>
          <Link passHref href="/search">
            <div className={styles.searchBar}>
              <div className="bg-white py-1 px-2 flex-1 flex justify-between border border-transparent transform transition duration-150 hover:border-next-primary">
                <span className={styles.searchBar__title}>Tìm kiếm ...</span>
                <i
                  style={{ fontSize: "20px", fontWeight: "bolder" }}
                  className="bx bx-search"
                ></i>
              </div>
            </div>
          </Link>
          <Link passHref href="/cart">
            <div className={styles.cart}>
              <i
                style={{ fontSize: "20px", fontWeight: "bolder" }}
                className="bx bxs-cart-alt"
              ></i>
              <div className={styles.cart__amount}>{cartItemsQuantity}</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
