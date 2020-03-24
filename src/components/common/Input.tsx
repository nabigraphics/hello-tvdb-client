import React, { InputHTMLAttributes, ReactNode, useMemo } from "react";
import styled from "lib/styles/styled";
import { css } from "@emotion/core";

type BaseInputProps = InputHTMLAttributes<HTMLInputElement>;

type InputProps = BaseInputProps & {
  leftIcon?: ReactNode | string;
  rightIcon?: ReactNode | string;
};

const Input = ({ leftIcon, rightIcon, ...props }: InputProps) => {
  return (
    <InputContainerBlock>
      {leftIcon && <IconBlock>{leftIcon}</IconBlock>}
      <StyledInput leftIcon={leftIcon} rightIcon={rightIcon} {...props} />
    </InputContainerBlock>
  );
};

const InputContainerBlock = styled.div(
  ({ theme }) => css`
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    background-color: ${theme.colors.backgroundSecondary};
    width: 100%;
    ${theme.typography.LabelLarge};
    border: 2px solid transparent;
    :focus-within {
      border: 2px solid ${theme.colors.primary600};
    }
  `
);

const IconBlock = styled.span(
  ({ theme }) => css`
    display: inline-flex;
    align-items: center;
    color: ${theme.colors.text.primary};
    box-sizing: border-box;
    padding: 16px 16px;
  `
);

const getInputPaddingStyle = ({
  leftIcon,
  rightIcon,
}: {
  leftIcon?: any;
  rightIcon?: any;
}) => {
  return css`
    padding: 16px ${rightIcon ? 0 : "20px"} 16px ${leftIcon ? 0 : "20px"};
    box-sizing: border-box;
  `;
};

const StyledInput = styled.input<InputProps>(
  ({ theme, leftIcon, rightIcon }) => css`
    width: 100%;
    border: none;
    background-color: transparent;
    box-sizing: border-box;
    outline: currentColor none medium;
    ${theme.typography.LabelLarge};
    color: ${theme.colors.text.primary};
    // Get padding
    ${getInputPaddingStyle({ leftIcon, rightIcon })};
    :placeholder-shown {
      color: ${theme.colors.text.secondary};
    }
  `
);

export default Input;
