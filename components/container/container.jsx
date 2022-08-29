import React from "react";

export const Container = (props) => {
  return (
    <section className={`w-full h-screen ${props.customCss}`}>
      {props.children}
    </section>
  );
};
