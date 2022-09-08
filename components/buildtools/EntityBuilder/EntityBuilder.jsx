import React, { useState, useEffect } from "react";
import {
  BuilderContextProvider,
  useBuilderContext,
  BuilderStatblock,
} from "../";
import { v4 as uuidv4 } from "uuid";

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
        <option value="">
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
  const { appendFunction, updateFunction, saveFunction } = props;
  const { entityObject } = useBuilderContext();
  const [uuid, setUuid] = useState("");

  return (
    <>
      <BuilderStatblock />
      <button
        onClick={() => {
          const newUuid = uuidv4();
          appendFunction({ id: newUuid, ...entityObject() });
          setUuid(newUuid);
        }}
      >
        {Math.random() * 1000 < 1 ? "Add to Your Hot Mess" : "Add to Adventure"}
      </button>
      {uuid !== "" ? (
        <button
          onClick={() => {
            updateFunction({ id: uuid, ...entityObject() });
          }}
        >
          {"Update Appended Text"}
        </button>
      ) : null}
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
