import React from "react";
import { Line } from "../";

// add dynamic data from api call
// finish styling shit
// &nbsp; for line break??

/*
type props = {
    customCss: string
    monName: string
    size:  string
    type: string
    subtype?: string
    alignment: string
    ac: string
    armor_desc: string
    hit_points: string
    hit_dice: string
    speed: string
    strength: string
    strength_save: string
    dexterity: string
    dexterity_save: string
    constitution: string
    constitution_save: string
    intelligence: string
    intelligence_save: string
    wisdom: string
    wisdom_save: string
    charisma: string
    charisma_save: string
    perception?: string
    senses: string
    languages: string
    challenge: string
}
*/
export const Statblock = (props) => {
  const proficiencyBonus = () => {
    let cr = props.challenge;
    if (cr === NaN) {
      return 2;
    } else {
      return Math.max(0, Math.ceil((cr - 4) / 4)) + 2;
    }
  };

  return (
    <div className="inline-block ae-stat-block self-center -z-50">
      <section className="ae-stat-border"></section>

      <section className={`ae-border ${props.customCss}`}>
        <h1 className="text-red-600 font-mono text-lg md:text-3xl ml-2">
          {props.name}
        </h1>
        <p className="text-black font-serif text-sm ml-2">
          {props.size} , {props.type}
          {props.subtype ? "," + props.subtype : null} {props.alignment}
        </p>
      </section>

      <Line />

      <article className="inline-flex ml-2">
        <h1 className="text-red-600 font-mono">Armor Class</h1>
        &nbsp;
        <p className="font-serif">
          {props.armor_class} {props.armor_desc ? "," + props.armor_desc : null}
        </p>
      </article>
      <br />

      <article className="inline-flex ml-2">
        <h1 className="text-red-600 font-mono">Hit Points</h1>&nbsp;
        <p className="font-serif">
          {props.hit_points} ({props.hit_dice})
        </p>
      </article>
      <br />

      <article className="inline-flex ml-2">
        <h1 className="text-red-600 font-mono">Speed</h1>&nbsp;
        <p className="font-serif">{props.speed?.walk}</p>
      </article>
      <br />

      <Line />

      <article className="">
        <table className="">
          <thead>
            <tr className="">
              <th className="text-black text-xl">STR</th>
              <th className="text-black text-xl">DEX</th>
              <th className="text-black text-xl">CON</th>
              <th className="text-black text-xl">INT</th>
              <th className="text-black text-xl">WIS</th>
              <th className="text-black text-xl">CHA</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="text-black text-lg border-r-8 border-transparent">
                {props.strength}(
                {"+" + Math.ceil((props.strength - 1) / 2 + -5)})
              </td>
              <td className="text-black text-lg border-r-8 border-transparent">
                {props.dexterity}({Math.ceil((props.dexterity - 1) / 2 + -5)})
              </td>
              <td className="text-black text-lg border-r-8 border-transparent">
                {props.constitution}(
                {Math.ceil((props.constitution - 1) / 2 + -5)})
              </td>
              <td className="text-black text-lg border-r-8 border-transparent">
                {props.intelligence}(
                {Math.ceil((props.intelligence - 1) / 2 + -5)})
              </td>
              <td className="text-black text-lg border-r-8 border-transparent">
                {props.wisdom}({Math.ceil((props.wisdom - 1) / 2 + -5)})
              </td>
              <td className="text-black text-lg border-r-8 border-transparent">
                {props.charisma}({Math.ceil((props.charisma - 1) / 2 + -5)})
              </td>
            </tr>
          </tbody>
        </table>
      </article>

      <Line />

      <section className="mt-2 ml-2">
        <article className="inline-flex mb-2">
          <h1>Senses</h1>&nbsp;
          <p className="">{props.senses}</p>
        </article>
        <br />

        <article className="inline-flex mb-2">
          <h1>Languages </h1>&nbsp;
          <p className="">{props.languages}</p>
        </article>
        <br />

        <article className="inline-flex mb-2">
          <h1>Challenge</h1>&nbsp;
          <p className="">{props.challenge}</p>
        </article>
        <br />

        <article className="inline-flex mb-2">
          <h1>Proficenicy Bonus</h1>&nbsp;
          <p className="">{proficiencyBonus()}</p>
        </article>
        <br />

        {props.damage_vulnerabilities ? (
          <>
            <article className="inline-flex mb-2">
              <h1>Damage Immunities</h1>&nbsp;
              <p className="">{props.damage_vulnerabilities}</p>
            </article>
            <br />
          </>
        ) : null}
        {props.damage_resistances ? (
          <>
            <article className="inline-flex mb-2">
              <h1>Damage Resistances</h1>&nbsp;
              <p className="">{props.damage_resistances}</p>
            </article>
            <br />
          </>
        ) : null}
        {props.damage_immunities ? (
          <>
            <article className="inline-flex mb-2">
              <h1>Damage Immunities</h1>&nbsp;
              <p className="">{props.damage_immunities}</p>
            </article>
            <br />
          </>
        ) : null}
      </section>

      {props.actions ? (
        <>
          <section className="mt-2 ml-2">
            {props.actions.map((action, index) => {
              return (
                <article className="inline-flex mb-2" key={index}>
                  <h1>{action.name}</h1>&nbsp;
                  <p className="">{action.desc}</p>
                  <br />
                </article>
              );
            })}
          </section>
          <Line />
        </>
      ) : null}

      {props.reactions ? (
        <section className="mt-2 ml-2">
          {props.reactions.map((reaction, index) => {
            return (
              <article className="inline-flex mb-2" key={index}>
                <h1>{reaction.name}</h1>&nbsp;
                <p className="">{reaction.desc}</p>
                <br />
              </article>
            );
          })}
        </section>
      ) : null}

      {props.legendary_actions ? (
        <section className="mt-2 ml-2">
          {props.legendary_actions.map((legendary_action, index) => {
            return (
              <article className="inline-flex mb-2" key={index}>
                <h1>{legendary_action.name}</h1>&nbsp;
                <p className="">{legendary_action.desc}</p>
                <br />
              </article>
            );
          })}
        </section>
      ) : null}

      {props.special_abilities ? (
        <section className="mt-2 ml-2">
          {props.special_abilities.map((special_ability, index) => {
            return (
              <article className="inline-flex mb-2" key={index}>
                <h1>{special_ability.name}</h1>&nbsp;
                <p className="">{special_ability.desc}</p>
                <br />
              </article>
            );
          })}
        </section>
      ) : null}

      <section className="ae-stat-border"></section>
    </div>
  );
};
