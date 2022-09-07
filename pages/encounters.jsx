import React from "react";
import { useState, useEffect } from "react";
import { Page, Container, MonsterXp } from "../components";
import { encounterXpTable } from "../components/utils/customHooks/DnDMath";

const Encounters = () => {
  const [mounted, setMounted] = useState(false);
  const [xpThresholds, setXpThresholds] = useState([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateNumChars = (value, index) => {
    setXpThresholds((oldThresholds) =>
      oldThresholds.map((t, i) =>
        index === i
          ? {
              level: t.level,
              numChars: value,
            }
          : t
      )
    );
  };
  const updateThresholdLevel = (value, index) => {
    setXpThresholds((oldThresholds) =>
      oldThresholds.map((t, i) =>
        index === i
          ? {
              level: value,
              numChars: t.numChars,
            }
          : t
      )
    );
  };
  const calculateXpTotal = (thresholds, key) => {
    return thresholds.reduce(
      (acc, threshold) =>
        threshold.level <= 0
          ? acc
          : acc +
            encounterXpTable[threshold.level - 1][key] * threshold.numChars,
      0
    );
  };

  return (
    <Page currentPage="Encounters" desc="Custom Encounter Balancer">
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
          {mounted ? (
            <div className="flex ">
              <div className="container gap-4 px-8 text-xl font-medium ">
                <p className="text-center ">
                  Below you will find two buttons that can add or remove rows to
                  this piece of the Encounter Balancer. Each row will have two
                  input fields: one for the level of the characters in your
                  party, and another for how many characters are at that level
                  currently. You can then add more rows for each unique level of
                  characters that comprise the party.
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  For example, we will take a party of five characters, three of
                  which are level 8, and two of which are level 9. There are two
                  different levels represented here so you would need two rows.
                  One row would have the character level field set to 8, and the
                  number of characters field set to 3. The second row would have
                  the character level field set to 9, and the number of
                  characters field set to 2. Once these fields have been input,
                  you will see that the difficulty level fields below will
                  auto-populate with the total XP thresholds for the entirety of
                  the party.
                </p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className=" ">
                  <button
                    className="border-solid border-4 border-black p-2 m-2"
                    onClick={() => {
                      // Add an empty object to the thresholds array
                      setXpThresholds([
                        ...xpThresholds,
                        { level: 0, numChars: 0 },
                      ]);
                    }}
                  >
                    Add New Character Level
                  </button>
                  <button
                    className="border-solid border-4 border-black p-2"
                    onClick={() => {
                      // Remove an object from the thresholds array
                      setXpThresholds([...xpThresholds.slice(0, -1)]);
                    }}
                  >
                    Remove Character Level
                  </button>
                  <div>
                    {xpThresholds.map((threshold, i) => (
                      <div key={"threshold" + i} className="flex">
                        <div>
                          <label htmlFor={"character-level-input-" + i}>
                            Character Level:
                          </label>
                          <input
                            className="max-w-[55px]"
                            id={"character-level-input-" + i}
                            value={threshold.level}
                            type="number"
                            onChange={(e) =>
                              updateThresholdLevel(e.currentTarget.value, i)
                            }
                          ></input>
                        </div>
                        <div>
                          <label htmlFor={"character-input-" + i}>
                            Number of Characters at associated level:
                          </label>
                          <input
                            className="max-w-[55px]"
                            id={"character-input-" + i}
                            value={threshold.numChars}
                            type="number"
                            onChange={(e) =>
                              updateNumChars(e.currentTarget.value, i)
                            }
                          ></input>
                        </div>
                      </div>
                    ))}
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="text-center">
                      <div className="text-green-500">
                        <span>Easy: </span>
                        <span>{calculateXpTotal(xpThresholds, "easy")}</span>
                      </div>
                      <br></br>
                      <br></br>
                      <div className="text-yellow-600">
                        <span>Medium: </span>
                        <span>{calculateXpTotal(xpThresholds, "medium")}</span>
                      </div>
                      <br></br>
                      <br></br>
                      <div className="text-red-600">
                        <span>Hard: </span>
                        <span>{calculateXpTotal(xpThresholds, "hard")}</span>
                      </div>
                      <br></br>
                      <br></br>
                      <div className="text-black">
                        <span>Deadly: </span>
                        <span>{calculateXpTotal(xpThresholds, "deadly")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container gap-4 px-8 text-xl font-medium">
                <MonsterXp />
              </div>
            </div>
          ) : null}
        </Container>
      </div>
    </Page>
  );
};

export default Encounters;
