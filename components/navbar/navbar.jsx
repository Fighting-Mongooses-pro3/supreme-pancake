import Link from "next/link";
import React, { useState } from "react";
import { routes, defaultRoutes } from "../../data/global";
// import { useUser } from "@auth0/nextjs-auth0";
// import Image from "next/image";

export const Navbar = ({ currentPage }) => {
  // const { user, error, isLoading } = useUser();
  const [drop, setDrop] = useState(false);

  const handleDrop = () => {
    if (user) {
      setDrop((current) => !current);
    }
  };

  // const handleLogin = () => {
  //   if (currentPage === "Blog") {
  //     return (
  //       <Link href="/api/auth/login">
  //         <a
  //           className="text-white hover:border-gray-300 transition-all duration-700 hover:duration-100 hover:scale-125 mt-4 opacity-70 mr-5 hover:text-white hover:opacity-100"
  //           onClick={handleDrop}
  //         >
  //           Log In
  //         </a>
  //       </Link>
  //     );
  //   } else {
  //     return null;
  //   }
  // };

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

        <div
          className="z-50 fixed right-0 top-16 text-white list-none rounded divide-y shadow bg-gray-900 divide-gray-100 mr-2"
          id="user-dropdown"
        >
          <div className="py-3 px-4">
            <span className="block text-sm text-white">Defaults</span>
            <span className="block text-sm font-medium text-white truncate"></span>
          </div>
          <ul className="py-1" aria-labelledby="user-menu-button">
            {defaultRoutes.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path}>
                    <a className="block py-2 px-4 text-sm text-lime-500 hover:bg-lime-500 hover:text-white">
                      {item.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </ul>
    </>
  );
};
