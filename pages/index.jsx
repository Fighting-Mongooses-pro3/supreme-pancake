import { useState, useEffect } from "react";
import { Page, Container } from "../components";

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
              <Container customCss="flex justify-center bg-transparent drop-shadow-md min-h-min mr-1 overflow-hidden min-w-min h-screen">
                
              </Container>
            </Page>
          </>
        );
      }
    }
  }
}
