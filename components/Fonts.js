import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 111px;

  font-style: italic;
  font-weight: 600;

  line-height: 134px;
`;

const StyledSubHeading = styled.h2`
  font-size: 48px;

  font-style: normal;
  font-weight: 500;

  line-height: 58px;
`;

const StyledBigTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 200px;
  line-height: 137.52%;
  color: rgba(238, 238, 238, 1);

  letter-spacing: -0.005em;
  text-transform: uppercase;
`;

const StyledBodyText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 50px;
  letter-spacing: -0.005em;
`;

const StyledTitle = styled.h1`
  font-size: 115px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -4px;
  line-height: 1.2em;
`;
const StyledSubtitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;

  letter-spacing: 0.015em;
`;

const StyledCaption = styled.p`
  font-size: 28px;

  font-style: normal;
  font-weight: 400;

  line-height: 38px;
  letter-spacing: 0.01em;
`;
const StyledListItem = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 51px;

  letter-spacing: 0.01em;
`;

export {
  StyledHeading,
  StyledSubHeading,
  StyledSubtitle,
  StyledCaption,
  StyledTitle,
  StyledBigTitle,
  StyledBodyText,
  StyledListItem,
};
