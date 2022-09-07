import React from "react";

export const Tab = (props) => {
  const { activeTab, label, onClick } = props;

  const handleClick = () => {
    onClick(label);
  };
  return <li onClick={handleClick}>{label}</li>;
};
