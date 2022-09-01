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
            <td className="">STR</td>
            <td className="">DEX</td>
            <td className="">CON</td>
            <td className="">INT</td>
            <td className="">WIS</td>
            <td className="">CHA</td>
          </tr>
          <tr className="">
            <td className="">{props.str}</td>
            <td className="">{props.dex}</td>
            <td className="">{props.con}</td>
            <td className="">{props.int}</td>
            <td className="">{props.wis}</td>
            <td className="">{props.cha}</td>
          </tr>
        </table>
      </article>

      <Line />

      <article className="inline-flex">
        <h1>Senses</h1>
        <p>{props.senses}</p>
        <h1>Languages </h1>
        <p>{props.lang}</p>
        <h1>Challenge</h1>
        <p>{props.challenge}</p>
      </article>

      <Line />
      
    </div>
  );
};
