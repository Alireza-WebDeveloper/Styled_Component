import React from "react";
import styled from "styled-components";

const StyledGridContainer = styled.div<{
  column: number;
  row?: number;
  gap?: number;
}>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props["column"]}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props["row"]}, 1fr)`};
  gap: ${(props) => `${props["gap"] && props["gap"] * 0.25}rem`};
`;

interface GridContainerProps {
  column: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  row?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: number;
  children: React.ReactNode;
}

const GridContainer: React.FC<GridContainerProps> = ({
  column,
  row,
  children,
  gap,
}) => {
  return (
    <StyledGridContainer gap={gap} row={row} column={column}>
      {children}
    </StyledGridContainer>
  );
};

export default GridContainer;
