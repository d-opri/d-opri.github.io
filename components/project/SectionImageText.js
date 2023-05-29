import styled from "styled-components";
import SectionText from "./SectionText";

export default function SectionImageText({ title, description }) {
  return (
    <Container>
      <SectionText />
      <StyledImage
        height={723}
        width={575}
        src="/mobilemockup.svg"
        alt="mockup"
      />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  height: min-content;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 80px;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 25px;
  width: 100%;
  height: auto;
  flex-basis: 37.375rem;
`;
