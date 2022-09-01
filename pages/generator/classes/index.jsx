import React, { useState, useEffect } from "react";
import { Card, Page, Container } from "../../../components";
import axios from "axios";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.open5e.com/monsters/?format=json&limit=1000")
      .then((res) => {
        console.info("RESPONSE.DATA", res.data)
        console.info("RESPONSE.DATA.RESULTS", res.results);
        setClasses(res.data.results);
        console.log(classes);
      });
  }, []);

  const renderCards = () => {
    return classes.map((classes) => {
      return (
        <Card index={classes.index} name={classes.name} key={classes.index} />
      );
    });
  };

  return (
    <Page currentPage="Classes">
      <Container>
        <section>{renderCards()}</section>
      </Container>
    </Page>
  );
};

export default Classes;
