import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from ".";
import styled from "styled-components";
export default {
  title: "Buttons/Button",
  component: Button,
} as Meta;

const StyledDiv = styled.div`
  padding: 10px;
`;

export const ButtonLarge = () => (
  <StyledDiv>
    <Button onClick={action("onClick")} size="large">
      Large Scale
    </Button>
  </StyledDiv>
);

export const ButtonMedium = () => (
  <StyledDiv>
    <Button onClick={action("onClick")} size="large">
      Large Scale
    </Button>
  </StyledDiv>
);
export const ButtonSmall = () => (
  <StyledDiv>
    <Button onClick={action("onClick")} size="large">
      Large Scale
    </Button>
  </StyledDiv>
);
