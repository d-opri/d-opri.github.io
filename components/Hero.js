import styled from "styled-components";

const Container = styled.header`
  text-align: center;
  line-height: 3rem;
`;

export default function Hero() {
  return (
    <Container>
      <h1> Dani Opri</h1>
      <p> Front-end Developer and UX Designer</p>
    </Container>
  );
}
