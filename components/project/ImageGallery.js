import styled from "styled-components";

export default function ImageGallery({ image }) {
  return (
    <ImageContainer>
      {image.map((image, index) => {
        return (
          <StyledBigImage
            key={index}
            height={651}
            width={1242}
            src={image}
            alt={image.alt}
          />
        );
      })}
    </ImageContainer>
  );
}

const StyledBigImage = styled(Image)`
  border-radius: 25px;
  width: 100%;
  height: auto;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 40px;
`;
