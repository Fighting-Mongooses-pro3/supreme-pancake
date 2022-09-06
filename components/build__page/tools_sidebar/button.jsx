import React from "react";

export const Button = (props) => {
  return (
    <button id={props.id} className={`w-36 p-3 inline-flex ${props.customCss}`}>
      {props.icon}{props.text}
    </button>
  );
};
