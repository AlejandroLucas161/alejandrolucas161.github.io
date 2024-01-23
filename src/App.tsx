import { FunctionComponent } from "react";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const App: FunctionComponent = () => {
  return (
    <>
      <Title>Title</Title>
    </>
  );
};

export default App;
