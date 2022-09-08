import React from "react";
import { GiMonsterGrasp, GiCrossedSwords } from "react-icons/gi";
import { BsJournalText } from "react-icons/bs";
import { FiLayout } from "react-icons/fi";

export const Tab = (props) => {
  const { label, longName, onClick, isActive, className, ind } = props;

  const icon = () => {
    if (label === "👹") {
      return <GiMonsterGrasp />;
    } else if (label === "📝") {
      return <BsJournalText />;
    } else if (label === "⚔") {
      return <GiCrossedSwords />;
    } else if (label === "⚔") {
      return <FiLayout />;
    }
  };

  const handleClick = () => {
    onClick(label);
  };
  return (
    <li key={ind} className="ml-5">
      <button
        className={`text-4xl rounded-t-lg p-2 text-center ${
          isActive ? "ae-bg-active" : "ae-bg-inactive"
        } border-amber-300`}
        onClick={handleClick}
      >
        {label + (isActive && longName ? " " + longName : "")}
      </button>
    </li>
  );
};
