import React, { useEffect, useRef } from "react";

const ALERT_TYPE = {
  success: {
    name: "success",
    border: "border-alertSuccess",
    text: "text-alertSuccess",
    icon: <i className="bx bxs-check-circle" />,
  },
  info: {
    name: "info",
    border: "border-alertInfo",
    text: "text-alertInfo",
    icon: <i className="bx bx-cube" />,
  },
  error: {
    name: "error",
    border: "border-alertError",
    text: "text-alertError",
    icon: <i className="bx bxs-error-circle" />,
  },
};

export default function AlertCommponent({
  btnText,
  type,
  btnCallback,
  content,
  isOpen,
}) {
  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, alertRef?.current?.offsetTop - 150);
      // alertRef.current.scrollIntoView();
    }
  }, [isOpen, type, content]);
  const alertRef = useRef(null);
  if (!isOpen) return null;
  return (
    <div ref={alertRef} className={` border-t-3 ${ALERT_TYPE[type].border}`}>
      {/* <div className={`h-1 w-full ${ALERT_TYPE[type]?.color}`}></div> */}
      <div className="w-full bg-gray-100 py-3 px-6 flex items-center">
        <div className={`mr-5 text-xl ${ALERT_TYPE[type].text}`}>
          {ALERT_TYPE[type]?.icon}
        </div>
        <div className="flex-1">{content}</div>
        {btnText ? (
          <button
            onClick={btnCallback}
            className="max-w-full bg-black text-white uppercase py-2 px-5"
          >
            {btnText}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
