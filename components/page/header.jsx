import React from "react";
import UpperCase from "../utils/customHooks/upperCase";

export const Header = (props) => {
  return (
    <div
      className={`text-white text-center w-full h-16 border ${props.customCss}`}
    >
      {<UpperCase string={props.title} />}
    </div>
  );
};
