import { useState } from "react";
import FirstCard from "./components/FirstCard.jsx";
import SecondCard from "./components/SecondCard.jsx";
import styled from "styled-components";

function App() {
  const [secondCard, setsecondCard] = useState(false);

  return (
    <Background>
      {secondCard ? (
        <SecondCard />
      ) : (
        <FirstCard setsecondCard={setsecondCard} />
      )}
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
