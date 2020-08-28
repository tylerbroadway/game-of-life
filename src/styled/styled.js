import styled from 'styled-components';

export const StyledRules = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 80vh;
  width: 30%;
  border: 5px solid gray;
  border-radius: 12px;

  h2 {
    font-size: 24px;
    color: white;
  }

  ol {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: -100px;
    height: 50%;

    li {
      font-size: 18px;
      word-wrap: wrap;
      color: white;
    }
  }
`;
