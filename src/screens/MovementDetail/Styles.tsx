import styled from 'styled-components/native';

export const ProductImage = styled.Image`
  height: 350px;
  width: 100%;
  border-radius: 10px;
`;

export const Header = styled.View`
  width: 100%;
  height: 150px;
  padding: 20px;
  background-color: ${({ theme }) => theme.primary.header};
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 20px;
`;
