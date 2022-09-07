import React from "react";
import { MonsterXp } from "./MonsterXp";
import { CharacterXp } from "./CharacterXp";
import { Container } from "../container/container";

export const EncounterBalancer = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-papyr mx-auto">
        <p className="container mx-auto bg-yellow-600 font-bold text-xl text-center border-solid border-4 border-black">
          Welcome to the House Ruled Custom Encounter Balancer!
          <br></br>
          <br></br>
          Dungeon Masters will be able to utilize this tool to calculate the XP
          thresholds of Easy, Medium, Hard, and Deadly encounters for their
          party, and compare that amount to the total XP of the creatures in
          your encounter to see into what difficulty range that number falls.
          From here, Dungeon Masters can then increase or decrease the
          difficulty by altering the amount of creatures within the encounter,
          by changing which creatures are involved, or by utilizing one of the
          tips we have given to amend aspects of creatures or the environment.
          <br></br>
          <br></br>
          Once a Dungeon Master has found the sweet spot for their desired
          difficulty level, they are ready to implement the encounter in their
          game! Happy Adventuring!
        </p>
        <Container>
          <div className="flex ">
            <div className="container gap-4 px-8 text-xl font-medium ">
              <CharacterXp />
            </div>
            <div className="container gap-4 px-8 text-xl font-medium">
              <MonsterXp />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
