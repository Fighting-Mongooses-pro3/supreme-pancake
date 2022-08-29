import React, { useState, useEffect } from "react";
import { Card, Container, Page } from "../../components";
import axios from "axios";

const Spells = () => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/spells").then((res) => {
      console.info("RESPONSE.DATA", res.data);
      console.info("RESPONSE.DATA.RESULTS", res.data.results);
      setSpells(res.data.results);
      console.log(spells);
    });
  }, []);

  const renderCards = () => {
    return spells.map((spells) => {
      return <Card index={spells.name} name={spells.name} key={spells.index} />;
    });
  };

  return (
    <Page currentPage="Default Spells">
      <Container>
        <section>{renderCards()}</section>
      </Container>
    </Page>
  );
};

export default Spells;
