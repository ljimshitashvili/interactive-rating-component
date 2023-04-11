import styled from "styled-components";
import thankyouImage from "/public/illustration-thank-you.svg";

function SecondCard({ rating }) {
  return (
    <Main>
      <img src={thankyouImage} alt="illustration" />
      <Result>
        <h1>You selected {rating} out of 5</h1>
      </Result>
      <h2>Thank you!</h2>
      <h3>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </h3>
    </Main>
  );
}

export default SecondCard;

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
  gap: 24px;
  padding: 24px;
  align-items: center;
  box-sizing: border-box;

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
  }

  h3 {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #969fad;
  }
`;

const Result = styled.div`
  height: 32px;
  width: 168px;
  border-radius: 22.5px;
  background: #262e38;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #fc7614;
  }
`;
