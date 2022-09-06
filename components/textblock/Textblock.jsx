import React from "react";
import { Line } from "../";

export const Textblock = (props) => {
  return (
    <div className="inline-block ae-stat-block self-center -z-50">
      <section className="ae-stat-border"></section>

      <section className={`ae-border ${props.customCss}`}>
        <h1 className="text-red-600 font-mono text-lg md:text-3xl ml-2">
          {props.header}
        </h1>
      </section>

      <Line />

      <section className="text-black font-serif text-sm ml-2">
        {props.body}
      </section>

      <section className="ae-stat-border"></section>
    </div>
  );
};
