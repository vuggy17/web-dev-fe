import { fetchingPageData } from "@api/fetchingPageData";
import InformationContainer from "@containers/Information";
import { INFORMATION_PAGE } from "@definitions/constants";
import { PostModel } from "@definitions/definitions";
import { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import { BASE_URL_FE } from "@definitions/constants";

export default function HuongDanMuaHang({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <NextSeo
        title="Hướng dẫn mua hàng"
        description="Mô tả trên google"
        openGraph={{
          type: "website",
          url: `${BASE_URL_FE}/chinh-sach-doi-tra`,
          title: "DR ĐÔNG PHƯƠNG | Hướng dẫn mua hàng",
          description: "Hướng dẫn mua hàng",
          images: [
            {
              url: "hinh_thumbnail_mac_dinh",
              alt: "Bác sĩ Đông Phương",
            },
          ],
        }}
      />
      ;
      <InformationContainer post={post} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res: any = await fetchingPageData.getInformationPage(
    INFORMATION_PAGE.HuongDanMuaHang.pathDb
  );

  const post: PostModel = res;

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
