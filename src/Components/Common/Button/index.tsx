import styled from "styled-components";
import { defaultTheme } from "../../../Utils/theme";

export const Button = styled.button`
  padding: 1rem 2rem;
  min-width: 100px;
  cursor: pointer;
  font-family: monospace, "Times New Roman", Times, serif;
  transition: background-color 0.25s ease-in-out;
  background-color: ${defaultTheme.primary};
  color: ${defaultTheme.textColor};
  border-radius: 0.25rem;
  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
  }
  &:active {
    background-color: ${defaultTheme.primaryColorActive};
  }
`;
