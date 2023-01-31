import landingApi from "@api/landingApi";
import AlertCommponent from "@components/Common/alert/AlertComponent";
import React, { useRef, useState } from "react";

function SubWidget() {
  const [alert, setAlert] = useState({ isOpen: false });
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  async function subcribe(data) {
    try {
      const res = await landingApi.postSubcribe(data);
      if (res.data) {
        setAlert({
          isOpen: true,
          type: "success",
          content: "Cám ơn bạn đã đăng ký !",
        });
        emailRef.current.value = "";
        nameRef.current.value = "";
      }
    } catch (error) {
      setAlert({
        isOpen: true,
        type: "error",
        content: error.response.data.error,
      });
    }
  }
  return (
    <div className="w-full flex flex-col pb-10">
      <h2 className="text-4xl text-center text-gray-400 font-handwriting">Đăng ký ngay</h2>
      <p className="pt-1 text-sm text-gray-400 text-center ">Nhận bài viết mới nhất qua email</p>

      <div className="mb-5">
        <AlertCommponent {...alert} />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = emailRef.current.value;
          const name = nameRef.current.value;
          subcribe({ name, email });
        }}
      >
        <div
          className="mx-auto md:w-[40%] flex flex-col items-center "
        //   className="bg-secondary text-gray-600 px-6 py-6 
        // md:w-full
        // lg:flex lg:m-0 lg:justify-around lg:items-center"
        >

          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Tên của bạn"
            className="w-full h-11 px-2 outline-none border-[1px] border-gray-300 text-center mb-2"
          />
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Email"
            className="w-full h-11 px-2 border-[1px] border-gray-300 text-center  mb-2"
          />
          <div className="pb-4 lg:w-1/5 lg:pb-0">
            <input
              type="submit"
              name="submit-email"
              value="Đăng ký"
              className="w-full h-11 bg-next-btn text-white cursor-pointer hover:bg-gray-800 transform ease-linear duration-300"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SubWidget;
