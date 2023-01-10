import React, { FC } from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { Typography } from '.';
import { TProduct } from '../types';
import { formatDate } from '../utils';

type Props = {
  data: TProduct;
  onPress: (data: TProduct) => void;
};

export const Movement: FC<Props> = (props) => {
  const { data, onPress } = props;
  const theme = useTheme();

  return (
    <MovementContainer onPress={() => onPress(data)}>
      <ProductImage source={{ uri: data.image }} />

      <DescriptionContainer>
        <Typography variant="heavy" size={14}>
          {data.product}
        </Typography>
        <Typography size={12}>
          {formatDate(data.createdAt, 'DD [de] MMMM, YYYY')}
        </Typography>
      </DescriptionContainer>

      <PointsContainer>
        <Typography marginLeft={5} variant="heavy">
          {data.is_redemption ? (
            <Typography color="#f00" variant="heavy">
              {'- '}
            </Typography>
          ) : (
            <Typography color={theme.primary.success} variant="heavy">
              {'+ '}
            </Typography>
          )}

          {data.points}

          <Typography variant="heavy">{'  >'}</Typography>
        </Typography>
      </PointsContainer>
    </MovementContainer>
  );
};

const ProductImage = styled(Image)`
  width: 55px;
  height: 55px;
  border-radius: 10px;
  margin-right: 11px;
`;

const MovementContainer = styled(TouchableOpacity)`
  flex-direction: row;
  margin-bottom: 10px;
`;

const DescriptionContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const PointsContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
  width: 90px;
`;
