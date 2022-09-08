import React from "react";
import { useState, useEffect } from "react";
import { challengeRatingXpTable } from "../utils/customHooks/DnDMath";

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
          : x
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
          : x
      )
    );
  };
  const calculateXpTotal = (allXp) => {
    return allXp.reduce(
      (acc, xpRow) =>
        xpRow.rating <= 0
          ? acc
          : acc + challengeRatingXpTable[xpRow.rating] * xpRow.numMons,
      0
    );
  };
  return (
    <div>
      <div className="border rounded-md border-black mx-auto bg-blue-200">
        <p className="text-center">
          In this section of the Encounter Balancer, Dungeon Masters will be
          able calculate the total XP from the creatures involved in their
          encounter and compare this value to the difficulty thresholds shown in
          the left-hand column. From there you can decide whether to add or
          subtract creatures from the encounter to get closer to your wanted
          difficulty level, or you can utilize some of our other tips below to
          customize the creatures and other resources to your needs.
        </p>
      </div>
      <br></br>
      <br></br>
      <div className="border rounded-md border-black mx-auto bg-gray-200">
        <h2 className="text-center font-bold underline">
          Tips For Altering The Difficulty Of Your Encounter
        </h2>
        <br></br>
        <p className="text-center">
          If you would like to still make an encounter more or less difficult
          for your players but don&apos;t want to alter the amount of creatures
          present, try one of these methods instead:
        </p>
        <br></br>
        <ul>
          <li>- Alter the HP/AC of some or all of the creatures</li>
          <li>- Give multi-attack to any units with only one attack</li>
          <li>- Add to or take away from damage resistances/immunities</li>
          <li>- Add or subtract from the amount of damage dice per attack</li>
          <li>- Raise or lower the damage die, e.g., D6 to D8</li>
          <li>
            - Give the strongest creature Legendary Actions or add to them
          </li>
          <li>
            - Create Lair Actions set off by creatures or by the general
            environment
          </li>
          <li>
            - Raise or lower ability scores that might affect attacks and
            spellcasting
          </li>
          <li>
            - If the creature has a spell list, add to or take away from that
            list
          </li>
        </ul>
      </div>
      <br></br>
      <br></br>
      <div className="border rounded-3xl border-black mx-auto bg-red-300">
        <h2 className="text-center font-bold underline">Creature Rows</h2>
        <br></br>
        <div className="text-center">
          <button
            className="border rounded-3xl border-black p-2 m-2 hover:bg-white bg-green-400"
            onClick={() => {
              // Add an empty object to the thresholds array
              setMonXp([...monXp, { rating: 0, numMons: 0 }]);
            }}
          >
            Add New Creature
          </button>
          <button
            className="border rounded-3xl border-black p-2 hover:bg-white bg-red-500"
            onClick={() => {
              // Remove an object from the thresholds array
              setMonXp([...monXp.slice(0, -1)]);
            }}
          >
            Remove Creature
          </button>
          <br></br>
          <br></br>
          <div>
            {monXp.map((xpRow, index) => (
              <div key={"xp" + index} className="flex text-center">
                <div>
                  <label htmlFor={"character-level-input-" + index}>
                    Creature:
                  </label>
                  <input
                    className="max-w-[55px]"
                    id={"character-level-input-" + index}
                    value={xpRow.rating}
                    type="number"
                    onChange={(e) =>
                      updateMonRating(e.currentTarget.value, index)
                    }
                  ></input>
                </div>
                <div>
                  <label htmlFor={"character-input-" + index}>
                    Creature Quantity:
                  </label>
                  <input
                    className="max-w-[55px]"
                    id={"character-input-" + index}
                    value={xpRow.numMons}
                    type="number"
                    onChange={(e) =>
                      updateNumMons(e.currentTarget.value, index)
                    }
                  ></input>
                </div>
              </div>
            ))}
            <br></br>
            <br></br>
            <div>
              <div className="text-blue-700 text-3xl">
                <span>Total: </span>
                <span>{calculateXpTotal(monXp)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
