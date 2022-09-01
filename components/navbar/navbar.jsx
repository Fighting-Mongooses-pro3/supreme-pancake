import Link from "next/link";
import React, { useState } from "react";
import { routes, defaultRoutes } from "../../data/global";
// import { useUser } from "@auth0/nextjs-auth0";
// import Image from "next/image";

export const Navbar = ({ currentPage }) => {
  // const { user, error, isLoading } = useUser();
  const [drop, setDrop] = useState(false);

  const handleDrop = () => {
    setDrop((current) => !current);
  };

  return (
    <>
      <Link href="/">
        <a>
          <section className="text-white texkt-xl cursor-pointer">
            LOGO HERE
          </section>
        </a>
      </Link>
      <ul className="nav-menu inline-flex mr-4 flex-wrap ae-nav-links text-lg lg:text-xl 2xl:text-2xl">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`mr-5 hover:border-gray-300 transition-all duration-700 hover:duration-100 hover:scale-125 mt-4 ${
                currentPage === item.title
                  ? "text-lime-500 hover:text-white"
                  : "opacity-70 hover:opacity-100 transition-opacity text-white hover:text-white "
              }`}
            >
              <Link href={item.path}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
