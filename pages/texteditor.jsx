import React, { useEffect, useState } from "react";
import { Page } from "../components";
import { TextEditor } from "../components/buildtools";

const render = () => {
  return (
    <Page currentPage="Builder Test">
      <div className="w-screen h-screen ae-paper bg-center bg-no-repeat bg-cover flex justify-center">
        <div className="w-8/12">
          <TextEditor
            appendFunction={(story) => {
              let textSections = [];
              const storedValue = localStorage.getItem("texts");
              if (storedValue !== null) {
                textSections = JSON.parse(storedValue);
              }
              textSections.push(story);
              localStorage.setItem("texts", JSON.stringify(textSections));
            }}
          />
        </div>
      </div>
    </Page>
  );
};

export default render;
