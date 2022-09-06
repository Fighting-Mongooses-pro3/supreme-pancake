import React, { useEffect, useState } from "react";
import { Page } from "../components";
import { EntityBuilder } from "../components/buildtools/EntityBuilder/EntityBuilder";

const MonsterBuilder = (props) => {
  const { monsterUrl } = props;
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    if (monsterUrl) {
      fetch(monsterUrl)
        .then((response) => response.json())
        .then((json) => {
          setMonsters(json.results);
        });
    }
  }, [monsterUrl]);

  return (
    <div>
      <EntityBuilder
        entityList={monsters}
        defaultListText="Select a monster"
        appendFunction={(entity) => {
          let adventureMonsters = [];
          const storedValue = localStorage.getItem("monsters");
          if (storedValue !== null) {
            adventureMonsters = JSON.parse(storedValue);
          }
          adventureMonsters.push(entity);
          localStorage.setItem("monsters", JSON.stringify(adventureMonsters));
        }}
        saveFunction={(entity) => {
          fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(entity),
          })
            .then((res) => res.json())
            .then();
        }}
      />
    </div>
  );
};

const builder = () => {
  return (
    <Page currentPage="Builder Test">
      <div className="w-screen h-screen ae-paper bg-center bg-no-repeat bg-cover p-56">
        <MonsterBuilder monsterUrl="https://api.open5e.com/monsters/?document__slug=wotc-srd&format=json" />
      </div>
    </Page>
  );
};

export default builder;
