// navbar and footer template so therye static for every page
import Head from "next/head";
import React from "react";
import { Footer, Navbar } from "../..";

export const Page = (props, { children }) => {
  const pageTitle = `${
    props.currentPage === "Home"
      ? "Supreme Pancake - Homebrewify"
      : `${props.currentPage} - Supreme Pancake`
  }`;

  return (
    <div className="bg-zinc-600">
      <Head>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={props.desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav className="fixed top-0 right-0 left-0 h-20  inline-flex drop-shadow-lg items-center justify-between border-amber-300  bg-repeat bg-red-900 bg-gunmetal ae-nav z-50">
          <div className="hidden md:inline-flex w-full items-center justify-between">
            <Navbar currentPage={`${pageTitle}`} />
          </div>
          {/* <div className="inline-flex justify-between md:hidden w-full items-center">
            <MobileMenu currentPage={currentPage} />
          </div> */}
        </nav>
          <div className="mt-20 w-full flex flex-wrap min-h-screen">
        {props.children}
          </div>
      </main>
      <Footer footerCss={`${props.footerCss}`} />
    </div>
  );
};
