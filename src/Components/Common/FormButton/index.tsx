import React from "react";
import styled from "styled-components";

// Interface for FormButton component props
interface FormButtonProps {
  children: React.ReactNode;
  type: "confirm" | "cancel";
  size: "default" | "small" | "large";
  onClick(): void;
}

// Styled component for FormButton
const StyledFormButton = styled.button<FormButtonProps>`
  /* Conditions */
  background-color: ${(props) =>
    props.type === "confirm" ? "var(--green-800)" : "var(--red-800)"};
  font-size: var(--font-p2);

  &:hover {
    background-color: ${(props) =>
      props.type === "confirm" ? "var(--green-700)" : "var(--red-700)"};
  }

  /* Public */
  padding: ${(props) => {
    switch (props.size) {
      case "default":
        return "0.3rem 0.6rem";
      case "small":
        return "0.2rem 0.4rem";
      case "large":
        return "0.5rem 0.8rem";
      default:
        return "0.3rem 0.6rem";
    }
  }};

  border-radius: 0.2rem;
  color: aliceblue;
  text-transform: capitalize;
  transition: all 0.3s ease-in;
  box-shadow: 0 0 0.2rem var(--primary-1000);
`;

const FormButton: React.FC<FormButtonProps> = ({
  children,
  type,
  onClick,
  size,
}) => {
  return (
    <StyledFormButton size={size} onClick={onClick} type={type}>
      {children}
    </StyledFormButton>
  );
};

export default FormButton;
