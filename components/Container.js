import React from "react";
import styled from "styled-components";

const Container = ({ children, title, id }) => {
  return (
    <StyledContainer id={id}>
      <span>
        <h2>{title}</h2>{" "}
      </span>
      <div>{children}</div>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  gap: 10rem;
  min-height: 90vh;
  scroll-snap-align: start;
  span {
    text-align: left;
  }
  div {
    margin: 2.25rem;
  }

  @media screen and (min-width: 834px) {
    min-height: 125vh;
    div {
      text-align: right;
      padding: 0 6.25rem;
    }
  }
`;

export default Container;
