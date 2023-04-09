import styled from "styled-components";

function Numbers() {
  return (
    <Container>
      <NumberButton>
        <h1></h1>
      </NumberButton>
    </Container>
  );
}

export default Numbers;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 17px;
`;

const NumberButton = styled.button`
  width: 40px;
  height: 40px;
  background: #262e38;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;
