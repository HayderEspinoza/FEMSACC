import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';
import { Body, ButtonStyled, Typography } from '../../components';
import { MovementDetailProps } from '../../types';
import { formatDate, formatNumber } from '../../utils';
import { Header, ProductImage } from './Styles';

export const MovementDetail: FC<MovementDetailProps> = (props) => {
  const { navigation, route } = props;
  const params = route.params;

  const { t } = useTranslation();
  const theme = useTheme();
  const points = formatNumber(params.points.toString());

  return (
    <>
      <Header>
        <Typography variant="heavy" size={24}>
          {params.product}
        </Typography>
      </Header>
      <Body paddingHorizontal={20}>
        <ProductImage source={{ uri: params.image }} />

        <Typography
          marginTop={32}
          color={theme.primary.caption}
          size={14}
          variant="heavy">
          {t('movementDetail.productDetails')}
        </Typography>

        <Typography marginTop={19} variant="heavy">
          {t('movementDetail.purchasedOn', {
            date: formatDate(params.createdAt, 'DD [de] MMMM, YYYY'),
          })}
        </Typography>

        <Typography
          marginTop={20}
          color={theme.primary.caption}
          size={14}
          variant="heavy">
          {t('movementDetail.accumulatedPoints')}
        </Typography>

        <Typography marginTop={32} marginBottom={47} size={24} variant="heavy">
          {t('movementDetail.points', { points })}
        </Typography>

        <ButtonStyled onPress={() => navigation.goBack()}>
          <Typography color="white" variant="heavy">
            {t('common.accept')}
          </Typography>
        </ButtonStyled>
      </Body>
    </>
  );
};
