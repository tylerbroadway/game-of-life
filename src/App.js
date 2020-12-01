import React from "react";
import Grid from "./components/Grid";
import Rules from "./components/Rules";
import { StyledApp } from "./styled/styled";

const App = () => {
  return (
    <StyledApp>
      <Grid />
      <Rules />
    </StyledApp>
  );
};

export default App;
