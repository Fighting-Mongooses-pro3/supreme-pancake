import Head from "next/head";
import Image from "next/image";
import { Page, Container, BuildTools, DisplayBuild } from "../components";

export default function Home() {
  console.log('TEST')
  
  return (
    <>
      <Page currentPage="Home">
        <Container customCss="flex justify-center bg-transparent drop-shadow-md min-h-min mr-1 overflow-hidden min-w-min h-screen">
          <BuildTools />
          <DisplayBuild />
          {/* <section id="tools" className="bg-green-600 text-purple-400">
            TOOLS GO HERE
          </section>
          <section id="build" className="bg-cyan-400 text-red-600">
            Welcome to the Jungle
          </section> */}
        </Container>
      </Page>
    </>
  );
}
