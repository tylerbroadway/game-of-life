import React from "react";
import { StyledRules } from "../styled/styled";

const Rules = () => {
  const list = [
    "Any live cell with fewer than two live neighbours dies, as if by underpopulation.",
    "Any live cell with two or three live neighbours lives on to the next generation.",
    "Any live cell with more than three live neighbours dies, as if by overpopulation.",
    "Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.",
  ];

  return (
    <StyledRules>
      <h2>Conway's Game of Life:</h2>
      <ol>
        {list.map((rule) => (
          <li>{rule}</li>
        ))}
      </ol>
      <h3>Click a few cells, press start, watch the magic happen!</h3>
    </StyledRules>
  );
};

export default Rules;
