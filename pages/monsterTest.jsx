import React, { useEffect, useState } from "react";
import { Page, Statblock } from "../components";
import axios from "axios";

const MonsterTest = () => {
  const [monsterCall, setMonster] = useState([]);

  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/monsters/acolyte").then((res) => {
      setMonster([res.data]);
    });
  }, []);

  const renderStatblock = (monster) => {
    console.log("FUNC", monster);
    return monster.map((mon, i) => {
      return (
        <Statblock
          key={i}
          monName={mon.name}
          size={mon.size}
          armor_class={mon.armor_class}
          hit_points={mon.hit_points}
          speed={mon.speed.walk}
          strength={mon.strength}
          dexterity={mon.dexterity}
          constitution={mon.constitution}
          intelligence={mon.intelligence}
          wisdom={mon.wisdom}
          charisma={mon.charisma}
          // senses={mon.senses}
          languages={mon.languages}
          challenge={mon.challenge}
        />
      );
    });
  };

  return (
    <Page currentPage="Andrew's Monster Test">
      <div className="w-screen min-h-screen">
        {renderStatblock(monsterCall)}
      </div>
    </Page>
  );
};

export default MonsterTest;
