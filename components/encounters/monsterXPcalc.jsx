import React from "react";
import { useState, useEffect } from "react";

export const MonsterXP = () => {
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
          : acc + encounterXpTable[xp.rating - 1][key] * xp.numMons,
      0
    );
  };
  return (
    <div>
      <p>
        In this section of the Encounter Balancer, Dungeon Masters will be able
        calculate the total XP from the creatures involved in their encounter
        and compare this value to the difficulty thresholds shown in the
        left-hand column. From there you can decide whether to add or subtract
        creatures from the encounter to get closer to your wanted difficulty
        level.
      </p>
      <div>
        <button
          onClick={() => {
            // Add an empty object to the thresholds array
            setMonXp([...monXp, { rating: 0, numMons: 0 }]);
          }}
        >
          Add New Monster
        </button>
        <button
          onClick={() => {
            // Remove an object from the thresholds array
            setMonXp([...monXp.slice(0, -1)]);
          }}
        >
          Remove Monster
        </button>
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

              <label htmlFor={"character-input-" + i}>
                Number of this Monster:
              </label>
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
