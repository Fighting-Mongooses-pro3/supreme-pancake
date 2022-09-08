import React from "react";
import { GiMonsterGrasp, GiCrossedSwords } from "react-icons/gi";
import { BsJournalText } from "react-icons/bs";
import { FiLayout } from "react-icons/fi";

export const Tab = (props) => {
  const { label, longName, onClick, isActive, className, ind: index } = props;

  const icon = () => {
    if (label === "👹") {
      return <GiMonsterGrasp className="inline" />;
    } else if (label === "📝") {
      return <BsJournalText className="inline" />;
    } else if (label === "⚔") {
      return <GiCrossedSwords className="inline" />;
    } else if (label === "🖼") {
      return <FiLayout className="inline" />;
    }
  };

  return (
    <li key={index} className="ml-5">
      <button
        className={`text-4xl rounded-xl p-2 text-center ${
          isActive ? "ae-bg-active" : "ae-bg-inactive"
        } border-amber-300`}
        onClick={onClick}
      >
        {
          <div className="flex items-center gap-x-2">
            {icon()}
            <span>{isActive && longName ? " " + longName : ""}</span>
          </div>
        }
      </button>
    </li>
  );
};
