import React from "react";
import { useState, useEffect } from "react";

export const MonsterXp = () => {
  const [mounted, setMounted] = useState(false);
  const [monXp, setMonXp] = useState([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateNumMons = (value, index) => {
    setMonXp((oldXp) =>
      oldXp.map((x, i) =>
        index === i
          ? {
              rating: x.rating,
              numMons: value,
            }
          : t
      )
    );
  };
  const updateMonRating = (value, index) => {
    setMonXp((oldXp) =>
      oldXp.map((x, i) =>
        index === i
          ? {
              rating: value,
              numMons: x.numMons,
            }
          : t
      )
    );
  };
  const calculateXpTotal = (allXp, key) => {
    return allXp.reduce(
      (acc, xp) =>
        xp.rating <= 0
          ? acc
          : acc + challengeRatingXpTable[xp.rating - 1][key] * xp.numMons,
      0
    );
  };
  return (
    <div>
      <p className="text-center">
        In this section of the Encounter Balancer, Dungeon Masters will be able
        calculate the total XP from the creatures involved in their encounter
        and compare this value to the difficulty thresholds shown in the
        left-hand column. From there you can decide whether to add or subtract
        creatures from the encounter to get closer to your wanted difficulty
        level, or you can utilize some of our other tips below to customize the
        creatures and other resources to your needs.
      </p>
      <br></br>
      <br></br>
      <h2 className="text-center font-bold">
        Tips For Altering The Difficulty Of Your Encounter
      </h2>
      <br></br>
      <p className="text-center">
        If you would like to still make an encounter more or less difficult for
        your players but don&apos;t want to alter the amount of creatures
        present, try one of these methods instead:
      </p>
      <br></br>
      <ul>
        <li>- Alter the HP of some or all of the creatures</li>
        <li>- Alter the AC of some or all of the creatures</li>
        <li>- Give multi-attack to any units with only one attack</li>
        <li>- Add to or take away from damage resistances/immunities</li>
        <li>- Add or subtract from the amount of damage dice per attack</li>
        <li>- Raise or lower the damage die, e.g., D6 to D8</li>
        <li>- Give the strongest creature Legendary Actions or add to them</li>
        <li>
          - Create Lair Actions set off by creatures or by the general
          environment
        </li>
        <li>
          - Raise or lower ability scores that might affect attacks and
          spellcasting
        </li>
        <li>
          - If the creature has a spell list, add to or take away from that list
        </li>
      </ul>
      <br></br>
      <br></br>
      <div>
        <button
          className="border-solid border-4 border-black p-2 m-2"
          onClick={() => {
            // Add an empty object to the thresholds array
            setMonXp([...monXp, { rating: 0, numMons: 0 }]);
          }}
        >
          Add New Monster
        </button>
        <button
          className="border-solid border-4 border-black p-2"
          onClick={() => {
            // Remove an object from the thresholds array
            setMonXp([...monXp.slice(0, -1)]);
          }}
        >
          Remove Monster
        </button>
        <br></br>
        <br></br>
        <div>
          {monXp.map((xp, i) => (
            <div key={"xp" + i}>
              <label htmlFor={"character-level-input-" + i}>Monster:</label>
              <input
                id={"character-level-input-" + i}
                value={xp.rating}
                type="number"
                onChange={(e) => updateMonRating(e.currentTarget.value, i)}
              ></input>

              <label htmlFor={"character-input-" + i}>Monster Quantity:</label>
              <input
                id={"character-input-" + i}
                value={xp.numMons}
                type="number"
                onChange={(e) => updateNumMons(e.currentTarget.value, i)}
              ></input>
            </div>
          ))}
          <div>
            <div>
              <span>Total: </span>
              <span>{calculateXpTotal(monXp, {})}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
