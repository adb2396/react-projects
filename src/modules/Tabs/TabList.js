import React, { useState } from "react";

import "./styles.css";

export default function TabList({ list, onTabChange }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (id) => {
    setActiveTab(id);
    onTabChange(id);
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        {list.map((item, index) => (
          <div
            key={item.id}
            className={`tab-title ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{list[activeTab].content}</div>
    </div>
  );
}
