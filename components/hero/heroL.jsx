import Image from "next/image";
import React from "react";

export const HeroL = (props) => {
  return (
    <section className="bg-lime-700 flex flex-wrap">
      <figure>
        <Image
          src={props.src}
          alt={props.alt}
          height={props.height}
          width={props.width}
          layout={props.layout}
        />
      </figure>
      <article>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
      </article>
    </section>
  );
};
