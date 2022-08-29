import React, { useState, useEffect } from "react";
import { Card, Page, Container } from "../../components";
import axios from "axios";

const Monsters = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/monsters").then((res) => {
      console.info("RESPONSE.DATA", res.data);
      console.info("RESPONSE.DATA.RESULTS", res.data.results);
      setMonsters(res.data.results);
      console.log(monsters);
    });
  }, []);

  const renderCards = () => {
    return monsters.map((monsters) => {
      return <Card index={monsters.name} name={monsters.name} key={monsters.index} />;
    });
  };

  return (
    <Page currentPage="Monsters">
      <Container>
        <section>{renderCards()}</section>
      </Container>
    </Page>
  );
};

export default Monsters;
