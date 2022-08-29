import React, { useState, useEffect } from "react";
import { Card, Page, Container } from "../../components";
import axios from "axios";

const Races = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/races").then((res) => {
      console.info("RESPONSE.DATA", res.data);
      console.info("RESPONSE.DATA.RESULTS", res.data.results);
      setRaces(res.data.results);
      console.log(races);
    });
  }, [races]);

  const renderCards = () => {
    return races.map((races) => {
      return <Card index={races.name} name={races.name} key={races.index} />;
    });
  };

  return (
    <Page currentPage="Default Races">
      <Container>
        <section>{renderCards()}</section>
      </Container>
    </Page>
  );
};

export default Races;
