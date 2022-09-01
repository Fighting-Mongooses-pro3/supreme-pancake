import React from "react";
import { Page, Statblock } from "../components";

const MonsterTest = () => {
  return (
    <Page currentPage="Andrew's Monster Test">
      <div className="w-screen h-screen ae-paper bg-center bg-no-repeat bg-cover p-56">
        <Statblock
          name="Monster"
          sizes="Medium humanoid, any alignment"
          ac="10"
          hp="22, (5d8)"
          speed="30 ft."
          strength='1'
          dex="17 (+0)"
          con="13 (+0)"
          int="11 (+0)"
          wis="13 (+0)"
          cha="17 (+0)"
          senses="passive Perception 10"
          lang="----"
          challenge="1/4"
        />

        {/* <Statblock
        customCss=""
        name={monster.name}
        sizes={monster.size}
        ac={monster.ac}
        hp={monster.hp}
        speed={monster.speed}
        str={monster.str}
        dex={monster.dex}
        con={monster.con}
        int={monster.int}
        wis={monster.wis}
        cha={monster.cha}
        senses={monster.senses}
        lang={monster.lang}
        challenge={monster.challenge}
      /> */}
      </div>
    </Page>
  );
};

export default MonsterTest;
