import React from "react";
import {
  BuilderContextProvider,
  useBuilderContext,
  BuilderStatblock,
} from "../";

export const EntityBuilder = (props) => {
  const { saveFunction, appendFunction, passedEntity } = props;

  return (
    <div>
      <BuilderContextProvider
        {...passedEntity}
        // name={passedEntity.name}
        // name="Monster"
        // size="Medium"
        // type="humanoid"
        // alignment="true neutral"
        // armor_class="10"
        // hit_points="22"
        // hit_dice="5d8"
        // speed={{ walk: 30 }}
        // strength="1"
        // strength_save="4"
        // dexterity="17"
        // constitution="13"
        // intelligence="11"
        // wisdom="13"
        // charisma="17"
        // senses="blindsight 120 ft., passive Perception 10"
        // lang="----"
        // challenge_rating="12"
        // skills={{ history: 12 }}
      >
        <EntityBuilderFrame
          appendFunction={appendFunction}
          saveFunction={saveFunction}
          entity={passedEntity}
        />
      </BuilderContextProvider>
    </div>
  );
};

const EntityBuilderFrame = (props) => {
  const { saveFunction, appendFunction, entity } = props;
  const { entityObject } = useBuilderContext();

  return (
    <>
      <BuilderStatblock />
      <button
        onClick={() => {
          appendFunction(entityObject());
        }}
      >
        {Math.random() * 1000 < 1 ? "Add to Your Hot Mess" : "Add to Adventure"}
      </button>
      <button
        onClick={() => {
          const entity = entityObject();
          appendFunction(entity);
          saveFunction(entity);
        }}
      >
        Save to Account
      </button>
    </>
  );
};
