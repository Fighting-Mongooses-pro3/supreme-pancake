import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import {
  abilityModifierCalculation,
  challengeProficiencyBonus,
} from "../../utils/DnDMath";

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
  // strength_save: "",
  // dexterity_save: "",
  // constitution_save: "",
  // intelligence_save: "",
  // wisdom_save: "",
  // charisma_save: "",
  // challenge_rating: "",
  //
  // Not implemented in the builder stat block
  // perception: "",
  // senses: "" (split on ', ')
  // languages: "" (split on ', ')
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
  const [dexterity, setDexterity] = useState(existingEntity.dexterity || 0);
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
  const [challengeRating, setChallengeRating] = useState(
    existingEntity.challenge_rating || ""
  );

  const [strengthSave, setStrengthSave] = useState(
    existingEntity.strength_save || 0
  );
  const [dexteritySave, setDexteritySave] = useState(
    existingEntity.dexterity_save || 0
  );
  const [constitutionSave, setConstitutionSave] = useState(
    existingEntity.constitution_save || 0
  );
  const [intelligenceSave, setIntelligenceSave] = useState(
    existingEntity.intelligence_save || 0
  );
  const [wisdomSave, setWisdomSave] = useState(existingEntity.wisdom_save || 0);
  const [charismaSave, setCharismaSave] = useState(
    existingEntity.charisma_save || 0
  );

  const [strengthProficiency, setStrengthProficiency] = useState(
    existingEntity.strength_save ? true : false
  );
  const [dexterityProficiency, setDexterityProficiency] = useState(
    existingEntity.dexterity_save ? true : false
  );
  const [constitutionProficiency, setConstitutionProficiency] = useState(
    existingEntity.constitution_save ? true : false
  );
  const [intelligenceProficiency, setIntelligenceProficiency] = useState(
    existingEntity.intelligence_save ? true : false
  );
  const [wisdomProficiency, setWisdomProficiency] = useState(
    existingEntity.wisdom_save ? true : false
  );
  const [charismaProficiency, setCharismaProficiency] = useState(
    existingEntity.charisma_save ? true : false
  );

  const [skills, setSkills] = useState({ ...existingEntity.skills } || {});

  // GROUP ABILITY SCORES, SAVES, AND PROFICIENCIES TO STREAMLINE CODE
  // Update the strengthSave
  useEffect(() => {
    setStrengthSave(
      strengthProficiency
        ? challengeRating && strength
          ? challengeProficiencyBonus(challengeRating) +
            abilityModifierCalculation(strength)
          : null
        : null
    );
  }, [challengeRating, strength, strengthProficiency]);

  useEffect(() => {
    setDexteritySave(
      dexterityProficiency
        ? challengeRating && dexterity
          ? challengeProficiencyBonus(challengeRating) +
            abilityModifierCalculation(dexterity)
          : null
        : null
    );
  }, [challengeRating, dexterity, dexterityProficiency]);

  useEffect(() => {
    setConstitutionSave(
      constitutionProficiency
        ? challengeRating && constitution
          ? challengeProficiencyBonus(challengeRating) +
            abilityModifierCalculation(constitution)
          : null
        : null
    );
  }, [challengeRating, constitution, constitutionProficiency]);

  useEffect(() => {
    setIntelligenceSave(
      intelligenceProficiency
        ? challengeRating && intelligence
          ? challengeProficiencyBonus(challengeRating) +
            abilityModifierCalculation(intelligence)
          : null
        : null
    );
  }, [challengeRating, intelligence, intelligenceProficiency]);

  useEffect(() => {
    setWisdomSave(
      wisdomProficiency
        ? challengeRating && wisdom
          ? challengeProficiencyBonus(challengeRating) +
            abilityModifierCalculation(wisdom)
          : null
        : null
    );
  }, [challengeRating, wisdom, wisdomProficiency]);

  useEffect(() => {
    setCharismaSave(
      charismaProficiency
        ? challengeRating && charisma
          ? challengeProficiencyBonus(challengeRating) +
            abilityModifierCalculation(charisma)
          : null
        : null
    );
  }, [challengeRating, charisma, charismaProficiency]);

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

        strengthProficiency,

        updateProficiency: (stat, proficiency) => {
          switch (stat) {
            case "strength":
              setStrengthProficiency(proficiency);
              break;
            case "dexterity":
              setDexterityProficiency(proficiency);
              break;
            case "constitution":
              setConstitutionProficiency(proficiency);
              break;
            case "intelligence":
              setIntelligenceProficiency(proficiency);
              break;
            case "wisdom":
              setWisdomProficiency(proficiency);
              break;
            case "charisma":
              setCharismaProficiency(proficiency);
              break;
          }
        },

        skills,
        setSkill: (updatedSkill) => {
          setSkill((curSkills) => ({ ...curSkills, ...updatedSkill }));
        },
        removeSkill: (skillName) => {
          setSkills((curSkills) => delete curSkills[skillName]);
        },

        clearContext: () => {},
        loadEntity: () => {},
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};
