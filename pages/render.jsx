import React, { useEffect, useState } from "react";
import { Layoutblock } from "../components";

const render = () => {
  return (
    <div className="w-screen ae-paper bg-center bg-no-repeat bg-cover flex justify-center z-0 pr-4">
      <div className="w-11/12 z-10">
        <Layoutblock />
      </div>
    </div>
  );
};

export default render;
