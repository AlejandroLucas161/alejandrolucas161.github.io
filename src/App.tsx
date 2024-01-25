import { FunctionComponent } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

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
  font-size: 55px;
  font-weight: 600;
  text-align: center;
`;

export const Subtitle = styled.h3`
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  max-width: 800px;
`;

const App: FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/react-ts-project"
          element={
            <AppContainer>
              <Title>React TypeScript Project</Title>
              <Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
                placerat neque, eget eleifend quam.
              </Subtitle>

              <Link to="/testRoute1">Test Route 1</Link>
              <Link to="/testRoute2">Test Route 2</Link>
            </AppContainer>
          }
        />

        <Route
          path={"/testRoute1"}
          element={
            <AppContainer>
              <Title>Test Route 1</Title>

              <Link to="/react-ts-project">Home</Link>
              <Link to="/testRoute2">Test Route 2</Link>
            </AppContainer>
          }
        />

        <Route
          path="/testRoute2"
          element={
            <AppContainer>
              <Title>Test Route 2</Title>

              <Link to="/react-ts-project">Home</Link>
              <Link to="/testRoute1">Test Route 1</Link>
            </AppContainer>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
