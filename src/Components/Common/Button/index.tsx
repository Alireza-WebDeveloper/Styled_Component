import styled from "styled-components";

export const Button = styled.button<{ size: string }>`
  padding: ${({ size }) => {
    return size === "large"
      ? "1rem 2rem"
      : size === "medium"
        ? "0.5rem 1.1rem"
        : "0.25rem 0.5rem";
  }};

  min-width: 100px;
  cursor: pointer;
  font-family: monospace, "Times New Roman", Times, serif;
  transition: all 1s linear;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textColor};
  border-radius: 0.25rem;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColorHover};
  }
`;
