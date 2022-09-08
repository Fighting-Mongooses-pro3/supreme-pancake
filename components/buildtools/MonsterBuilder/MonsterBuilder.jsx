import React, { useEffect, useState } from "react";
import { EntityBuilder } from "../";
import { useUser } from "@auth0/nextjs-auth0";

export const MonsterBuilder = (props) => {
  const { monsterUrl } = props;
  const { user } = useUser();

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

  /* 
  user ? show button : dont show button

  user.email

  

  */

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
