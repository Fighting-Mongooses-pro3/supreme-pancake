import React, { useState } from "react";
import { Tab } from "./Tab";

export const TabsContainer = (props) => {
  const { children, className } = props;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={`${className} w-full `}>
      <section className="w-full">
        <ol className="inline-flex w-full">
          {children.map((child, index) => {
            const { label, longName } = child.props;
            return (
              <Tab
                isActive={activeTab === index}
                key={index}
                index={index}
                label={label}
                longName={longName}
                onClick={() => handleTabClick(index)}
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
