import { FunctionComponent } from "react";
import styled from "styled-components";

interface TitleProps {
  title: string;
}

interface ImageProps {
  src: string;
}

interface DescriptionProps {
  description: string;
}
interface CardProps extends TitleProps, ImageProps, DescriptionProps {}

const Title: FunctionComponent<TitleProps> = ({ title }) => {
  return <h1>{title}</h1>;
};
const Image: FunctionComponent<ImageProps> = ({ src }) => {
  return <StyledImage src={src} alt={"not found"} />;
};
const Description: FunctionComponent<DescriptionProps> = ({ description }) => {
  return <h1>{description}</h1>;
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.25rem;
  background-color: var(--primary-200);
  border-radius: 0.25rem;
`;

const StyledImage = styled.img`
  height: 40vh;
  object-fit: fill;
`;

const Card: FunctionComponent<CardProps> = ({ title, src, description }) => {
  return (
    <StyledCard>
      <Title title={title} />
      <Image src={src} />
      <Description description={description} />
    </StyledCard>
  );
};

export default Card;
