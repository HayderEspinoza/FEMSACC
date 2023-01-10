import styled from 'styled-components/native';

export const Section = styled.View`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
`;

export const PointCard = styled.View`
  background: ${({ theme }) => theme.primary.main};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  height: 143px;
  padding: 20px;
  width: 286px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const MovementsContainer = styled.View`
  margin: 20px;
  border-radius: 20px;
  padding: 20px 0;
  flex: 1;
  background-color: white;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Item = styled.View`
  flex: 1;
`;

export const Separator = styled.View`
  width: 13px;
`;
