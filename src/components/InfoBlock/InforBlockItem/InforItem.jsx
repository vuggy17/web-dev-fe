import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import BlockItem from "./InforItem.module.scss";
import Link from "next/link";

InforItem.propTypes = {
  inforImage: PropTypes.object,
  inforTitle: PropTypes.string,
};

InforItem.defaultProps = {
  inforAlt: "",
};

function InforItem({ inforImage, inforTitle, inforAlt, url }) {
  return (
    <Link href={url} passHref>
      <div className={BlockItem.container}>
        <Image
          alt={inforAlt}
          src={inforImage}
          layout="fill"
          objectFit="cover"
        />
        <h3 className={BlockItem.textCenter}>
          <span>{inforTitle}</span>
        </h3>
        <div className={BlockItem.blur}></div>
      </div>
    </Link>
  );
}

export default InforItem;
