import React, { FC } from "react";
import { css, Global } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { ThemeT } from "lib/styles/types";

const AppGlobalStyle: FC = () => {
  const theme = useTheme<ThemeT>();

  return (
    <Global
      styles={css`
        body {
          background-color: ${theme.colors.backgroundPrimary};
          color: white;
        }
      `}
    />
  );
};

export default AppGlobalStyle;
