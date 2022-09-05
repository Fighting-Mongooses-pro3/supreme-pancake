import { useState, useEffect, useRef } from "react";
import { Page, Container, HeroL, HeroR } from "../components";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const parallax = useRef(IParallax);

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
            <Parallax ref={parallax} pages={4}>
              <Page currentPage="Home">
                <Container>
                  <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    className="ae-bg-1"
                  >
                    <HeroL
                      customCss=""
                      title="Build a Custom Module!"
                      body="Use this site to build your own custom modules and one shots!"
                      src="/landing__images/background-3390802_1920.jpg"
                      alt="A Beautiful Fantasy Tree"
                      height="200"
                      width="200"
                    />
                    Scroll Down
                  </ParallaxLayer>
                  <ParallaxLayer offset={1} speed={0.5}>
                    <HeroR
                      customCss=""
                      title="Build a Custom Module!"
                      body="Use this site to build your own custom modules and one shots!"
                      src="/landing__images/background-3390802_1920.jpg"
                      alt="A Beautiful Fantasy Tree"
                      height="200"
                      width="200"
                    />
                  </ParallaxLayer>
                </Container>
              </Page>
            </Parallax>
          </>
        );
      }
    }
  }
}
