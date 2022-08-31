import React from "react";
import { DummyForm } from "../dummyForm/DummyForm";

export const MonsterBuilder = (props) => {
  const { updateMonsters } = props;

  //   const [monsters, setMonsters] = useState([]);
  const monsters = [{ Name: "Beholder" }];

  const setMonster = (newMonster, key) => {
    monsters.push(newMonster);
    updateMonsters(monsters);
    // monsters.map((monster) => {
    //   if (monster.key === key) {
    //     return newMonster;
    //   } else {
    //     return monster;
    //   }
    // });
  };

  return (
    <div>
      <p>MonsterBuilder</p>
      {monsters.map((monster, index) => (
        <div key={index}>
          {/* <p>{monster.Name}</p> */}
          <DummyForm
            object={monster}
            update={(monster) => setMonster(monster, 0)}
          />
        </div>
      ))}
    </div>
  );
};
