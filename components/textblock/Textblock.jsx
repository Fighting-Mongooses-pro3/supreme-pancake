import React from "react";
import { Line } from "../";

export const Textblock = (props) => {
  const { header, body, important } = props;
  return (
    <div
      className={`inline-block self-center bg-cover ${
        important ? "bg-paper brightness-125" : "bg-parchment"
      }`}
    >
      <section className="ae-stat-border"></section>
      <section className={`ae-border`}>
        <h1
          className={`${
            important
              ? "text-black font-bold text-4xl"
              : "text-black font-medium text-3xl"
          } font-mono ml-2`}
        >
          {header}
        </h1>
      </section>

      <Line />

      <section className="text-black font-serif text-sm ml-2">{body}</section>

      <section className="ae-stat-border"></section>
    </div>
  );
};

// ) : (
//     <section className={`ae-border`}>
//       <h1 className="text-black font-mono text-lg md:text-3xl ml-2">
//         {header}
//       </h1>
//     </section>
//   )}
