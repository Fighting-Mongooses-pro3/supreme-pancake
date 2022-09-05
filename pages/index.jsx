import { useState, useEffect } from "react";
import { Page, Container } from "../components";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

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
        return (
          <>
            <Page currentPage="Home">
            <Parallax pages={4} >

            </Parallax>
            </Page>
          </>
        );
      }
    }
  }
}
