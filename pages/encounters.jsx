import React from "react";
import { useState, useEffect } from "react";
import { Page, Container, Header } from "../components";
import { encounterXpTable } from "../components/utils/customHooks/DnDMath";

const Encounters = () => {
  const [mounted, setMounted] = useState(false);
  const [xpThresholds, setXpThresholds] = useState([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateThresholdXp = (value, index) => {
    setXpThresholds((oldThresholds) =>
      oldThresholds.map((t, i) =>
        index === i
          ? {
              level: t.level,
              numChars: t.numChars,
            }
          : t
      )
    );
  };
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
    // const totals = { easy: 0, medium: 0, hard: 0, deadly: 0 };
    // xpThresholds.reduce((acc, threshold) => {
    //   acc.keys().forEach((key) => {
    //     acc.key +=
    //       encounterXpTable[threshold.level - 1].key * threshold.numChars;
    //   });
    //   return acc;
    // }, totals);
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
              <h2>XP Thresholds Table</h2>
              <table>
                <tr>
                  <th>Character Level</th>
                  <th>Easy</th>
                  <th>Medium</th>
                  <th>Hard</th>
                  <th>Deadly</th>
                </tr>
                <tr>
                  <td>1st</td>
                  <td>25</td>
                  <td>50</td>
                  <td>75</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>50</td>
                  <td>100</td>
                  <td>150</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>3rd</td>
                  <td>75</td>
                  <td>150</td>
                  <td>225</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>4th</td>
                  <td>125</td>
                  <td>250</td>
                  <td>375</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>5th</td>
                  <td>250</td>
                  <td>500</td>
                  <td>750</td>
                  <td>1100</td>
                </tr>
                <tr>
                  <td>6th</td>
                  <td>300</td>
                  <td>600</td>
                  <td>900</td>
                  <td>1400</td>
                </tr>
                <tr>
                  <td>7th</td>
                  <td>25</td>
                  <td>50</td>
                  <td>75</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>8th</td>
                  <td>450</td>
                  <td>900</td>
                  <td>1400</td>
                  <td>2100</td>
                </tr>
                <tr>
                  <td>9th</td>
                  <td>550</td>
                  <td>1100</td>
                  <td>1600</td>
                  <td>2400</td>
                </tr>
                <tr>
                  <td>10th</td>
                  <td>600</td>
                  <td>1200</td>
                  <td>1900</td>
                  <td>2800</td>
                </tr>
                <tr>
                  <td>11th</td>
                  <td>800</td>
                  <td>1600</td>
                  <td>2400</td>
                  <td>3600</td>
                </tr>
                <tr>
                  <td>12th</td>
                  <td>1000</td>
                  <td>2000</td>
                  <td>3000</td>
                  <td>4500</td>
                </tr>
                <tr>
                  <td>13th</td>
                  <td>1100</td>
                  <td>2200</td>
                  <td>3400</td>
                  <td>5100</td>
                </tr>
                <tr>
                  <td>14th</td>
                  <td>1250</td>
                  <td>2500</td>
                  <td>3800</td>
                  <td>5700</td>
                </tr>
                <tr>
                  <td>15th</td>
                  <td>1400</td>
                  <td>2800</td>
                  <td>4300</td>
                  <td>6400</td>
                </tr>
                <tr>
                  <td>16th</td>
                  <td>1600</td>
                  <td>3200</td>
                  <td>4800</td>
                  <td>7200</td>
                </tr>
                <tr>
                  <td>17th</td>
                  <td>2000</td>
                  <td>3900</td>
                  <td>5900</td>
                  <td>8800</td>
                </tr>
                <tr>
                  <td>18th</td>
                  <td>2100</td>
                  <td>4200</td>
                  <td>6300</td>
                  <td>9500</td>
                </tr>
                <tr>
                  <td>19th</td>
                  <td>2400</td>
                  <td>4900</td>
                  <td>7300</td>
                  <td>10900</td>
                </tr>
                <tr>
                  <td>20th</td>
                  <td>2800</td>
                  <td>5700</td>
                  <td>8500</td>
                  <td>12700</td>
                </tr>
              </table>
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
