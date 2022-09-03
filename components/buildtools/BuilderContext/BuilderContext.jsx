import React, { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const BuilderContext = createContext({
  // name: "",
  // size: "",
  // type: "",
  // alignment: "",
  // armor_class: "",
  // armor_description: "",
  // hit_points: "",
  // hit_dice: "",
  // speed: {},
  // strength: "",
  // dexterity: "",
  // constitution: "",
  // intelligence: "",
  // wisdom: "",
  // charisma: "",
  //
  // Not implemented in the builder stat block
  // strength_save: "",
  // dexterity_save: "",
  // constitution_save: "",
  // intelligence_save: "",
  // wisdom_save: "",
  // charisma_save: "",
  // perception: "",
  // senses: "" (split on ', ')
  // languages: "" (split on ', ')
  // challenge_rating: "",
  // skills: {}
  // damage_vulnerabilities: "" (split on ', ')
  // damage_resistances: "" (split on ', ')
  // damage_immunities: "" (split on ', ')
  // condition_immunities: "" (split on ', ')
  // actions: [{}]
  // reactions: [{}]
  // legendary_desc: ""
  // legendary_actions: [{}]
  // special_abilities: [{}]
  // spell_list: []
});

export const useBuilderContext = () => useContext(BuilderContext);

export const BuilderContextProvider = ({ children, ...existingEntity }) => {
  const [name, setName] = useState(existingEntity.name || "");
  const [size, setSize] = useState(existingEntity.size || "");
  const [type, setType] = useState(existingEntity.type || "");
  const [alignment, setAlignment] = useState(existingEntity.alignment || "");
  const [armorClass, setArmorClass] = useState(existingEntity.armor_class || 0);
  const [armorDescription, setArmorDescription] = useState(
    existingEntity.armor_description || ""
  );
  const [hitPoints, setHitPoints] = useState(existingEntity.hit_points || 0);
  const [hitDice, setHitDice] = useState(existingEntity.hit_dice || "");
  const [speed, setSpeed] = useState(
    existingEntity.speed || { walk: 0, swim: 0, fly: 0 }
  );
  const [strength, setStrength] = useState(existingEntity.strength || 0);
  const [strengthSave, setStrengthSave] = useState(
    existingEntity.strength_save || 0
  );
  const [dexterity, setDexterity] = useState(existingEntity.dexterity || 0);
  const [dexteritySave, setDexteritySave] = useState(
    existingEntity.dexterity_save || 0
  );
  const [constitution, setConstitution] = useState(
    existingEntity.constitution || 0
  );
  const [constitutionSave, setConstitutionSave] = useState(
    existingEntity.constitution_save || 0
  );
  const [intelligence, setIntelligence] = useState(
    existingEntity.intelligence || 0
  );
  const [intelligenceSave, setIntelligenceSave] = useState(
    existingEntity.intelligence_save || 0
  );
  const [wisdom, setWisdom] = useState(existingEntity.wisdom || 0);
  const [wisdomSave, setWisdomSave] = useState(existingEntity.wisdom_save || 0);
  const [charisma, setCharisma] = useState(existingEntity.charisma || 0);
  const [charismaSave, setCharismaSave] = useState(
    existingEntity.charisma_save || 0
  );
  const [senses, setSenses] = useState(existingEntity.senses || []);
  const [languages, setLanguages] = useState(existingEntity.languages || []);
  const [challengeRating, setChallengeRating] = useState(
    existingEntity.challenge_rating || ""
  );

  return (
    <BuilderContext.Provider
      value={{
        name,
        updateName: (value) => {
          setName(value);
        },
        size,
        updateSize: (value) => {
          setSize(value);
        },
        type,
        updateType: (value) => {
          setType(value);
        },
        alignment,
        updateAlignment: (value) => {
          setAlignment(value);
        },
        armorClass,
        updateArmorClass: (value) => {
          setArmorClass(value);
        },
        armorDescription,
        updateArmorDescription: (value) => {
          setArmorDescription(value);
        },
        hitPoints,
        updateHitPoints: (value) => {
          setHitPoints(value);
        },
        hitDice,
        updateHitDice: (value) => {
          setHitDice(value);
        },
        speed,
        updateSpeedComponent: (updatedField) => {
          setSpeed((speed) => ({ ...speed, ...updatedField }));
        },
        strength,
        updateStrength: (value) => {
          setStrength(value);
        },
        strengthSave,
        updateStrengthSave: (value) => {
          setStrengthSave(value);
        },
        dexterity,
        updateDexterity: (value) => {
          setDexterity(value);
        },
        dexteritySave,
        updateDexteritySave: (value) => {
          setDexteritySave(value);
        },
        constitution,
        updateConstitution: (value) => {
          setConstitution(value);
        },
        constitutionSave,
        updateConstitutionSave: (value) => {
          setConstitutionSave(value);
        },
        intelligence,
        updateIntelligence: (value) => {
          setIntelligence(value);
        },
        intelligenceSave,
        updateIntelligenceSave: (value) => {
          setIntelligenceSave(value);
        },
        wisdom,
        updateWisdom: (value) => {
          setWisdom(value);
        },
        wisdomSave,
        updateWisdomSave: (value) => {
          setWisdomSave(value);
        },
        charisma,
        updateCharisma: (value) => {
          setCharisma(value);
        },
        charismaSave,
        updateCharismaSave: (value) => {
          setCharismaSave(value);
        },
        senses,
        updateSenses: (value) => {
          setSenses(value);
        },
        languages,
        updateLanguages: (value) => {
          setLanguages(value);
        },
        challengeRating,
        updateChallengeRating: (value) => {
          setChallengeRating(value);
        },

        clearContext: () => {},
        loadEntity: () => {},
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};
