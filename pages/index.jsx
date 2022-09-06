import { useState, useEffect, useRef } from "react";
import { Page, Container, HeroL, HeroR } from "../components";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [offsetY, setOffsetY] = useState(0);
  const [rando, setRando] = useState(0);
  const [rando2, setRando2] = useState(2);
  const lastBg = useRef();
  const firstBg = useRef();
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const scrollDown = () =>
    lastBg.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });

  const scrollUp = () =>
    firstBg.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

  useEffect(() => {
    setLoading(false);
    setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    setRando(Math.floor(Math.random() * 29));
    setRando2(Math.floor(Math.random() * 29));

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(offsetY);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Page currentPage="Home" footerCss="hidden">
        <div
          className={`border border-black min-h-screen w-full ae-land-bg-1`}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          ref={firstBg}
        />
        <button
          className="block text-white absolute bottom-0 left-1/2 z-50 animate-bounce text-center text-xl cursor-default"
          onClick={scrollDown}
        >
          <BsChevronDoubleDown className="w-14 h-10 text-center" />
          Scroll
        </button>
        <HeroL
          src="/landing-images/book-gaa6361739_1920.jpg"
          alt="Stuff"
          height="382"
          width="400"
          customCss=""
          title="Do qui enim magna amet voluptate consectetur dolor amet minim officia sunt laboris minim eu."
        />
        <spacer className="h-96 backdrop-blur-sm w-full"></spacer>
        <HeroR
          src="/landing-images/book-gaa6361739_1920.jpg"
          alt="Stuff"
          height="382"
          width="400"
          customCss="h-screen -z-20"
          title="Do qui enim magna amet voluptate consectetur dolor amet minim officia sunt laboris minim eu."
        />
        <div
          className={`border border-black min-h-screen w-full ae-land-bg-2`}
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
          ref={lastBg}
        />
        {/* <button
          className="block text-white -z-10 justify-center animate-bounce text-center text-xl cursor-default"
          onClick={scrollUp}
        >
          <BsChevronDoubleUp className="w-14 h-10 text-center" />
          Scroll
        </button> */}
      </Page>
    </>
  );
}
