import React from "react";

function SocialIcon({ Icon, name }) {
  let color = "";
  switch (name) {
    case "facebook":
      color = "text-blue-500";
      break;
    case "instagram":
      color = "text-red-500";
      break;
    case "pinterest":
      color = "text-red-600";
      break;
    default:
      color = "text-black";
  }

  return (
    <div className="cursor-pointer">
      {Icon && (
        <Icon
          className={`${color} transition transform hover:text-black hover:scale-110`}
          style={{ fontSize: "32px " }}
        />
      )}
    </div>
  );
}

export default SocialIcon;
