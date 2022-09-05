import Image from "next/image";
import React from "react";

export const HeroR = (props) => {
  return (
    <section className={`bg-lime-700 flex flex-wrap ${props.customCss}`}>
      <article>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
      </article>
      <figure>
        <Image
          src={props.src}
          alt={props.alt}
          height={props.height}
          width={props.width}
          layout={props.layout}
        />
      </figure>
    </section>
  );
};
