import React from "react";
import styled from "styled-components";

// Interface for FormButton component props
interface FormButtonProps {
  children: React.ReactNode;
  type: "confirm" | "cancel";
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
  padding: "0.3rem 0.6rem";
  border-radius: "0.2rem";
  color: "aliceblue";
  text-transform: "capitalize";
  transition: "all 0.3s ease-in";
`;

const FormButton: React.FC<FormButtonProps> = ({ children, type }) => {
  return <StyledFormButton type={type}>{children}</StyledFormButton>;
};

export default FormButton;
