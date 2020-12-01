import styled from "styled-components";

export const StyledRules = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 35%;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  border: 5px solid black;
  border-radius: 4rem;

  h2 {
    margin: auto;
    font-size: 2em;
    border-bottom: 5px solid white;
  }

  h3 {
    margin: auto;
    text-align: center;
  }

  ol {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50%;

    li {
      font-size: 1.25em;
    }
  }
`;

export const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 99%;
`;

export const StyledGrid = styled.div`
  margin-top: 1rem;
`;

export const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button {
    margin: 0.5rem;
    border-radius: 0.75rem;
    background: #203a43;
    color: white;
    height: 2rem;
  }
`;
