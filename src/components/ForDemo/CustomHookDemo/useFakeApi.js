import { useState, useEffect } from "react";

function fakeApi({ request, response, timeout }) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let { status } = response;
      switch (status) {
        case 200:
          resolve(response);
          break;
        default:
          reject(response);
          break;
      }
    }, timeout);
  });
  return myPromise;
}

function useFakeAPI({ request }) {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    if (!status) {
      (async () => {
        let response = await fakeApi({
          request: request,
          response: { payload: "i am no vapo", status: 200 },
          timeout: 1000,
        });
        setStatus(response);
      })();
    }
  });
  return status;
}

export default useFakeAPI;
