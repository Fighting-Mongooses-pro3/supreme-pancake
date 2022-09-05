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
  const {
    specialAbilities,
    updateSpecialAbility,
    removeSpecialAbility,
    actions,
    updateAction,
    removeAction,
    reactions,
    updateReaction,
    removeReaction,
    legendaryActions,
    updateLegendaryAction,
    removeLegendaryAction,
  } = useBuilderContext();

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

      <Line />

      <BuilderEntityActionsBlock
        blockName="Special Abilities"
        buttonText="Add a special ability"
        actions={specialAbilities}
        updateAction={updateSpecialAbility}
        removeAction={removeSpecialAbility}
      />

      <Line />

      <BuilderEntityActionsBlock
        blockName="Actions"
        buttonText="Add an action"
        actions={actions}
        updateAction={updateAction}
        removeAction={removeAction}
      />

      <Line />

      <BuilderEntityActionsBlock
        blockName="Rections"
        buttonText="Add a reaction"
        actions={reactions}
        updateAction={updateReaction}
        removeAction={removeReaction}
      />

      <Line />

      <BuilderEntityActionsBlock
        blockName="Legendary Actions"
        buttonText="Add a legendary action"
        actions={legendaryActions}
        updateAction={updateLegendaryAction}
        removeAction={removeLegendaryAction}
      />

      <section className="ae-stat-border"></section>
    </div>
  );
};
