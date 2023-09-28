import React, { useState } from "react";
import "./style.scss";

const SwitchTabs = ({ tabs, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const activeTab = index => {
    setSelectedTab(index);
    onTabChange(index);
  };

  return (
    <div className="switchingTab">
      <div className="tabItems">
        {tabs.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(index)}
          >
            {tab}
          </span>
        ))}
        <span></span>
      </div>
    </div>
  );
};

export default SwitchTabs;
