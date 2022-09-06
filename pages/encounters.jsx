import React from "react";
import { useState, useEffect } from "react";
import { Page, Container, Header } from "../components";
import { encounterXpTable } from "../components/utils/DnDMath";

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
      <Container>
        <Header title="Custom Encounter Balancer"></Header>
        {mounted ? (
          <div>
            <div>
              <p>
                Welcome to the &apos;Supreme Pancake&apos; Custom Encounter
                Balancer! Dungeon Masters will be able to utilize this tool to
                calculate the XP threshold of a set difficulty of encounter for
                their party&apos;s level composition and compare that threshold
                to the combined XP drop of the creatures involved in the
                encounter. A large discrepancy in these two numbers will
                determine whether you should increase or decrease the challenge
                level in order to more closely match your encounter&apos;s goal
                difficulty.
                <br></br>
                Below you will find a table showing the XP thresholds of
                different difficulty ratings of encounters for a single player
                character at a given level. We have provided rows below the
                table that will allow you to input an XP threshold from this
                table and multiply that number by the number of players at the
                associated level. All of these XP Threshold totals will be
                combined to figure out the total XP Threshold number for the
                entirety of the party.
              </p>
              <p>
                Below you&apos;ll find a field to input an XP Threshold pulled
                from the table above, and a second field to input the number of
                players equal to that XP Threshold&apos;s corresponding player
                level. These two numbers multiplied together will show the total
                XP Threshold for the party.
                <br></br>
                We have supplied multiple rows in order to allow for a variety
                of possible party level compositions. All of the XP Threshold
                totals by party level will be combined and shown in the Total XP
                Threshold field at the bottom.
              </p>
              <div>
                <button
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
                  onClick={() => {
                    // Remove an object from the thresholds array
                    setXpThresholds([...xpThresholds.slice(0, -1)]);
                  }}
                >
                  Remove Character Level
                </button>
                <div>
                  {xpThresholds.map((threshold, i) => (
                    <div key={"threshold" + i}>
                      <label htmlFor={"character-level-input-" + i}>
                        Character Level:
                      </label>
                      <input
                        id={"character-level-input-" + i}
                        value={threshold.level}
                        type="number"
                        onChange={(e) =>
                          updateThresholdLevel(e.currentTarget.value, i)
                        }
                      ></input>

                      <label htmlFor={"character-input-" + i}>
                        Number of Characters at associated level:
                      </label>
                      <input
                        id={"character-input-" + i}
                        value={threshold.numChars}
                        type="number"
                        onChange={(e) =>
                          updateNumChars(e.currentTarget.value, i)
                        }
                      ></input>
                    </div>
                  ))}
                  <div>
                    <div>
                      <span>Easy</span>
                      <span>{calculateXpTotal(xpThresholds, "easy")}</span>
                    </div>
                    <div>
                      <span>Medium</span>
                      <span>{calculateXpTotal(xpThresholds, "medium")}</span>
                    </div>
                    <div>
                      <span>Hard</span>
                      <span>{calculateXpTotal(xpThresholds, "hard")}</span>
                    </div>
                    <div>
                      <span>Deadly</span>
                      <span>{calculateXpTotal(xpThresholds, "deadly")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p></p>
            </div>
          </div>
        ) : null}
      </Container>
    </Page>
  );
};

export default Encounters;
