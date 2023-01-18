import { fetchingPageData } from "@api/fetchingPageData";
import InformationContainer from "@containers/Information";
import { INFORMATION_PAGE } from "@definitions/constants";
import { PostModel } from "@definitions/definitions";
import { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import { BASE_URL_FE } from "@definitions/constants";

export default function DieuKhoanDichVu({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <NextSeo
        title="Điều khoản dịch vụ"
        description="Mô tả trên google"
        openGraph={{
          type: "website",
          url: `${BASE_URL_FE}/dieu-khoan-dich-vu`,
          title: "LUNI STORIES| Điều khoản dịch vụ",
          description: "Điều khoản dịch vụ",
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
    INFORMATION_PAGE.DieuKhoanDichVu.pathDb
  );

  const post: PostModel = res;

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
