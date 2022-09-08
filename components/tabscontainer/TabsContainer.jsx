import React, { useState } from "react";
import { Tab } from "./Tab";

export const TabsContainer = (props) => {
  const { children, defaultTab, className } = props;
  const [activeTab, setActiveTab] = useState(defaultTab || "");

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
  };

  return (
    <div className={`${className} w-8/12`}>
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
      <div className="border-2 p-5 border-amber-300  bg-repeat bg-red-800 bg-gunmetal">
        {children.map((child, i) =>
          child.props.label === activeTab ? (
            <div key={i}>{child.props.children}</div>
          ) : null
        )}
      </div>
    </div>
  );
};
