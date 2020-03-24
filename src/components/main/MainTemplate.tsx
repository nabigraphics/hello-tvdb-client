import React, { FC } from "react";
import styled from "@emotion/styled";

const MainTemplate: FC = ({ children }) => {
  return <Block>{children}</Block>;
};

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export default MainTemplate;
