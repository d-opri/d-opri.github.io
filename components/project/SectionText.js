import styled from "styled-components";

export default function SectionText({ title, description }) {
  return (
    <TextContainer>
      <h4>{title}</h4>
      <p>{description}</p>
    </TextContainer>
  );
}

const TextContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.313rem;
  flex: 1 0 0;

  white-space: pre-wrap;
  width: 100%;
  word-break: break-word;
  word-wrap: break-word;

  h4 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.438rem;
    letter-spacing: 0.005em;
  }

  p {
    font-size: 1.625rem;
    line-height: 150%;
    opacity: 0.7;
    font-weight: 300;
    letter-spacing: 0.065em;
    font-weight: 300;
  }

  @media screen and (max-width: 390px) {
    h4 {
      font-size: 32px;
      letter-spacing: -1px;
      text-transform: none;
      text-decoration: none;
      line-height: 1.4em;
    }
  }
`;
