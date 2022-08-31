import Head from "next/head";
import Image from "next/image";
import {
  Page,
  Container,
  BuildTools,
  DisplayBuild,
  BuildContext,
} from "../components";

import { useState } from "react";

export default function Home() {
  const buildObj = useState({});
  return (
    <>
      <Page currentPage="Home">
        <Container customCss="flex justify-center bg-transparent drop-shadow-md min-h-min mr-1 overflow-hidden min-w-min h-screen">
          <BuildContext.Provider value={buildObj}>
            <BuildTools />
            <DisplayBuild />
          </BuildContext.Provider>
        </Container>
      </Page>
    </>
  );
}
