import { css } from "@emotion/core";
import { CSSInterpolation } from "@emotion/serialize";

type FontT = CSSInterpolation;

export type TypographyT = {
  ParagraphXSmall: FontT;
  ParagraphSmall: FontT;
  ParagraphMedium: FontT;
  ParagraphLarge: FontT;
  LabelXSmall: FontT;
  LabelSmall: FontT;
  LabelMedium: FontT;
  LabelLarge: FontT;
  HeadingXSmall: FontT;
  HeadingSmall: FontT;
  HeadingMedium: FontT;
  HeadingLarge: FontT;
  HeadingXLarge: FontT;
  HeadingXXLarge: FontT;
};

const typography: TypographyT = {
  ParagraphXSmall: css`
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  `,
  ParagraphSmall: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  `,
  ParagraphMedium: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  `,
  ParagraphLarge: css`
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  `,
  LabelXSmall: css`
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  `,
  LabelSmall: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
  `,
  LabelMedium: css`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  `,
  LabelLarge: css`
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  `,
  HeadingXSmall: css`
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  `,
  HeadingSmall: css`
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
  `,
  HeadingMedium: css`
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
  `,
  HeadingLarge: css`
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
  `,
  HeadingXLarge: css`
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
  `,
  HeadingXXLarge: css`
    font-size: 40px;
    font-weight: 600;
    line-height: 52px;
  `,
};

export default typography;
