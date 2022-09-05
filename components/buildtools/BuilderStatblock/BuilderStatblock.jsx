import React from "react";
import { Line } from "../../";
import {
  BuilderEntityAbilities,
  BuilderEntityAbilityScoreRow,
  BuilderEntityAttributes,
  BuilderEntityHeader,
} from "../";

import { useBuilderContext } from "../BuilderContext/BuilderContext";
import { BuilderEntityActionsBlock } from "./BuilderEntityActionsBlock/BuilderEntityActionsBlock";

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
    spell_list: [action]
}

type action = {
  name: string
  desc: string
}
*/

export const BuilderStatblock = (props) => {
  const { customCss } = props;
  const { actions, updateAction, removeAction } = useBuilderContext();

  return (
    <div className="inline-block ae-stat-block self-center">
      <section className="ae-stat-border"></section>

      <BuilderEntityHeader customCss={customCss} />

      <Line />

      <BuilderEntityAttributes />

      <Line />

      <BuilderEntityAbilityScoreRow />

      <Line />

      <BuilderEntityAbilities />

      <BuilderEntityActionsBlock
        blockName="Actions"
        buttonText="Add an action"
        actions={actions}
        updateAction={updateAction}
        removeAction={removeAction}
      />

      {/* <BuilderEntityActionsBlock blockName="Actions" /> */}

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

      <section className="ae-stat-border"></section>
    </div>
  );
};
