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
      <div className={styles.responsiveLogo}>
        <img src="./images/official/logo/logo-white.png" />
      </div>
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
          <img src="./images/official/logo/logo-white.png" />
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
            {/* <i
              style={{ fontSize: "20px", fontWeight: "bolder" }}
              className="bx bx-search"
            ></i> */}
            <svg xmlns="http://www.w3.org/2000/svg" color="#121212" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            {/* <div className={styles.searchBar}>
              <div className="bg-white py-1 px-2 flex-1 flex justify-between border border-transparent transform transition duration-150 hover:border-next-primary">
                <span className={styles.searchBar__title}>Tìm kiếm ...</span>
              
              </div>
            </div> */}
          </Link>
          <Link passHref href="/cart">
            <div className={styles.cart}>
              {/* <i
                style={{ fontSize: "20px", fontWeight: "bolder" }}
                className="bx bxs-cart-alt"
              ></i> */
              }
              <svg xmlns="http://www.w3.org/2000/svg" color="#121212" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>


              <div className={styles.cart__amount}>{cartItemsQuantity}</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
