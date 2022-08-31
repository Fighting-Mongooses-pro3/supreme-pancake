import React, { useState, useEffect } from "react";
import { Aside, Container, Header, Page } from "../../../components";
import { useRouter } from "next/router";
import axios from "axios";

const DndClass = () => {
  const router = useRouter();
  let thisPage = router.query;
  let pageId = thisPage.class;
  const [dndClass, setDndClass] = useState();

  console.log(pageId);

  useEffect(() => {
    axios.get(`https://www.dnd5eapi.co/api/classes/${pageId}`).then((res) => {
      console.info("RESPONSE.DATA", res.data);
      setDndClass(res.data);
    });
    console.log("STATE", dndClass);
  }, []);

  // useEffect(() => {
  //   const url = `https://www.dnd5eapi.co/api/classes/${pageId}`;
  //   const options = {
  //     method: "GET",
  //   };
  //   fetch(url)
  //     .then((res) => console.log(res.json()))
  //     .then((data) => {
  //       setDndClass(data);
  //       console.log("DATA", data);
  //     });
  //   console.log("STATE", dndClass);
  // }, );

  return (
    <Page currentPage={`${pageId}`}>
      <Container>
        <Header title={`${pageId}`} customCss="text-6xl" />

        <section className="text-white text-6xl"></section>
      </Container>
    </Page>
  );
};

export default DndClass;
