import React from "react";
import { Page, Statblock, EntityBuilder } from "../components";

const Builder = () => {
  return (
    <Page currentPage="Builder Test">
      <div className="w-screen h-screen ae-paper bg-center bg-no-repeat bg-cover p-56">
        <EntityBuilder />
        <Statblock
          name="Monster"
          sizes="Medium humanoid, any alignment"
          ac="10"
          hp="22, (5d8)"
          speed="30 ft."
          strength="1"
          dex="17 (+0)"
          con="13 (+0)"
          int="11 (+0)"
          wis="13 (+0)"
          cha="17 (+0)"
          senses="passive Perception 10"
          lang="----"
          challenge="1/4"
        />
      </div>
    </Page>
  );
};

export default Builder;
