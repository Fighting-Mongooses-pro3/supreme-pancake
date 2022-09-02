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
        armorClass,
        setArmorClass,
        armorDescription,
        setArmorDescription,
        hitPoints,
        setHitPoints,
        hitDice,
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

        clearContext: () => {},
        loadEntity: () => {},
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};
