import React, { useState } from "react";
import { encounterXpTable } from "../";

export const CharacterXp = () => {
  const [xpThresholds, setXpThresholds] = useState([]);

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
    <div>
      <p className="text-center ">
        Below you will find two buttons that can add or remove rows to this
        piece of the Encounter Balancer. Each row will have two input fields:
        one for the level of the characters in your party, and another for how
        many characters are at that level currently. You can then add more rows
        for each unique level of characters that comprise the party.
        <br></br>
        <br></br>
        For example, we will take a party of five characters, three of which are
        level 8, and two of which are level 9. There are two different levels
        represented here so you would need two rows. One row would have the
        character level field set to 8, and the number of characters field set
        to 3. The second row would have the character level field set to 9, and
        the number of characters field set to 2. Once these fields have been
        input, you will see that the difficulty level fields below will
        auto-populate with the total XP thresholds for the entirety of the
        party.
      </p>
      <br></br>
      <br></br>
      <div className=" ">
        <button
          className="border rounded-3xl border-black p-2 m-2 hover:bg-white bg-green-300"
          onClick={() => {
            // Add an empty object to the thresholds array
            setXpThresholds([...xpThresholds, { level: 0, numChars: 0 }]);
          }}
        >
          Add New Character Level
        </button>
        <button
          className="border rounded-3xl border-black p-2 hover:bg-white bg-red-400"
          onClick={() => {
            // Remove an object from the thresholds array
            setXpThresholds([...xpThresholds.slice(0, -1)]);
          }}
        >
          Remove Character Level
        </button>
        <br></br>
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
                  onChange={(e) => updateNumChars(e.currentTarget.value, i)}
                ></input>
              </div>
            </div>
          ))}
          <br></br>
          <br></br>
          <div className="text-center text-3xl">
            <div className="text-green-600">
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
  );
};
