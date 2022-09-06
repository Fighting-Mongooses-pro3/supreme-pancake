import { useState, useEffect, useRef } from "react";
import { Page, Container, HeroL, HeroR } from "../components";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [offsetY, setOffsetY] = useState(0);
  const [rando, setRando] = useState(0);
  const [rando2, setRando2] = useState(2);
  const handleScroll = () => setOffsetY(window.pageYOffset);

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
        />
        <HeroL
          src="/landing-images/book-gaa6361739_1920.jpg"
          alt="Stuff"
          height="382"
          width="400"
          customCss=""
          title="Do qui enim magna amet voluptate consectetur dolor amet minim officia sunt laboris minim eu."
        />
        <div
          className={`border border-black min-h-screen w-full ae-land-bg-2`}
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        />
      </Page>
    </>
  );
}
