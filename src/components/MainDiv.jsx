import styled from "styled-components";

function MainDiv() {
  return (
    <Main>
      <Star>
        <img
          src="interactive-rating-component-main (1)/interactive-rating-component-main/images/icon-star.svg"
          alt="star icon"
        />
      </Star>
      <TextContainer>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </TextContainer>
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
