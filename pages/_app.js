import * as gtag from "@app/lib/gtag";
import ReactToastify from "@components/Common/Toastify";
import store from "@redux/store";
import { motion } from "framer-motion";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { SEO } from "seo.config";
import Layout from "src/layout";
import "../styles/globals.css";
import "../styles/responsive.scss";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Provider store={store}>
        <DefaultSeo {...SEO} />
        {/* <NextSeo titleTemplate="Next SEO | %s" /> */}
        <Head>
          <link
            rel="shortcut icon"
            href="/images/official/logo/DR DONG PHUONG - LOGO - FINAL WORK - BLACK.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
            rel="stylesheet"
          />
          {/* <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
          />
          <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        /> */}
        </Head>
        <ReactToastify />
        <Layout appRoute={router}>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            transition={{ duration: 0.3 }}
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
              pageExit: {
                backgroundColor: "white",
                filter: `invert()`,
                opacity: 0,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
