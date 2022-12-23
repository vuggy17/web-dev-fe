import landingApi from "@api/landingApi";
import useYupValidationResolver from "@utils/customHook/useYupValidationResolver";
import { removeEmptyFields } from "@utils/myUtils";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const validationSchema = yup.object({
  // name: yup.string().required("Bạn chưa nhập tên"),
  // content: yup.string().required("Bạn chưa nhập nội dung"),
  // email: yup.string().required("Bạn chưa nhập email"),
  // phone: yup.string().required("Bạn chưa nhập số điện thoại"),
});
function CommentForm({ blogId, handleNewComment }) {
  const resolver = useYupValidationResolver(validationSchema);
  const router = useRouter();

  const { register, handleSubmit, setValue } = useForm({ resolver });
  const onSubmit = async (data) => {
    const payload = { ...data, blog_id: blogId };
    removeEmptyFields(payload);
    const res = await landingApi.commentToBlog(payload);
    if (res.data) {
      router.push(router.asPath + "/#comment-area");
      resetForm();
      handleNewComment({ ...data, createdAt: new Date() });
    }
  };

  function resetForm() {
    setValue("name", null);
    setValue("content", null);
    setValue("email", null);
    setValue("phone", null);
  }

  return (
    <div className="w-full">
      <div className="bg-secondary w-full flex justify-center items-center text-lg uppercase tracking-wide mb-8 px-4 h-11 ">
        <div>Để lại bình luận ở đây</div>
      </div>
      <div className="mb-5 text-gray-500">
        Email và số điện thoại của bạn sẽ không được công khai
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="ring-1 ring-gray-300 mb-4 lg:mb-8 bg-gray-50">
          <textarea
            {...register("content")}
            placeholder="Bình luận của bạn"
            className="w-full outline-none px-2 py-2 h-32 bg-gray-50"
          ></textarea>
        </div>
        <div className="lg:flex lg:justify-center lg:mb-4 lg:gap-10 ">
          <div className="w-full ring-1 ring-gray-300 mb-4">
            <input
              type="text"
              {...register("name")}
              placeholder="Tên của bạn"
              className="w-full h-11 px-2 outline-none bg-gray-50"
            />
          </div>
          <div className="w-full ring-1 ring-gray-300 mb-4">
            <input
              type="email"
              {...register("email")}
              placeholder="Email của bạn"
              className="w-full h-11 px-2 outline-none bg-gray-50"
            />
          </div>
          <div className="w-full ring-1 ring-gray-300 mb-4">
            <input
              type="number"
              {...register("phone")}
              placeholder="Số điện thoại"
              className="w-full h-11 px-2 outline-none bg-gray-50"
            />
          </div>
        </div>
        <div className="">
          <input
            type="submit"
            value="Bình luận"
            className="px-2 w-2/5 sm:w-1/5 h-11 outline-none bg-next-btn text-gray-50 uppercase hover:bg-gray-800 transition duration-500 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
