import BigSearhInput from "@components/BigSearchInput";
import { initCart } from "@redux/cartSlice";
import {
  fetchAuthorInfor,
  fetchBlogCategories,
  fetchLatestBlogs,
  fetchShopCategories,
  fetchTags,
} from "@redux/commonSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "./footer";
import styles from "./layout.module.scss";
import Navbar from "./navbar";
import Notification from "./notification";

export default function Layout({ appRoute, ...props }) {
  const dispatch = useDispatch();
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  useEffect(() => {
    dispatch(fetchBlogCategories());
    dispatch(fetchShopCategories());
    dispatch(initCart());
    dispatch(fetchAuthorInfor());
    dispatch(fetchTags());
    dispatch(fetchLatestBlogs());
  }, []);

  return (
    <div className={styles.container}>
      <ScrollTop />
      <BigSearhInput
        isOpen={isOpenSearch}
        onClose={() => {
          setIsOpenSearch(false);
        }}
      />
      <div className={styles.header} >
        <Notification />
        <div className={styles.navbar}>
          <Navbar
            onOpenSearch={() => {
              setIsOpenSearch(true);
            }}
            appRoute={appRoute}
          />
        </div>
      </div>
      <div className={styles.main}>{props.children}</div>
      <div className={styles.footer}>
        <Footer setIsOpenSearch={setIsOpenSearch} />
      </div>
    </div>
  );
}

function ScrollTop({ scrollToTop }) {
  const handleScroll = () => {
    let btnScrollTop = document.getElementById("scroll-to-top-btn");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btnScrollTop.style.opacity = 100;
    } else {
      btnScrollTop.style.opacity = 0;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      id="scroll-to-top-btn"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className="transition-all z-10 flex hover:bg-opacity-95 justify-center items-center rounded-full w-10 h-10 sm:w-14 sm:h-14 text-xl bg-black bg-opacity-70 text-white fixed bottom-14 sm:bottom-5 right-5"
    >
      <i className="bx bx-up-arrow-alt" />
    </div>
  );
}
