import React, { useState } from "react";
import { Tab } from "./Tab";

export const TabsContainer = (props) => {
  const { children, defaultTab } = props;
  const [activeTab, setActiveTab] = useState(defaultTab || "");

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
  };

  return (
    <div>
      <ol>
        {children.map((child, index) => {
          const { label } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={handleTabClick}
            />
          );
        })}
      </ol>
      <div>
        {children.map((child) =>
          child.props.label === activeTab ? child.props.children : null
        )}
      </div>
    </div>
  );
};
