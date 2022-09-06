import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="ml-3 mt-5">
      <Image
        src="/images/houseruled-final.png"
        alt="logo"
        height="64"
        width="64"
      />
    </div>
  );
}
