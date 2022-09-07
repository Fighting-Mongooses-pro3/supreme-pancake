import React from "react";
import { Page } from "../components";
import { MonsterBuilder } from "../components/buildtools";

const builder = () => {
  return (
    <Page currentPage="Builder Test">
      <div className="w-screen h-screen ae-paper bg-center bg-no-repeat bg-cover p-56">
        <MonsterBuilder monsterUrl="https://api.open5e.com/monsters/?document__slug=wotc-srd&format=json" />
      </div>
    </Page>
  );
};

export default builder;
