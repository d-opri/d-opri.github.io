import React from "react";
import styled from "styled-components";

const Container = ({ children, title, id }) => {
  return (
    <StyledContainer id={id}>
      <StyledTitle>
        <h2>{title}</h2>{" "}
      </StyledTitle>
      <StyledContent>{children}</StyledContent>
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
`;

const StyledTitle = styled.div`
  text-align: left;
`;

const StyledContent = styled.div`
  margin: 2.25rem;
`;

export default Container;
