import Image from "next/image";
import React from "react";

export const HeroL = (props) => {
  return (
    <section className={`bg-lime-700 inline-flex flex-wrap ${props.customCss}`}>
      <figure className="h-full">
        <Image
          src={props.src}
          alt={props.alt}
          height={props.height}
          width={props.width}
          layout={props.layout}
        />
      </figure>
      <article>
        <h1 className="text-2xl">{props.title}</h1>
        <p className="text-black texl-lg">{props.body}</p>
      </article>
    </section>
  );
};
