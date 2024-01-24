import { FunctionComponent } from "react";
import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-size: 150%;
  background-image: linear-gradient(
    135deg,
    rgba(111, 191, 145, 1) 30%,
    rgba(162, 200, 182, 1) 70%,
    rgba(184, 230, 199, 1) 100%
  );
  animation: bg-animation 8s ease infinite;

  @keyframes bg-animation {
    0% {
      background-position: 0 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0 50%;
    }
  }
`;

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
    <AppContainer>
      <Title>Title</Title>
      <Subtitle>Subtitle</Subtitle>
    </AppContainer>
  );
};

export default App;
