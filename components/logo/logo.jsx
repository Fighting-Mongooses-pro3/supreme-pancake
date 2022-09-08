import Image from "next/image";
import React from "react";

export default function Logo(props) {
  return (
    <div className={`${props.customCss}`}>
      <Image
        src="/images/houseruled-final.png"
        alt="logo"
        layout="fill"
        priority
      />
    </div>
  );
}
