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
      </div>
      <div>
        <BuilderCheckbox
          checked={important}
          onChange={(importance) => setImportant(importance)}
        />
        <button
          className="bg-amber-600 color-white px-5 py-5 rounded-2xl outline-0 uppercase mx-10 cursor-pointer shadow-md hover:bg-amber-700"
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
            className="bg-amber-600 color-white px-5 py-5 rounded-2xl outline-0 uppercase mx-10 cursor-pointer shadow-md hover:bg-amber-700"
            onClick={() => {
              updateFunction({ uuid, header, body, important });
            }}
          >
            {"Update Appended Text"}
          </button>
        ) : null}
        <button
          className="bg-amber-600 color-white px-5 py-5 rounded-2xl outline-0 uppercase mx-10 cursor-pointer shadow-md hover:bg-amber-700"
          onClick={() => {
            appendFunction({ uuid, header, body, important });
            saveFunction({ uuid, header, body, important });
          }}
        >
          Save to Account
        </button>
      </div>
    </div>
  );
};
