import Image from "next/image";
import React from "react";

export const HeroR = (props) => {
  return (
    <section
      className={`bg-white overflow-hidden bg-opacity-90 grid grid-flow-col grid-cols-6 gap-2 rounded-3xl ${props.customCss}`}
    >
      <figure className="h-full drop-shadow-lg shadow-black col-start-5 col-end-7 rounded-3xl overflow-hidden opacity-90">
        <Image src={props.src} alt={props.alt} layout={props.layout} />
      </figure>
      <section className="col-start-1 col-end-5">
        <article className="text-center">
          <h1 className="text-2xl">{props.title}</h1>
          <p className="text-black texl-lg text-center col-span-1 flex-1 snap-center">
            {props.body}
          </p>
        </article>
      </section>
    </section>
  );
};
