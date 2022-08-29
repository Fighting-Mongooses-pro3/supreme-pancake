import React from "react";

export const Container = (props) => {
  return (
    <section className={`w-full h-screen mt-10 ${props.customCss}`}>
      {props.children}
    </section>
  );
};
