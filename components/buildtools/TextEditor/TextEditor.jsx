import React, { useState } from "react";
import { BuilderInput } from "../BuilderComponents/BuilderInput/BuilderInput";
import { BuilderTextArea } from "../BuilderComponents/BuilderTextArea/BuilderTextArea";

export const TextEditor = (props) => {
  const { appendFunction, saveFunction } = props;

  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");

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
        <button
          onClick={() => {
            appendFunction({ header, body });
          }}
        >
          {Math.random() * 1000 < 1
            ? "Add to Your Hot Mess"
            : "Add to Adventure"}
        </button>
        <button
          onClick={() => {
            appendFunction({ header, body });
            saveFunction({ header, body });
          }}
        >
          Save to Account
        </button>
      </div>
    </div>
  );
};
