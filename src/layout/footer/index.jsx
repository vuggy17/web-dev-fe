import FooterInformation from "@components/FooterInformation";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useMobileFooter } from "@app/lib/GoogleAnalytics/eventAnalytics";
export default function Footer({ setIsOpenSearch }) {
  const { cartItemsQuantity } = useSelector((state) => state.cart);
  return (
    <>
      <div className={styles.footerMobile}>
        <ul
          onClick={() => {
            //Google Analytics
            useMobileFooter();
          }}
          className={styles.mainMenu}
        >
          <li className={styles.mainMenu__navLink}>
            <Link passHref href="/">
              <div className={styles.title}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                {/* <span>HOME</span> */}
              </div>
            </Link>
          </li>
          <li className={styles.mainMenu__navLink}>
            {/* <Link passHref href="/search"> */}

            <div
              className={styles.title}
              onClick={() => {
                setIsOpenSearch(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {/* <span>SEARCH</span> */}
            </div>
            {/* </Link> */}
          </li>
          <li className={styles.mainMenu__navLink}>
            <Link passHref href="/blogs">
              <div className={styles.title}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                {/* <span>BLOG</span> */}
              </div>
            </Link>
          </li>
          <li className={styles.mainMenu__navLink}>
            <Link passHref href="/shop">
              <div className={styles.title}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {/* <span>SHOP</span> */}
              </div>
            </Link>
          </li>
          <li className={styles.mainMenu__navLink}>
            <div className="absolute top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center bg-primary text-white">
              {cartItemsQuantity}
            </div>
            <Link passHref href="/cart">
              <div className={styles.title}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {/* <span>CẢ</span> */}
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div style={{ textAlign: "center" }} className="bg-next-primary p-10">
        <FooterInformation />
      </div>
    </>
  );
}
