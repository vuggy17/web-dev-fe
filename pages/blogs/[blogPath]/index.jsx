// pages/posts/[id].js
import { fetchingPageData } from "@api/fetchingPageData";
import PageLoader from "@components/Common/PageLoader";
import BlogDetailContainer from "@containers/BlogDetail";
import { BASE_URL_FE, BASE_URL_IMAGE } from "@definitions/constants";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const seoConfig = (post) => {
  if (!post)
    return { title: "Không tiêu đề", description: "không có description" };
  const { title, description, path, media, createdAt, last_publish, tag } =
    post;
  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      url: `${BASE_URL_FE}/blogs/${path}`,
      article: {
        publishedTime: createdAt,
        modifiedTime: last_publish,
        tags: (tag || []).map((e) => e.name),
      },
      images: [
        {
          url: BASE_URL_IMAGE + media?.url,
          alt: media?.alt,
        },
      ],
    },
  };
};

function BlogDetail({ blogDetailPageData }) {
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
      <NextSeo {...seoConfig(blogDetailPageData?.post)} />
      <div>
        <BlogDetailContainer blogDetailPageData={blogDetailPageData} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await fetchingPageData.getTop1000Blogs();

  const paths = posts.map((post) => ({
    params: { blogPath: post.path },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetchingPageData.blogDetail(params);
  return {
    props: { blogDetailPageData: res },
    revalidate: 60,
  };
}

export default BlogDetail;
