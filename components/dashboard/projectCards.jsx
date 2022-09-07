import Link from "next/link";
import React from "react";

export const ProjectCards = (props) => {
  return (
    <Link href={`/dashboard/${props.id}`}>
      <article className="border border-black h-64 w-2/12 m-4 p-2 cursor-pointer hover:scale-105 rounded-3xl shadow-inner shadow-black bg-hr-blue text-hr-grey">
        <h1 className="text-center font-serif text-3xl">{props.title}</h1>
      </article>
    </Link>
  );
};
