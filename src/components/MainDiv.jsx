import styled from "styled-components";
import ChildDiv from "./ChildDiv.jsx";

function MainDiv() {
  return (
    <Main>
      <ChildDiv />
    </Main>
  );
}

export default MainDiv;

const Main = styled.div`
  width: 100%;
  height: 360px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
`;
