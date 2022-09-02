import React, { createContext } from "react";
import { useContext } from "react";

const BuilderContext = createContext({
  name: "",
  size: "",
  type: "",
  alignment: "",
  armor_class: "",
  armor_description: "",
  hit_points: "",
  hit_dice: "",
  speed: {},
  strength: "",
  dexterity: "",
  constitution: "",
  intelligence: "",
  wisdom: "",
  charisma: "",
  senses: [],
  languages: [],
  challenge: "",
});

export const useBuilderContext = () => useContext(BuilderContext);

export const BuilderContextProvider = ({ children }) => {
  return (
    <BuilderContext.Provider
      value={{
        setName: (value) => {
          name = value;
        },
        setSize: (value) => {
          size = value;
        },
        setType: (value) => {
          type = value;
        },
        setAlignment: (value) => {
          alignment = value;
        },
        setArmor_class: (value) => {
          armor_class = value;
        },
        setArmor_description: (value) => {
          armor_description = value;
        },
        setHit_points: (value) => {
          hit_points = value;
        },
        setHit_dice: (value) => {
          hit_dice = value;
        },
        setSpeed: (value) => {
          speed = value;
        },

        setStrength: (value) => {
          strength = value;
        },
        setDexterity: (value) => {
          dexterity = value;
        },
        setConstitution: (value) => {
          constitution = value;
        },
        setIntelligence: (value) => {
          intelligence = value;
        },
        setWisdom: (value) => {
          wisdom = value;
        },
        setCharisma: (value) => {
          charisma = value;
        },

        setSenses: (value) => {
          senses = value;
        },
        setLanguages: (value) => {
          languages = value;
        },

        setChallenge: (value) => {
          challenge = value;
        },

        clearContext: () => {},
        loadEntity: () => {},
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};
