import { fetchingPageData } from "@api/fetchingPageData";
import InformationContainer from "@containers/Information";
import { INFORMATION_PAGE } from "@definitions/constants";
import { PostModel } from "@definitions/definitions";
import { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import { BASE_URL_FE } from "@definitions/constants";

export default function ChinhSachDoiTra({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <NextSeo
        title="Phương thức vận chuyển"
        description="Mô tả trên google"
        openGraph={{
          type: "website",
          url: `${BASE_URL_FE}/phuong-thuc-van-chuyen`,
          title: "LUNI STORIES| Phương thức vận chuyển",
          description: "Phương thức vận chuyển",
          images: [
            {
              url: "hinh_thumbnail_mac_dinh",
              alt: "Bác sĩ Đông Phương",
            },
          ],
        }}
      />
      <InformationContainer post={post} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res: any = await fetchingPageData.getInformationPage(
    INFORMATION_PAGE.PhuongThucVanChuyen.pathDb
  );

  const post: PostModel = res;

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
