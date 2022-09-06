import { useEffect, useState } from "react";
import { Page, Statblock } from "../components";

const loadMonsters = () => {
  let adventureMonsters = [];
  const storedValue = localStorage.getItem("monsters");
  if (storedValue !== null) {
    adventureMonsters = JSON.parse(storedValue);
  }

  return adventureMonsters;
};

import React from "react";

export const StatblockWrapper = () => {
  const [currentMonster, setCurrentMonster] = useState(0);
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    setMonsters(loadMonsters());
  }, []);

  return (
    <div>
      {monsters.length > 0 ? <Statblock {...monsters[currentMonster]} /> : null}
    </div>
  );
};

const render = () => {
  return (
    <Page currentPage="Builder Test">
      <div className="w-screen h-screen ae-paper bg-center bg-no-repeat bg-cover p-56">
        <StatblockWrapper />
      </div>
    </Page>
  );
};

export default render;
