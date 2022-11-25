import PageLoader from "@components/Common/PageLoader";
import React from "react";
import useFakeAPI from "./useFakeApi";

export default function TestCustomHook() {
  let data = useFakeAPI({ request: "url đây" });

  return (
    <div>
      <PageLoader isLoading={data ? false : true} />
      <div>{data ? data?.payload : "loading"}</div>
    </div>
  );
}
