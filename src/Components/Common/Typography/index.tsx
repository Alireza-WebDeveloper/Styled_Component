import React from "react";
import styled from "styled-components";

// !! Types
const variants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
};

interface TypographyProps {
  variant: keyof typeof variants;
  children: React.ReactNode;
}

const Typography: React.FunctionComponent<TypographyProps> = ({
  variant,
  children,
}) => {
  // !! Erorr
  if (!variants[variant]) {
    throw new Error(`Invalid variant: ${variant}`);
  }
  //   !! Create
  let StyledTypography;
  if (variant.startsWith("h")) {
    StyledTypography = styled[variant]`
      font-size: var(--${variant});
    `;
  }
  //   !! JSX
  return <StyledTypography>{children}</StyledTypography>;
};

export default Typography;
