import React from "react";
import TabList from "./TabList";

import "./styles.css";

const list = [
  {
    title: "Tab 1",
    content: <div>This is tab 1</div>,
  },
  {
    title: "Tab 2",
    content: <div>This is tab 2</div>,
  },
  {
    title: "Tab 3",
    content: <div>This is tab 3</div>,
  },
  {
    title: "Tab 4",
    content: <div>This is tab 4</div>,
  },
];

export default function Tabs() {
  return (
    <div className="tab-viewer">
      <TabList list={list} onTabChange={() => {}} />
    </div>
  );
}
