// @flow
import * as React from "react";
import styled, { keyframes } from "styled-components";

const LoadingIndicatorBar = () => {
  return (
    <Container>
      <Loader />
    </Container>
  );
};

const loadingFrame = keyframes`
  from { margin-left: -100%; }
  to { margin-left: 100%; }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: ${(props) => props.theme.depths.loadingIndicatorBar};
  width: 100%;
  animation: ${loadingFrame} 4s ease-in-out infinite;
  animation-delay: 250ms;
  margin-left: -100%;
`;

const Loader = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.primary};
`;

export default LoadingIndicatorBar;
