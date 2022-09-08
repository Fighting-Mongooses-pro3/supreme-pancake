import React from "react";

export const Tab = (props) => {
  const { label, longName, onClick, isActive, className, ind } = props;

  const handleClick = () => {
    onClick(label);
  };
  return (
    <li key={ind}>
      <button
        className={`text-4xl border-x-2 border-t-2 rounded ${
          isActive ? "bg-amber-200" : "bg-white"
        } border-amber-300`}
        onClick={handleClick}
      >
        {label + (isActive && longName ? " " + longName : "")}
      </button>
    </li>
  );
};
