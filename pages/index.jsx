import Head from "next/head";
import $ from "jquery";
import Image from "next/image";
import { Page, Container, BuildTools, DisplayBuild } from "../components";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  {
    if (loading) {
      return <div>Loading...</div>;
    } else {
      if (typeof window !== "undefined") {
        const topEl = $("#top");
        const bottomEl = $("#bottom");
        console.log($(window))
        $(window).on("scroll", () => {
          topEl.css({
            width: 100 - scroll / 5 + "%",
            top: -(scroll / 10) + "%",
            "-webkit-filter": "blur(" + scroll / 100 + "px)",
            filter: "blur(" + scroll / 100 + "px)",
          });
          console.log(topEl)
          console.log('THIS', this)
        });

        return (
          <>
            <Page currentPage="Home">
              <Container customCss="flex justify-center bg-transparent drop-shadow-md min-h-min mr-1 overflow-hidden min-w-min h-screen">
                <section id="contain">
                  <section id="top" className="bg-red-600 bg-opacity-95 z-10">
                    <Image
                      src="/landing__images/dreams-g0534bb22a_1280.jpg"
                      alt="Fantasy book in the sky with waterfalls coming out of it"
                      layout="fill"
                    />
                  </section>

                  <section id="bottom" className="bg-opacity-95 bg-lime-500">
                    <Image
                      src="/landing__images/fantasy-g896efbe29_1920.jpg"
                      alt="Fantasy book in the sky with waterfalls coming out of it"
                      layout="fill"
                    />
                  </section>
                </section>
              </Container>
            </Page>
          </>
        );
      }
    }
  }
}
