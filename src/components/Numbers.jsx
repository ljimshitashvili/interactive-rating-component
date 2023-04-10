import styled from "styled-components";

function Numbers() {
  return (
    <Container>
      <Num>
        <h1>1</h1>
      </Num>
      <Num>
        <h1>2</h1>
      </Num>
      <Num>
        <h1>3</h1>
      </Num>
      <Num>
        <h1>4</h1>
      </Num>
      <Num>
        <h1>5</h1>
      </Num>
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

const Num = styled.button`
  width: 42px;
  height: 42px;
  background: #262e38;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  h1 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.175px;
    color: #7c8798;
  }
`;
