import React from "react";

export const Container = (props) => {
  return (
    <section
      className={`w-full min-h-screen mt-10 ${props.customCss}`}
      // style={`${props.style}`}
    >
      {props.children}
    </section>
  );
};
