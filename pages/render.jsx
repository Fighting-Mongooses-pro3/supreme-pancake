import React, { useEffect, useState } from "react";
import { Page } from "../components";
import { Statblock } from "../components";

export const RenderBlock = () => {
  const [currentMonster, setCurrentMonster] = useState(0);
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const monsters = [];
    const storedObject = localStorage.getItem("monsters");
    if (storedObject !== null) {
      monsters.push(...JSON.parse(storedObject));
    }
    setMonsters(monsters);
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
      <div className="w-screen h-screen ae-paper bg-center bg-no-repeat bg-cover">
        <RenderBlock />
      </div>
    </Page>
  );
};

export default render;
