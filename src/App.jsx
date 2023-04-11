import { useState } from "react";
import FirstCard from "./components/FirstCard.jsx";
import SecondCard from "./components/SecondCard.jsx";
import styled from "styled-components";

function App() {
  const [secondCard, setsecondCard] = useState(false);
  const [rating, setrating] = useState("");

  return (
    <div>
      <Background>
        {secondCard ? (
          <SecondCard rating={rating} />
        ) : (
          <FirstCard
            rating={rating}
            setrating={setrating}
            setsecondCard={setsecondCard}
          />
        )}
      </Background>
    </div>
  );
}

export default App;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #131518;
  padding: 0 24px;
  box-sizing: border-box;
`;
