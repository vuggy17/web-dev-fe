import { fetchingPageData } from "@api/fetchingPageData";
import PageLoader from "@components/Common/PageLoader";
import BlogPageContainer from "@containers/BlogPage";
import ShopContainer from "@containers/Shop";
import { BASE_URL_FE } from "@definitions/constants";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

function ShopByCategory({ shopByCategoryPageData }) {
  const router = useRouter();
  const { currentCategory } = shopByCategoryPageData || {};

  if (router.isFallback) {
    return (
      <div>
        <PageLoader isLoading={true} />
      </div>
    );
  }

  return (
    <>
      <NextSeo
        title={currentCategory.name}
        description={currentCategory.description}
        openGraph={{
          type: "website",
          url: `${BASE_URL_FE}/category/${currentCategory.path}`,
          title: currentCategory.name,
          description: currentCategory.description,
          images: [
            {
              url: "http://103.142.137.207:8080/upload/98109478_2678655622456481_908814873675169792_n-1629345132338.jpg",
              alt: "Bác sĩ Đông Phương",
            },
          ],
        }}
      />
      <div>
        <ShopContainer shopPageData={shopByCategoryPageData} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const categories = await fetchingPageData.getShopCategories();

  const paths = categories.map((category) => ({
    params: { categoryPath: category.path },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetchingPageData.shopByCategory(params);
  return {
    props: { shopByCategoryPageData: res },
    revalidate: 60,
  };
}

export default ShopByCategory;
