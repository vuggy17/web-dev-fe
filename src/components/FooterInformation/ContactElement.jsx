import React from "react";

function ContactElement({ Icon, contactInfor }) {
  return (
    <div className="flex flex-col items-center w-full mb-2 md:flex-row">
      <div>{Icon && <Icon className="w-6 mr-2" />}</div>
      <div>{contactInfor}</div>
    </div>
  );
}

export default ContactElement;
