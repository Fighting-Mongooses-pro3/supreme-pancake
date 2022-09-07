import React, { useEffect, useState } from "react";
import { EntityBuilder } from "../";

export const MonsterBuilder = (props) => {
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
          let adventureMonsters = {};
          const storedValue = localStorage.getItem("monsters");
          if (storedValue !== null) {
            adventureMonsters = JSON.parse(storedValue);
          }
          adventureMonsters[entity.id] = entity;
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
