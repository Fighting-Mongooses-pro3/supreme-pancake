import React from "react";
import { Line } from "../../utils/reuse/line";
import { BuilderEntityHeader } from "./BuilderEntityHeader/BuilderEntityHeader";

// add dynamic data from api call
// finish styling shit
// &nbsp; for line break??

/*
type props = {
    customCss: string
    name: string
    size:  string
    type: string
    subtype?: string
    alignment: string
    ac: string
    armor_desc: string
    hp: string
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
    lang: string
    challenge: string
    damage_vulnerabilities
    damage_resistances
    damage_immunities
    condition_immunities
    actions: [action]
    reactions: [action]
    legendary_desc: [string]
    legendary_actions: [action]
    special_abilities: [action]
}

type action = {
  name: string
  desc: string
}
*/
export const BuilderStatblock = (props) => {
  const {
    customCss,
    name,
    size,
    type,
    subtype,
    alignment,
    ac,
    armor_desc,
    hp,
    hit_dice,
    speed,
    strength,
    strength_save,
    dexterity,
    dexterity_save,
    constitution,
    constitution_save,
    intelligence,
    intelligence_save,
    wisdom,
    wisdom_save,
    charisma,
    charisma_save,
    perception,
    senses,
    lang,
    challenge,
    damage_vulnerabilitie,
    damage_resistance,
    damage_immunitie,
    condition_immunitie,
    actions,
    reactions,
    legendary_desc,
    special_abilities,
    legendary_actions,
  } = props;
  const proficiencyBonus = () => {
    let cr = props.challenge;
    if (cr === NaN) {
      console.log(cr);
      return "+ 2";
    } else {
      return Math.max(0, Math.ceil((cr - 4) / 4)) + 2;
    }
  };

  return (
    <div className="inline-block ae-stat-block self-center">
      <section className="ae-stat-border"></section>

      <BuilderEntityHeader
        name={name}
        size={size}
        type={type}
        subtype={subtype}
        alignment={alignment}
        customCss={customCss}
      />

      <Line />

      <article className="inline-flex ml-2">
        <h1 className="text-red-600 font-mono">Armor Class</h1>
        &nbsp;
        <p className="font-serif cursor-cell" contentEditable>
          {props.ac} {props.armor_desc ? "," + props.armor_desc : null}
        </p>
      </article>
      <br />

      <article className="inline-flex ml-2">
        <h1 className="text-red-600 font-mono">Hit Points</h1>&nbsp;
        <p className="font-serif cursor-cell" contentEditable>
          {props.hp} ({props.hit_dice})
        </p>
      </article>
      <br />

      <article className="inline-flex ml-2">
        <h1 className="text-red-600 font-mono">Speed</h1>&nbsp;
        <p className="font-serif cursor-cell" contentEditable>
          {props.speed}
        </p>
      </article>
      <br />

      <Line />

      <article className="">
        <table className="">
          <thead>
            <tr className="">
              <th className="text-black">STR</th>
              <th className="text-black">DEX</th>
              <th className="text-black">CON</th>
              <th className="text-black">INT</th>
              <th className="text-black">WIS</th>
              <th className="text-black">CHA</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td
                className="text-black text-lg border-r-8 border-transparent cursor-cell pl-4"
                contentEditable
              >
                {props.strength}(
                {"+" + Math.ceil((props.strength - 1) / 2 + -5)})
              </td>
              <td
                className="text-black text-lg border-r-8 border-transparent cursor-cell pl-4"
                contentEditable
              >
                {props.dex}({Math.ceil((props.dex - 1) / 2 + -5)} )
                {props.dexterity_save ? strength_save : "+0"}
              </td>
              <td
                className="text-black text-lg border-r-8 border-transparent cursor-cell pl-4"
                contentEditable
              >
                {props.con}({Math.ceil((props.con - 1) / 2 + -5)} )
                {props.constitution_save ? strength_save : "+0"}
              </td>
              <td
                className="text-black text-lg border-r-8 border-transparent cursor-cell pl-4"
                contentEditable
              >
                {props.int}({Math.ceil((props.int - 1) / 2 + -5)} )
                {props.intelligence_save ? strength_save : "+0"}
              </td>
              <td
                className="text-black text-lg border-r-8 border-transparent cursor-cell pl-4"
                contentEditable
              >
                {props.wis}({Math.ceil((props.wis - 1) / 2 + -5)} )
                {props.wisdom_save ? strength_save : "+0"}
              </td>
              <td
                className="text-black text-lg border-r-8 border-transparent cursor-cell pl-4"
                contentEditable
              >
                {props.cha}({Math.ceil((props.cha - 1) / 2 + -5)} )
                {props.charisma_save ? strength_save : "+0"}
              </td>
            </tr>
          </tbody>
        </table>
      </article>

      <Line />

      <section className="mt-2 ml-2">
        <article className="inline-flex mb-2">
          <h1>Senses</h1>&nbsp;
          <p className="cursor-cell" contentEditable>
            {props.senses}
          </p>
        </article>
        <br />

        <article className="inline-flex mb-2">
          <h1>Languages </h1>&nbsp;
          <p className="cursor-cell" contentEditable>
            {props.lang}
          </p>
        </article>
        <br />

        <article className="inline-flex mb-2">
          <h1>Challenge</h1>&nbsp;
          <p className="cursor-cell" contentEditable>
            {props.challenge}
          </p>
        </article>
        <br />
        <article className="inline-flex mb-2">
          <h1>Proficenicy Bonus</h1>&nbsp;
          <p className="cursor-cell" contentEditable>
            {proficiencyBonus()}
          </p>
        </article>
        <br />

        {props.damage_vulnerabilities ? (
          <>
            <article className="inline-flex mb-2">
              <h1>Damage Immunities</h1>&nbsp;
              <p className="cursor-cell" contentEditable>
                {props.damage_vulnerabilities}
              </p>
            </article>
            <br />
          </>
        ) : null}
        {props.damage_resistances ? (
          <>
            <article className="inline-flex mb-2">
              <h1>Damage Resistances</h1>&nbsp;
              <p className="cursor-cell" contentEditable>
                {props.damage_resistances}
              </p>
            </article>
            <br />
          </>
        ) : null}
        {props.damage_immunities ? (
          <>
            <article className="inline-flex mb-2">
              <h1>Damage Immunities</h1>&nbsp;
              <p className="cursor-cell" contentEditable>
                {props.damage_immunities}
              </p>
            </article>
            <br />
          </>
        ) : null}
        {props.condition_immunities ? (
          <>
            <article className="inline-flex mb-2">
              <h1>Condition Immunities</h1>&nbsp;
              <p className="cursor-cell" contentEditable>
                {props.condition_immunities}
              </p>
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
                  <p className="cursor-cell" contentEditable>
                    {action.desc}
                  </p>
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
          {props.reactions.map((reactions, index) => {
            return (
              <article className="inline-flex mb-2" key={index}>
                <h1>{reactions.name}</h1>&nbsp;
                <p className="cursor-cell" contentEditable>
                  {reactions.desc}
                </p>
                <br />
              </article>
            );
          })}
        </section>
      ) : null}

      {props.legendary_desc ? (
        <section className="mt-2 ml-2">
          {props.legendary_desc.map((legendary_desc, index) => {
            return (
              <article className="inline-flex mb-2" key={index}>
                <h1>{legendary_desc}</h1>
                <br />
              </article>
            );
          })}
        </section>
      ) : null}

      {props.legendary_desc ? (
        <section className="mt-2 ml-2">
          {props.legendary_desc.map((legendary_desc, index) => {
            return (
              <article className="inline-flex mb-2" key={index}>
                <h1>{legendary_desc}</h1>
                <br />
              </article>
            );
          })}
        </section>
      ) : null}

      {props.legendary_actions ? (
        <section className="mt-2 ml-2">
          {props.legendary_actions.map((legendary_actions, index) => {
            return (
              <article className="inline-flex mb-2" key={index}>
                <h1>{legendary_actions.name}</h1>&nbsp;
                <p className="cursor-cell" contentEditable>
                  {legendary_actions.desc}
                </p>
                <br />
              </article>
            );
          })}
        </section>
      ) : null}

      {props.special_abilities ? (
        <section className="mt-2 ml-2">
          {props.special_abilities.map((special_abilities, index) => {
            return (
              <article className="inline-flex mb-2" key={index}>
                <h1>{special_abilities.name}</h1>&nbsp;
                <p className="cursor-cell" contentEditable>
                  {special_abilities.desc}
                </p>
                <br />
              </article>
            );
          })}
        </section>
      ) : null}

      {props.special_abilities ? (
        <section className="mt-2 ml-2">
          {props.special_abilities.map((special_abilities, index) => {
            return (
              <article className="inline-flex mb-2" key={index}>
                <h1>{special_abilities.name}</h1>&nbsp;
                <p className="cursor-cell" contentEditable>
                  {special_abilities.desc}
                </p>
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
