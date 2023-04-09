import styled from "styled-components";

function ChildDiv() {
  return <Numb />;
}

export default ChildDiv;

const Numb = styled.button`
  background-color: red;
  border-radius: 20px;
  height: 50px;
  width: 50px;
`;
