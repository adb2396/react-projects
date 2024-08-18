import React, { useState } from 'react';
import data from './data.json';
import './style.css';

const DisplayBox = ({ show, children }) => show && children;

function Accordion() {
  const [selected, setSelected] = useState([]);
  const [multiSelect, setMultiSelect] = useState(false);

  const handleTitleClick = (id) => {
    if (!multiSelect) {
      setSelected(id === selected[0] ? [] : [id]);
      return;
    }

    const cpySelected = [...selected];
    const presentIdIndex = selected.findIndex((val) => val === id);
    if (presentIdIndex === -1) {
      cpySelected.push(id);
    } else {
      cpySelected.splice(presentIdIndex, 1);
    }

    setSelected(cpySelected);
  };

  const handleMultiSelectClick = () => {
    setMultiSelect(!multiSelect);
    setSelected([]);
  };

  const renderAccordion = (item) => {
    const isActive = selected.includes(item.id);

    return (
      <div
        id={item.id}
        className="accordion"
        onClick={() => handleTitleClick(item.id)}
      >
        <div className="title">
          <span>{item.title}</span>
          <span>{isActive ? '-' : '+'}</span>
        </div>
        <DisplayBox show={isActive}>
          <div className="content">{item.content}</div>
        </DisplayBox>
      </div>
    );
  };

  // return statement
  return (
    <div className="wrapper">
      <div className="app-wrapper">
        <button type="button" onClick={handleMultiSelectClick}>
          {!multiSelect ? 'Enable Multi Select' : 'Disable Multi Select'}
        </button>
        {data.map((item) => renderAccordion(item))}
      </div>
    </div>
  );
}

export default Accordion;
