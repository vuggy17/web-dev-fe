import { fetchingPageData } from "@app/api/fetchingPageData";
import { BlogDetailPageDataPagePropsType } from "@definitions/definitions";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import BlogDetailContainer from "@containers/BlogDetail";
import { BASE_URL_FE, BASE_URL_IMAGE } from "@definitions/constants";
import { NextSeo } from "next-seo";

const seoConfig = (post: any) => {
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
      url: `${BASE_URL_FE}/preview/${path}`,
      article: {
        publishedTime: createdAt,
        modifiedTime: last_publish,
        tags: (tag || []).map((e: any) => e.name),
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

export default function PreviewBlogPage({
  pageComponentProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <NextSeo {...seoConfig(pageComponentProps?.post)} />
      <BlogDetailContainer blogDetailPageData={pageComponentProps} />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  console.log(ctx.params);
  console.log("hello");
  const res: any = await fetchingPageData.getPreviewPost(ctx?.params?.blogPath);
  console.log("hello2", res);
  const pageComponentProps: BlogDetailPageDataPagePropsType = res;
  return {
    props: {
      pageComponentProps,
    },
  };
}
