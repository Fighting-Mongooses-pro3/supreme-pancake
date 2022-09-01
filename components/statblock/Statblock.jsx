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
    <div className="ae-stat-block inline-block">
      <Line />

      <section className={`ae-border ${props.customCss}`}>
        <h1 className="text-red-600 font-mono text-xl">{props.name}</h1>
        <p className="text-black font-serif text-sm">{props.sizes}</p>
      </section>

      <Line />

      <article className="inline-flex">
        <h1 className="text-red-600 font-mono">Armor Class</h1>
        <p className="font-serif">{props.ac}</p>
        <br />
      </article>

      <article className="inline-flex">
        <h1 className="text-red-600 font-mono">Hit Points</h1>
        <p className="font-serif">{props.hp}</p>

        <br />
      </article>

      <article className="inline-flex">
        <h1 className="text-red-600 font-mono">Speed</h1>
        <p className="font-serif">{props.speed}</p>
        <br />
      </article>

      <Line />

      <article className="inline-flex">
        <table className="">
          <tr className="">
            <thead>
              <td className="text-black p-2">STR</td>
              <td className="text-black p-2">DEX</td>
              <td className="text-black p-2">CON</td>
              <td className="text-black p-2">INT</td>
              <td className="text-black p-2">WIS</td>
              <td className="text-black p-2">CHA</td>
            </thead>
          </tr>
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
        </table>
      </article>

      <Line />

      <article className="inline-flex">
        <h1>Senses</h1>
        <p>{props.senses}</p>
        <br />
        <h1>Languages </h1>
        <p>{props.lang}</p>
        <h1>Challenge</h1>
        <p>{props.challenge}</p>
      </article>

      <Line />
    </div>
  );
};
