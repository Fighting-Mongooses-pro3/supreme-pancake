import React, { useState, useEffect } from "react";
import { Aside, Container, Header, Page } from "../../../components";
import { useRouter } from "next/router";
import axios from "axios";

const DndClass = () => {
  const router = useRouter();
  const thisPage = router.query;
  const pageId = thisPage.class;
  const [dndClass, setDndClass] = useState();

  useEffect(() => {
    console.log("THIS PAGE", pageId);
    axios.get(`https://www.dnd5eapi.co/api/classes/${pageId}`).then((res) => {
      console.info("RESPONSE.DATA", res.data);
      setDndClass(res.data);
    });
    console.log("STATE", dndClass);
  }, []);

  return (
    <Page currentPage={`${pageId}`}>
      <Container>
      <Header 
      title={`${pageId}`}
      customCss="text-6xl"
      />
      <Aside 
      side=""
      />
      </Container>
    </Page>
  );
};

export default DndClass;
