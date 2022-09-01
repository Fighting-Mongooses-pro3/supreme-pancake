import React from "react";
import { Page, Container, Body, Header } from "../../../components";

export const Encounters = () => {
  return (
    <Page currentPage="Encounters" desc="Custom Encounter Balancer">
      <Container>
        <Header title="Custom Encounter Balancer"></Header>
        <Body>
          <div>
            <p>
              Welcome to the '' Custom Encounter Balancer! Dungeon Masters will
              be able to utilize this tool to calculate the XP threshold of a
              set difficulty of encounter for their party's level composition
              and compare that threshold to the combined XP drop of the
              creatures involved in the encounter. A large discrepancy in these
              two numbers will determine whether you should increase or decrease
              the challenge level in order to more closely match your goal
              difficulty.
            </p>
            <p>
              Below you will find a table showing the XP thresholds of different
              difficulty ratings of encounters for a single player character at
              a given level. We have provided a row below the table that will
              allow you to input an XP threshold from this table and multiply
              that number by the number of players at the associated level. You
              can
            </p>
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
                <td>1,100</td>
              </tr>
              <tr>
                <td>6th</td>
                <td>300</td>
                <td>600</td>
                <td>900</td>
                <td>1,400</td>
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
                <td>1,400</td>
                <td>2,100</td>
              </tr>
              <tr>
                <td>9th</td>
                <td>550</td>
                <td>1,100</td>
                <td>1,600</td>
                <td>2,400</td>
              </tr>
              <tr>
                <td>10th</td>
                <td>600</td>
                <td>1,200</td>
                <td>1,900</td>
                <td>2,800</td>
              </tr>
              <tr>
                <td>11th</td>
                <td>800</td>
                <td>1,600</td>
                <td>2,400</td>
                <td>3,600</td>
              </tr>
              <tr>
                <td>12th</td>
                <td>1,000</td>
                <td>2,000</td>
                <td>3,000</td>
                <td>4,500</td>
              </tr>
              <tr>
                <td>13th</td>
                <td>1,100</td>
                <td>2,200</td>
                <td>3,400</td>
                <td>5,100</td>
              </tr>
              <tr>
                <td>14th</td>
                <td>1,250</td>
                <td>2,500</td>
                <td>3,800</td>
                <td>5,700</td>
              </tr>
              <tr>
                <td>15th</td>
                <td>1,400</td>
                <td>2,800</td>
                <td>4,300</td>
                <td>6,400</td>
              </tr>
              <tr>
                <td>16th</td>
                <td>1,600</td>
                <td>3,200</td>
                <td>4,800</td>
                <td>7,200</td>
              </tr>
              <tr>
                <td>17th</td>
                <td>2,000</td>
                <td>3,900</td>
                <td>5,900</td>
                <td>8,800</td>
              </tr>
              <tr>
                <td>18th</td>
                <td>2,100</td>
                <td>4,200</td>
                <td>6,300</td>
                <td>9,500</td>
              </tr>
              <tr>
                <td>19th</td>
                <td>2,400</td>
                <td>4,900</td>
                <td>7,300</td>
                <td>10,900</td>
              </tr>
              <tr>
                <td>20th</td>
                <td>2,800</td>
                <td>5,700</td>
                <td>8,500</td>
                <td>12,700</td>
              </tr>
            </table>
            <input></input>
          </div>
        </Body>
      </Container>
    </Page>
  );
};
