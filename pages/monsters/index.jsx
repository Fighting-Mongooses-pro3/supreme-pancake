import React, { useState, useEffect } from "react";
import { Card } from "../../components";
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
      return <Card index={monsters.index} name={monsters.name} />;
    });
  };

  return (
    <Page currentPage="Monsters">
      <section>{renderCards()}</section>
    </Page>
  );
};

export default Monsters;
