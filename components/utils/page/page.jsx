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
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={props.desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav className="fixed top-0 right-0 left-0 h-20 inline-flex drop-shadow-lg items-center justify-between bg-white ae-nav z-50">
          <div className="inline-flex w-full items-center justify-between">
            <Navbar currentPage={`${pageTitle}`} />
          </div>
          {/* <div className="inline-flex justify-between md:hidden w-full items-center">
            <MobileMenu currentPage={currentPage} />
          </div> */}
        </nav>
          <div>
        {props.children}
          </div>
      </main>
      <Footer footerCss={`${props.footerCss}`} />
    </div>
  );
};
