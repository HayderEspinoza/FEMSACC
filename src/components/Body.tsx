import React, { FC, ReactNode } from 'react';
import styled from 'styled-components/native';

type Props = {
  paddingHorizontal?: number;
  paddingVertical?: number;
  children?: ReactNode;
  marginBottom?: number;
  color?: string;
};

export const Body: FC<Props> = ({ children, ...rest }) => {
  return <StyledView {...rest}>{children}</StyledView>;
};

export const StyledView = styled.View<Props>`
  background-color: transparent;
  padding-left: ${({ paddingHorizontal = 0 }) => `${paddingHorizontal}px`};
  padding-right: ${({ paddingHorizontal = 0 }) => `${paddingHorizontal}px`};
  padding-top: ${({ paddingVertical = 0 }) => `${paddingVertical}px`};
  padding-bottom: ${({ paddingVertical = 0 }) => `${paddingVertical}px`};
  margin-bottom: ${({ marginBottom = 0 }) => `${marginBottom}px`};
`;
