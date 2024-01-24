import { FunctionComponent } from "react";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
`;

const App: FunctionComponent = () => {
  return (
    <>
      <Title>Title</Title>
      <Subtitle>Subtitle</Subtitle>
    </>
  );
};

export default App;
