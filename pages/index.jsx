import { useState, useEffect, useRef } from "react";
import { Page, Container, HeroL, HeroR, HeroC } from "../components";
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

  // const scrollUp = () =>
  //   firstBg.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "nearest",
  //     inline: "start",
  //   });

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
          className={`min-h-screen w-full ae-land-bg-1`}
          style={{ transform: `translateY(${offsetY * 0.8}px)` }}
          ref={firstBg}
        />
        <button
          className="block text-white absolute bottom-0 left-1/2 z-50 animate-bounce text-center text-xl cursor-default"
          onClick={scrollDown}
        >
          <BsChevronDoubleDown className="w-14 h-10 text-center" />
          Scroll
        </button>
        <div className="backdrop-blur-sm w-full">
          <HeroL
            src="/landing-images/4.jpg"
            alt="Stuff"
            layout="fill"
            customCss="ae-from-left p-3 w-11/12 ml-10 ae-min-h"
            title="Do qui enim magna amet voluptate consectetur dolor amet minim officia sunt laboris minim eu."
            body="Dolor occaecat ea tempor aliqua enim sint laborum deserunt voluptate Lorem Lorem exercitation. Irure anim ullamco mollit sunt duis. Sunt sunt esse dolore adipisicing reprehenderit magna enim nulla do sunt aute. Eiusmod consequat ut commodo do. Nostrud qui ullamco pariatur labore reprehenderit proident officia deserunt. Velit reprehenderit quis id sint. Sit esse esse adipisicing Lorem exercitation aliquip proident voluptate. Tempor esse reprehenderit ullamco ipsum aliquip elit consectetur excepteur magna sit consectetur in non. Aliquip Lorem fugiat in elit ullamco id reprehenderit incididunt pariatur eiusmod minim. Fugiat commodo fugiat ex exercitation pariatur quis esse voluptate reprehenderit."
          />
        </div>
        <div className="h-96 backdrop-blur-sm w-full" />
        <div className="backdrop-blur-sm w-full">
          <HeroR
            src="/landing-images/4.jpg"
            alt="Stuff"
            layout="fill"
            customCss="p-3 w-11/12 ml-10 ae-min-h z-10 animate__backInLeft"
            title="Do qui enim magna amet voluptate consectetur dolor amet minim officia sunt laboris minim eu."
            body="Dolor occaecat ea tempor aliqua enim sint laborum deserunt voluptate Lorem Lorem exercitation. Irure anim ullamco mollit sunt duis. Sunt sunt esse dolore adipisicing reprehenderit magna enim nulla do sunt aute. Eiusmod consequat ut commodo do. Nostrud qui ullamco pariatur labore reprehenderit proident officia deserunt. Velit reprehenderit quis id sint. Sit esse esse adipisicing Lorem exercitation aliquip proident voluptate. Tempor esse reprehenderit ullamco ipsum aliquip elit consectetur excepteur magna sit consectetur in non. Aliquip Lorem fugiat in elit ullamco id reprehenderit incididunt pariatur eiusmod minim. Fugiat commodo fugiat ex exercitation pariatur quis esse voluptate reprehenderit."
          />
        </div>
        <div className="h-96 backdrop-blur-sm w-full" />
        <div className="backdrop-blur-sm w-full">
          <HeroC
            src="/landing-images/4.jpg"
            alt="Stuff"
            layout="fill"
            customCss="p-3 w-10/12 ml-10 ae-min-h z-10"
            title="Do qui enim magna amet voluptate consectetur dolor amet minim officia sunt laboris minim eu."
            body="Dolor occaecat ea tempor aliqua enim sint laborum deserunt voluptate Lorem Lorem exercitation. Irure anim ullamco mollit sunt duis. Sunt sunt esse dolore adipisicing reprehenderit magna enim nulla do sunt aute. Eiusmod consequat ut commodo do. Nostrud qui ullamco pariatur labore reprehenderit proident officia deserunt. Velit reprehenderit quis id sint. Sit esse esse adipisicing Lorem exercitation aliquip proident voluptate. Tempor esse reprehenderit ullamco ipsum aliquip elit consectetur excepteur magna sit consectetur in non. Aliquip Lorem fugiat in elit ullamco id reprehenderit incididunt pariatur eiusmod minim. Fugiat commodo fugiat ex exercitation pariatur quis esse voluptate reprehenderit."
          />
        </div>
        <div
          className={`min-h-screen w-screen ae-land-bg-2`}
          style={{ transform: `translateY(${offsetY * 0.1}px)` }}
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
