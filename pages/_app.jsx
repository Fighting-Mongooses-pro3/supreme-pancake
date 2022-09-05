// DO NOT USE THIS PAGE
import "../styles/globals.sass";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </UserProvider>
  );
}

export default MyApp;
