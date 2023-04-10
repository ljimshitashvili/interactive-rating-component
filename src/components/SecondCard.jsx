import styled from "styled-components";

function SecondCard() {
  return (
    <Main>
      <img
        src="interactive-rating-component-main (1)/interactive-rating-component-main/images/illustration-thank-you.svg"
        alt="illustration"
      />
    </Main>
  );
}

export default SecondCard;

const Main = styled.div`
  width: 100%;
  max-width: 400px;
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
