import React, { useState } from "react";
import { Tab } from "./Tab";

export const TabsContainer = (props) => {
  const { children, defaultTab, className } = props;
  const [activeTab, setActiveTab] = useState(defaultTab || "");

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
  };

  return (
    <div className={`${className} w-full`}>
      <section className="w-full">
        <ol className="inline-flex w-full">
          {children.map((child, index) => {
            const { label, longName } = child.props;
            return (
              <Tab
                isActive={activeTab === label}
                key={index}
                ind={index}
                label={label}
                longName={longName}
                onClick={handleTabClick}
              />
            );
          })}
        </ol>
      </section>
      <div className="border-2 border-amber-300 p-5">
        {children.map((child, i) =>
          child.props.label === activeTab ? (
            <div key={i}>{child.props.children}</div>
          ) : null
        )}
      </div>
    </div>
  );
};
