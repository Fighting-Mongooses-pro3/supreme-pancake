import React, { useState, useEffect } from "react";
import {
  BuilderContextProvider,
  useBuilderContext,
  BuilderStatblock,
} from "../";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@auth0/nextjs-auth0";

export const EntityBuilder = (props) => {
  const {
    defaultListText,
    entityLists,
    saveFunction,
    updateFunction,
    appendFunction,
  } = props;

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
      <div className="flex justify-center">
        <div className="w-10/12 text-center">
          <div className="flex justify-between">
            {entityLists.map((entityList, index) => (
              <div key={index}>
                <span className="text-slate-300 font-semibold">
                  Select from:
                </span>
                <select
                  onChange={(e) =>
                    setSelectedEntity(entityList.monsters[e.target.value])
                  }
                >
                  <option value="">{entityList.defaultString}</option>
                  {entityList.monsters.map((entity, index) => (
                    <option key={`${entity.name}-${index}`} value={index}>
                      {entity.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>
      {entityChanged ? null : (
        <BuilderContextProvider {...selectedEntity}>
          <EntityBuilderFrame
            appendFunction={appendFunction}
            saveFunction={saveFunction}
            updateFunction={updateFunction}
          />
        </BuilderContextProvider>
      )}
    </div>
  );
};

const EntityBuilderFrame = (props) => {
  const { appendFunction, updateFunction, saveFunction } = props;
  const { entityObject, uuid, updateUuid } = useBuilderContext();
  const { user } = useUser();

  return (
    <>
      <BuilderStatblock />
      <div className="flex justify-center">
        <div className="flex gap-x-6 mt-1">
          <button
            className="bg-paper font-semibold rounded px-2 py-1"
            onClick={() => {
              const newUuid = uuidv4();
              appendFunction({ uuid: newUuid, ...entityObject() });
              updateUuid(newUuid);
            }}
          >
            {Math.random() * 1000 < 1
              ? "Add to Your Hot Mess"
              : "Add to Adventure"}
          </button>
          {uuid !== "" ? (
            <button
              className="bg-paper font-semibold rounded px-2 py-1"
              onClick={() => {
                updateFunction({ uuid: uuid, ...entityObject() });
              }}
            >
              {"Update Adventure Text"}
            </button>
          ) : null}
          {user?.email ? (
            <button
              className="bg-paper font-semibold rounded px-2 py-1"
              onClick={() => {
                const id = uuid !== "" ? uuid : uuidv4();
                const entity = {
                  owner: user.email,
                  uuid: id,
                  ...entityObject(),
                };
                appendFunction(entity);
                saveFunction(entity);
                updateUuid(id);
              }}
            >
              Save to Account
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
