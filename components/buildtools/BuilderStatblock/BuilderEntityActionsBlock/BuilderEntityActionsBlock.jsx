import React from "react";
import { BuilderInput } from "../../BuilderComponents/BuilderInput/BuilderInput";

export const BuilderEntityActionsBlock = (props) => {
  const {
    blockName,
    blockClasses,
    buttonText,
    buttonClasses,
    actions,
    updateAction,
    removeAction,
  } = props;

  const updateActionName = (name, index) => {
    const updatedAction = { name, desc: actions[index].desc };
    updateAction(updatedAction, index);
  };

  const updateActionDescription = (desc, index) => {
    const updatedAction = { name: actions[index].name, desc };
    updateAction(updatedAction, index);
  };

  return (
    <div>
      <div className={blockClasses}>{blockName}</div>
      <button
        className={buttonClasses}
        onClick={() => updateAction({ name: "", desc: "" }, actions.length)}
      >
        {buttonText}
      </button>
      {actions.map((action, index) => (
        <div key={"action-" + index} className="flex flex-row gap-x-2">
          {/* Name */}
          <BuilderInput
            value={action.name}
            placeholder="Action Name..."
            onChange={(value) => updateActionName(value, index)}
          />
          {/* Description */}
          <BuilderInput
            value={action.desc}
            placeholder="Action Description..."
            onChange={(value) => updateActionDescription(value, index)}
          />
          <button onClick={() => removeAction(index)}>x</button>
        </div>
      ))}
    </div>
  );
};
