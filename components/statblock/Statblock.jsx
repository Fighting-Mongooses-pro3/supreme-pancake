import React from "react";
import { Line } from "../";

/*
type props = {
    customCss: string
    name: string
    sizes:  string
    ac: string
    hp: string
    speed: string
    str: string
    dex: string
    con: string
    int: string
    wis: string
    cha: string
    senses: string
    lang: string
    challenge: string
}
*/
export const Statblock = (props) => {
  return (
    <div className="inline-block ae-stat-block self-center">
      <section className="ae-stat-border"></section>

      <section className={`ae-border p-2 ${props.customCss}`}>
        <h1 className="text-red-600 font-mono text-xl">{props.name}</h1>
        <p className="text-black font-serif text-sm">{props.sizes}</p>
      </section>

      <Line />

      <article className="inline">
        <h1 className="text-red-600 font-mono">Armor Class</h1>
        <p className="font-serif">{props.ac}</p>
        <br />
        <h1 className="text-red-600 font-mono">Hit Points</h1>
        <p className="font-serif">{props.hp}</p>
        <br />

        <h1 className="text-red-600 font-mono">Speed</h1>
        <p className="font-serif">{props.speed}</p>
        <br />
      </article>

      <Line />

      <article className="">
        <table className="">
          <thead>
            <tr className="">
              <th className="text-black p-2">STR</th>
              <th className="text-black p-2">DEX</th>
              <th className="text-black p-2">CON</th>
              <th className="text-black p-2">INT</th>
              <th className="text-black p-2">WIS</th>
              <th className="text-black p-2">CHA</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="text-black text-lg border-r-8 border-transparent">
                {props.str}
              </td>
              <td className="text-black text-lg border-r-8 border-transparent">
                {props.dex}
              </td>
              <td className="text-black text-lg border-r-8 border-transparent">
                {props.con}
              </td>
              <td className="text-black text-lg border-r-8 border-transparent">
                {props.int}
              </td>
              <td className="text-black text-lg border-r-8 border-transparent">
                {props.wis}
              </td>
              <td className="text-black text-lg border-r-8 border-transparent">
                {props.cha}
              </td>
            </tr>
          </tbody>
        </table>
      </article>

      <Line />

      <section className="inline-block">
        <article className="">
          <h1>Senses</h1>&nbsp;<p>{props.senses}</p>
        </article>
        <article className="inline-flex">
          <h1>Languages </h1>&nbsp;
          <p>{props.lang}</p>
        </article>

        <article className="inline-flex">
          <h1>Challenge</h1>&nbsp;
          <p>{props.challenge}</p>
        </article>
      </section>

      <section className="ae-stat-border"></section>
    </div>
  );
};
