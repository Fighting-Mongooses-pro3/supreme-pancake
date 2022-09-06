import React, { useState, useEffect } from "react";
import {
  BuilderContextProvider,
  useBuilderContext,
  BuilderStatblock,
} from "../";

export const EntityBuilder = (props) => {
  const { defaultListText, entityList, saveFunction, appendFunction } = props;

  const [selectedEntity, setSelectedEntity] = useState({});
  const [entityChanged, setEntityChanged] = useState(false);

  // This is a nasty hack
  // The page rerenders once without the context, then with it
  // so the default state is reset to the passed in props
  useEffect(() => {
    setEntityChanged(true);
  }, [selectedEntity]);

  useEffect(() => {
    if (entityChanged) setEntityChanged(false);
  }, [entityChanged]);

  return (
    <div>
      <select onChange={(e) => setSelectedEntity(entityList[e.target.value])}>
        <option value="" selected>
          {defaultListText}
        </option>
        {entityList.map((entity, index) => (
          <option key={"entity-" + index} value={index}>
            {entity.name}
          </option>
        ))}
      </select>
      {entityChanged ? null : (
        <BuilderContextProvider {...selectedEntity}>
          <EntityBuilderFrame
            appendFunction={appendFunction}
            saveFunction={saveFunction}
          />
        </BuilderContextProvider>
      )}
    </div>
  );
};

const EntityBuilderFrame = (props) => {
  const { saveFunction, appendFunction } = props;
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
