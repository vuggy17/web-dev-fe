import { fetchingPageData } from "@api/fetchingPageData";
import HomepageContainer from "@containers/Homepage/index";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { BASE_URL_FE, BASE_URL_IMAGE } from "@definitions/constants";
function FullHomePage(props) {
  //
  useEffect(() => {
    if (props.homepageData) {
      console.log();
    } else {
      if (
        window.confirm("Không thể lấy dữ liệu từ server!, Reload lại trang ?")
      ) {
        window.location.reload();
      }
    }
  }, []);
  return (
    <div>
      <NextSeo
        title="LUNI STORIES"
        description="Bác sĩ tạo hình thẩm mỹ - khắc hoạ nét đẹp theo xu hướng cá nhân hoá"
        openGraph={{
          type: "website",
          url: `${BASE_URL_FE}`,
          title: "LUNI STORIES",
          description:
            "Bác sĩ tạo hình thẩm mỹ - khắc hoạ nét đẹp theo xu hướng cá nhân hoá",
          images: [
            {
              url: `${BASE_URL_FE}/images/official/thumbnail/IMG_2852.JPG`,
              alt: "Bác sĩ Đông Phương",
            },
          ],
        }}
      />
      <HomepageContainer homepageData={props.homepageData} />
    </div>
  );
}

export default FullHomePage;

// FullHomePage.getInitialProps = async () => {
//
//   const res = await fakeAPI.getHomepageData();
//   return {
//     homepageData: res,
//   };
// };
export async function getStaticProps() {
  const res = await fetchingPageData.homepage();
  return {
    props: {
      homepageData: res,
    },
    revalidate: 60,
  };
}

/*
khác nhau giữa getStaticProps và get InitialProps

getStaticProps - build time - chạy mỗi khi chuyển route - tối ưu bản build
getInititalProps - run time - chú trọng vào chuẩn bị props trước khi render - ko tối ưu bản build

vậy khi nào sử dụng ???



*/
