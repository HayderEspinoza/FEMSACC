import React, { FC, ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

type Props = TouchableOpacityProps & {
  children: ReactNode;
};

export const ButtonStyled: FC<Props> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.primary.main};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
