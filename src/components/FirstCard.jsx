import styled from "styled-components";

function FirstCard({ rating, setrating, setsecondCard }) {
  function handleButton() {
    if (rating !== "") {
      setsecondCard(true);
    }
  }
  return (
    <Main>
      <Star>
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </Star>
      <TextContainer>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </TextContainer>
      <Container>
        <Num
          onClick={() => {
            setrating("1");
          }}
        >
          <h1>1</h1>
        </Num>
        <Num
          onClick={() => {
            setrating("2");
          }}
        >
          <h1>2</h1>
        </Num>
        <Num
          onClick={() => {
            setrating("3");
          }}
        >
          <h1>3</h1>
        </Num>
        <Num
          onClick={() => {
            setrating("4");
          }}
        >
          <h1>4</h1>
        </Num>
        <Num
          onClick={() => {
            setrating("5");
          }}
        >
          <h1>5</h1>
        </Num>
      </Container>
      <SubmitButton onClick={handleButton}>Submit</SubmitButton>
    </Main>
  );
}

export default FirstCard;

const Main = styled.div`
  width: 100%;
  max-width: 327px;
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

const Star = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #262e38;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const TextContainer = styled.div`
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #ffffff;
    margin-bottom: 10px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #969fad;
    margin-bottom: 24px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 45px;
  background: #fc7614;
  border-radius: 22.5px;
  border: none;
  margin-top: 24px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1.8px;
  color: #ffffff;
  text-transform: uppercase;
`;

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
  color: #7c8798;
  cursor: pointer;

  :focus {
    background: #7c8798;
    color: #ffffff;
  }
  :hover {
    background: #fc7614;
    color: #ffffff;
  }

  h1 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.175px;
  }
`;
