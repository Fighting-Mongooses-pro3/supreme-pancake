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
      <section className="ae-stat-border"></section>
      <div className="bg-no-repeat bg-cover bg-paper font-semibold text-2xl px-4 py-2">
        <div>
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
          <BuilderCheckbox
            label="Noteworthy?"
            checked={important}
            onChange={(importance) => setImportant(importance)}
            containerClasses="flex gap-x-3 items-center"
          />
        </div>
      </div>
      <section className="ae-stat-border"></section>
      <div className="mt-4">
        <div className="flex justify-around">
          <button
            className="bg-paper font-semibold rounded px-2 py-1"
            onClick={() => {
              const newUuid = uuidv4();
              appendFunction({ newUuid, header, body, important });
              setUuid(newUuid);
            }}
          >
            {Math.random() * 1000 < 1
              ? "Add Text to Your Hot Mess"
              : "Add Text to Adventure"}
          </button>
          {uuid !== "" ? (
            <button
              className="bg-paper font-semibold rounded px-2 py-1"
              onClick={() => {
                updateFunction({ uuid, header, body, important });
              }}
            >
              {"Update Appended Text"}
            </button>
          ) : null}
          <button
            className="bg-paper font-semibold rounded px-2 py-1"
            onClick={() => {
              appendFunction({ uuid, header, body, important });
              saveFunction({ uuid, header, body, important });
            }}
          >
            Save to Account
          </button>
        </div>
      </div>
    </div>
  );
};
