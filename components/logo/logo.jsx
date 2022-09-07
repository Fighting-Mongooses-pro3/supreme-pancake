import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className={`$customCss`}>
      <Image
        src="/images/houseruled-final.png"
        alt="logo"
        layout="fill"
        priority
      />
    </div>
  );
}
