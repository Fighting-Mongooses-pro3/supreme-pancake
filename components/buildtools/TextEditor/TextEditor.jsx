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
    <div>
      <div>
        <BuilderInput
          label="Optional Header Text"
          containerClasses="flex flex-col"
          onChange={(value) => setHeader(value)}
        />
        <BuilderTextArea
          label="Body Text"
          inputClasses="w-full"
          onChange={(value) => setBody(value)}
        />
      </div>
      <div>
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
