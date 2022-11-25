import React from "react";

function CompanyInformation({ title, address }) {
  return (
    <div className="mb-4">
      <span className="font-medium mr-1">{title}</span>
      {address}
    </div>
  );
}

export default CompanyInformation;
