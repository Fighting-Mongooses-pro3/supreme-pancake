import React from "react";
import UpperCase from "../customHooks/upperCase";

export const Header = (props) => {
  return (
    <div
      className={`text-2xl text-white text-center w-full h-16 ${props.customCss}`}
    >
      {<UpperCase string={props.title} />}
    </div>
  );
};
