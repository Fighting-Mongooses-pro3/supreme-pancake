import React, { useEffect, useState } from "react";
import { Page, Statblock } from "../components";
import { EntityBuilder } from "../components/buildtools/EntityBuilder/EntityBuilder";

const MonsterBuilder = () => {
  const [selectedEntity, setSelectedEntity] = useState({});
  const [entityChanged, setEntityChanged] = useState(false);
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.open5e.com/monsters/?document__slug=wotc-srd&format=json"
    )
      .then((response) => response.json())
      .then((json) => {
        setEntities(json.results);
      });
  }, []);

  useEffect(() => {
    setEntityChanged(true);
  }, [selectedEntity]);

  useEffect(() => {
    if (entityChanged) setEntityChanged(false);
  }, [entityChanged]);

  return (
    <div>
      <select onChange={(e) => setSelectedEntity(entities[e.target.value])}>
        <option value="" selected>
          Select a monster
        </option>
        {entities.map((entity, index) => (
          <option key={"entity-" + index} value={index}>
            {entity.name}
          </option>
        ))}
      </select>

      {entityChanged ? null : (
        <EntityBuilder
          appendFunction={(entity) => {
            monsters.push(entity);
            localStorage.setItem("monsters", JSON.stringify(monsters));
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
          passedEntity={selectedEntity}
        />
      )}
    </div>
  );
};

const builder = () => {
  return (
    <Page currentPage="Builder Test">
      <div className="w-screen h-screen ae-paper bg-center bg-no-repeat bg-cover p-56">
        <MonsterBuilder />
      </div>
    </Page>
  );
};

export default builder;
