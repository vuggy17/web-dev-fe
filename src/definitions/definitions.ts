export type PostModel = {
  title: string;
  path: string;
  description: string;
  content: string;
};

export type BlogDetailPageDataPagePropsType = {
  tags: Array<any>;
  post: PostModel;
  blogComments: Array<any>;
  latestBlogs: Array<any>;
  blogProducts: Array<any>;
};

export interface MediaModel {
  id: number;
  title: string;
  url: string;
  alt: string;
  filename: string;
}
export interface BannerModel {
  id: number;
  title: string;
  content: string;
  sub_title: string;
  button_text: string;
  button_url: string;
  media: MediaModel;
}

export interface SlideModel {
  id: number;
  name: string;
  is_visible: boolean;
  location_id: number;
  banners: Array<BannerModel>;
}

export interface TestimonialModel extends SlideModel {}
