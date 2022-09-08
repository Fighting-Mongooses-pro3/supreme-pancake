import React, { useEffect, useState } from "react";
import { EntityBuilder } from "../";
import { useUser } from "@auth0/nextjs-auth0";

export const MonsterBuilder = (props) => {
  const { user } = useUser();

  const [monsterUrl, setMonsterUrl] = useState(props.monsterUrl || "");
  const [onlineMonsters, setOnlineMonsters] = useState([]);
  const [localMonsters, setLocalMonsters] = useState([]);
  const [dbMonsters, setDbMonsters] = useState([]);

  useEffect(() => {
    // Loading monsters from storage
    const storedObject = localStorage.getItem("monsters");
    if (storedObject !== null) {
      console.log("localmonsters", [
        ...Object.values(JSON.parse(storedObject)),
      ]);
      setLocalMonsters([...Object.values(JSON.parse(storedObject))]);
    }

    // Loading monsters from the database
    if (user) {
      fetch(`/api/monster/owner/${user.email}`)
        .then((res) => res.json())
        .then((monsterObj) =>
          setDbMonsters((curMonsters) => [monsterObj, ...curMonsters])
        );
    }
  }, [user]);

  useEffect(() => {
    // Load everything
    if (monsterUrl) {
      fetch(monsterUrl)
        .then((response) => response.json())
        .then((json) => {
          setOnlineMonsters([...onlineMonsters, ...json.results]);
          setMonsterUrl(json.next ? json.next : "");
        });
    }
  }, [monsterUrl, onlineMonsters]);

  /* 
  user ? show button : dont show button

  user.email

  

  */

  return (
    <div>
      <EntityBuilder
        entityLists={[
          {
            defaultString: "-- Monster Manual Monsters --",
            monsters: onlineMonsters,
          },
          { defaultString: "-- Current Creations --", monsters: localMonsters },
          { defaultString: "-- Saved Creations --", monsters: dbMonsters },
        ]}
        defaultListText="Select a monster"
        appendFunction={(entity) => {
          let adventureMonsters = {};
          const storedValue = localStorage.getItem("monsters");
          if (storedValue !== null) {
            adventureMonsters = JSON.parse(storedValue);
          }
          adventureMonsters[entity.uuid] = entity;
          localStorage.setItem("monsters", JSON.stringify(adventureMonsters));
          setLocalMonsters((curMonsters) => [entity, ...curMonsters]);
        }}
        updateFunction={(entity) => {
          let adventureMonsters = {};
          const storedValue = localStorage.getItem("monsters");
          if (storedValue !== null) {
            adventureMonsters = JSON.parse(storedValue);
          }
          adventureMonsters[entity.uuid] = entity;
          localStorage.setItem("monsters", JSON.stringify(adventureMonsters));
          setLocalMonsters((curMonsters) => {
            curMonsters[entity.uuid] = entity;
            console.log("curmons", curMonsters);
            return [...curMonsters];
          });
        }}
        saveFunction={(entity) => {
          fetch(`${baseurl}/api/monster/post`, {
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
