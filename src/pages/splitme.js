import styled from "styled-components";
import TextImageContainer from "../../components/TextImageContainer";
import Link from "next/link";

export default function SplitMe() {
  return (
    <Layout>
      <Link href="/">Back</Link>
      <TextImageContainer />
    </Layout>
  );
}

const Layout = styled.section`
  margin-top: 5.5rem;
`;
