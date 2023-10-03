import React from "react";
import { Dropdown } from "react-css-dropdown";

import "react-css-dropdown/dist/index.css";

export const DropDown = () => {
  const props = {
    options: [
      { name: "Oranges", value: "oranges" },
      { name: "Apples", value: "apples" },
      { name: "Pears", value: "pears" },
      { name: "Grapes", value: "grapes", disabled: true }
    ],
    handleSelect: event => alert(`You chose ${event.target.value}`)
  };
  return (
    <>
      <h3>HTML select with CSS</h3>
      <Dropdown {...props} />
    </>
  );
};