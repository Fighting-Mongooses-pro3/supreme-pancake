import React, { useState } from "react";
import { BuilderInput } from "../BuilderComponents/BuilderInput/BuilderInput";
import { BuilderTextArea } from "../BuilderComponents/BuilderTextArea/BuilderTextArea";
import { v4 as uuidv4 } from "uuid";
import { BuilderCheckbox } from "../BuilderComponents/BuilderCheckbox/BuilderCheckbox";

export const TextEditor = (props) => {
  const { appendFunction, updateFunction, saveFunction } = props;

  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const [important, setImportant] = useState(false);
  const [uuid, setUuid] = useState("");

  return (
    <div className="bg-no-repeat bg-cover bg-paper font-semibold text-2xl">
      <div >
        <BuilderInput
          label="Title (optional)"
          containerClasses="flex flex-col "
          // labelClasses="bg-white/20"
          inputClasses="bg-white/50"
          onChange={(value) => setHeader(value)}
        />
        <BuilderTextArea
          label="Text Block"
          // containerClasses="flex flex-col bg-paper"
          inputClasses="w-full bg-white/50"
          onChange={(value) => setBody(value)}
        />
      </div>
      <div className="bg-no-repeat bg-cover bg-paper">
        <BuilderCheckbox
          checked={important}
          onChange={(importance) => setImportant(importance)}
        />
        <button
          onClick={() => {
            const newUuid = uuidv4();
            appendFunction({ id: newUuid, header, body, important });
            setUuid(newUuid);
          }}
        >
          {Math.random() * 1000 < 1
            ? "Add Text to Your Hot Mess"
            : "Add Text to Adventure"}
        </button>
        {uuid !== "" ? (
          <button
            onClick={() => {
              updateFunction({ id: uuid, header, body, important });
            }}
          >
            {"Update Appended Text"}
          </button>
        ) : null}
        <button
          onClick={() => {
            appendFunction({ id: uuid, header, body, important });
            saveFunction({ id: uuid, header, body, important });
          }}
        >
          Save to Account
        </button>
      </div>
    </div>
  );
};
