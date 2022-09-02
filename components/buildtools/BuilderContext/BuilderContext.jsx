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
  // senses: [],
  // languages: [],
  // challenge: "",
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
  const [dexterity, setSexterity] = useState(existingEntity.dexterity || 0);
  const [constitution, setConstitution] = useState(
    existingEntity.constitution || 0
  );
  const [intelligence, setIntelligence] = useState(
    existingEntity.intelligence || 0
  );
  const [wisdom, setWisdom] = useState(existingEntity.wisdom || 0);
  const [charisma, setCharisma] = useState(existingEntity.charisma || 0);
  const [senses, setSenses] = useState(existingEntity.senses || []);
  const [languages, setLanguages] = useState(existingEntity.languages || []);
  const [challenge, setChallenge] = useState(existingEntity.challenge || "");

  return (
    <BuilderContext.Provider
      value={{
        name,
        setName,
        size,
        setSize,
        type,
        setType,
        alignment,
        setAlignment,
        armor_class: armorClass,
        setArmorClass,
        armor_description: armorDescription,
        setArmorDescription,
        hit_points: hitPoints,
        setHitPoints,
        hit_dice: hitDice,
        setHitDice,
        speed,
        setSpeedComponent: (updatedField) => {
          setSpeed((speed) => ({ ...speed, ...updatedField }));
        },
        strength,
        setStrength,
        dexterity,
        setSexterity,
        constitution,
        setConstitution,
        intelligence,
        setIntelligence,
        wisdom,
        setWisdom,
        charisma,
        setCharisma,
        senses,
        setSenses,
        languages,
        setLanguages,
        challenge,
        setChallenge,
        // setName: (value) => {
        //   console.log("Name:", name);
        //   console.log("Value:", value);
        //   name = value;
        // },
        // setSize: (value) => {
        //   size = value;
        // },
        // setType: (value) => {
        //   type = value;
        // },
        // setAlignment: (value) => {
        //   alignment = value;
        // },
        // setArmor_class: (value) => {
        //   armor_class = value;
        // },
        // setArmor_description: (value) => {
        //   armor_description = value;
        // },
        // setHit_points: (value) => {
        //   hit_points = value;
        // },
        // setHit_dice: (value) => {
        //   hit_dice = value;
        // },
        // setSpeed: (value) => {
        //   speed = value;
        // },

        // setStrength: (value) => {
        //   strength = value;
        // },
        // setDexterity: (value) => {
        //   dexterity = value;
        // },
        // setConstitution: (value) => {
        //   constitution = value;
        // },
        // setIntelligence: (value) => {
        //   intelligence = value;
        // },
        // setWisdom: (value) => {
        //   wisdom = value;
        // },
        // setCharisma: (value) => {
        //   charisma = value;
        // },

        // setSenses: (value) => {
        //   senses = value;
        // },
        // setLanguages: (value) => {
        //   languages = value;
        // },

        // setChallenge: (value) => {
        //   challenge = value;
        // },

        clearContext: () => {},
        loadEntity: () => {},
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};
