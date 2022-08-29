import React from "react";
import Link from 'next/link'

export const Card = (props) => {
  return (
    <div className="inline-flex flex-wrap">
      <div
        key={props.index}
        className="hover:scale-105 relative mb-32 lg:mb-20 w-40 mx-4 my-2"
      >
        <div>
          <Link href={`/classes/${props.index}`}>
            <a>

          <div className="shadow h-64 rounded-full relative">{props.index}</div>
            </a>
          </Link>
          <div className="p-6 mx-auto -mt-24 bg-gray-900 rounded-3xl z-20 relative mb-4">
            <p className="uppercase text-sm text-lime-500 text-center pb-3 bg-transparent">
              {props.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
