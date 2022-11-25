// pages/posts/[id].js
import { fetchingPageData } from "@api/fetchingPageData";
import PageLoader from "@components/Common/PageLoader";
import ProductDetailContainer from "@containers/ProductDetail";
import { BASE_URL_FE, BASE_URL_IMAGE } from "@definitions/constants";
import { NextSeo, ProductJsonLd } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProductSEO = ({ product }) => {
  if (!product) return null;
  const { path, desription, media, name, thumbnail } = product;
  const images = media.map((e) => {
    return { alt: e.alt, url: `${BASE_URL_IMAGE}${e.url}` };
  });
  return (
    <NextSeo
      title={name}
      description={desription}
      openGraph={{
        type: "product",
        url: `${BASE_URL_FE}/product/${path}`,
        title: name,
        description: desription,
        images: [...images, { url: `${BASE_URL_IMAGE}${thumbnail}` }],
      }}
    />
  );
};

function ProductDetail({ productDetailPageData }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <div>
        <PageLoader isLoading={true} />
      </div>
    );
  }
  return (
    <>
      <ProductSEO product={productDetailPageData?.productData} />
      <div>
        <ProductDetailContainer productDetailPageData={productDetailPageData} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const products = await fetchingPageData.getTop1000Products();

  const paths = products.map((product) => ({
    params: { productPath: product.path },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetchingPageData.productDetail(params);
  return {
    props: { productDetailPageData: res },
    revalidate: 60,
  };
}

export default ProductDetail;
