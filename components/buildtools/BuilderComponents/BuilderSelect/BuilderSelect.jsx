import React, { useState } from "react";

export const BuilderSelect = (props) => {
  const {
    promptText,
    itemsList,
    displayFunction,
    addButtonText,
    onButtonClick,
    selectClasses,
    buttonClasses,
  } = props;

  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div>
      <select
        onChange={(e) => setSelectedItem(e.target.value)}
        className={selectClasses}
      >
        <option value="" selected>
          {promptText}
        </option>
        {console.log("itemslist", itemsList)}
        {itemsList.map((item) => (
          <option key={"select-" + item} value={item}>
            {displayFunction(item)}
          </option>
        ))}
      </select>
      <button
        className={buttonClasses}
        onClick={() => {
          if (selectedItem === "") return;
          onButtonClick(selectedItem);
          setSelectedItem("");
        }}
      >
        {addButtonText}
      </button>
    </div>
  );
};
