import { useState } from "react";
import MainDiv from "./components/MainDiv.jsx";
import styled from "styled-components";

function App() {
  return (
    <Background>
      <MainDiv />
    </Background>
  );
}

export default App;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #131518;
  padding: 0 24px;
  box-sizing: border-box;
`;