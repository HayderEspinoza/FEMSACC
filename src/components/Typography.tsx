import { DefaultTFuncReturn } from 'i18next';
import React, { FC, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export type TFamily = 'regular' | 'medium' | 'heavy';
type TSizes = number | 'huge' | 'big' | 'medium' | 'normal' | 'small' | 'tiny';
type Align = 'left' | 'center' | 'right' | 'justify';
type Props = {
  color?: string;
  variant?: TFamily;
  size?: TSizes;
  children: ReactNode | DefaultTFuncReturn;
  lineHeight?: number;
  align?: Align;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
};

const Fonts: Record<string, string> = {
  regular: 'Avenir',
  medium: 'Avenir-Medium',
  heavy: 'Avenir-Heavy',
};

export const Typography: FC<Props> = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

const getSize = (theme: DefaultTheme, size?: TSizes) => {
  if (!size) {
    return theme.fontSizes.normal;
  } else if (isNaN(+size)) {
    return (theme.fontSizes as any)[size];
  }
  return size + 'px';
};

const StyledText = styled.Text<Props>`
  font-size: ${({ size, theme }) => getSize(theme, size)};
  font-family: ${({ variant, theme }) =>
    variant ? Fonts[variant] : theme.fonts.regular};
  color: ${({ color }) => color};
  text-align: ${({ align = 'left' }) => align};
  margin-top: ${({ marginTop = 0 }) => `${marginTop}px`};
  margin-bottom: ${({ marginBottom = 0 }) => `${marginBottom}px`};
  margin-left: ${({ marginLeft = 0 }) => `${marginLeft}px`};
  margin-right: ${({ marginRight = 0 }) => `${marginRight}px`};
  ${({ lineHeight }) => {
    if (lineHeight) {
      return `line-height: ${lineHeight}px`;
    }
  }};
`;
