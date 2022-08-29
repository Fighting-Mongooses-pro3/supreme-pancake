import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Page, Container } from "../components";

export default function Home() {
  return (
    <>
      <Page currentPage="Home">
        <Container customCss="inline-flex bg-transparent drop-shadow-md min-h-min mr-1 overflow-hidden min-w-min h-screen">
          <article className="text-8xl self-center">
            Gotta Put Stuffs Here
            </article>
        </Container>
      </Page>
    </>
  );
}
