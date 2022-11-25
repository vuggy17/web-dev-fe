// pages/posts/[id].js
import { fetchingPageData } from "@api/fetchingPageData";
import PageLoader from "@components/Common/PageLoader";
import AboutmeContainer from "@containers/AboutMe";
import { BASE_URL_FE, BASE_URL_IMAGE } from "@definitions/constants";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

function AboutMe({ aboutmeData }) {
  const router = useRouter();
  const { name, avatar, description } = aboutmeData || {};

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
      <NextSeo
        title={name}
        description={description}
        openGraph={{
          type: "website",
          url: `${BASE_URL_FE}/about-me`,
          title: name,
          description:
            "Một người yêu cái đẹp, yêu cái cách làm cho mọi người trở thành phiên bản đẹp nhất, hoàn chỉnh nhất của chính họ.",
          images: [
            {
              url: `${BASE_URL_IMAGE}${avatar}`,
              alt: name,
            },
          ],
        }}
      />
      <div>
        <AboutmeContainer aboutmeData={aboutmeData} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchingPageData.aboutme();
  return {
    props: { aboutmeData: data },
    revalidate: 120,
  };
}

export default AboutMe;
