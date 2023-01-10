import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { useTheme } from 'styled-components/native';
import { ButtonStyled, Container, Typography } from '../../components';
import { useProducts } from '../../hooks';
import { FilterEnum, MovementsProps, TProduct } from '../../types';
import { Movement } from '../../components/Movement';
import {
  PointCard,
  Section,
  MovementsContainer,
  Row,
  Separator,
  Item,
} from './Styles';
import { formatNumber } from '../../utils';

export const Movements: FC<MovementsProps> = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const theme = useTheme();

  const { isLoading, getProducts, products, totalPoints, error } =
    useProducts();
  const [filter, setFilter] = useState<FilterEnum>(FilterEnum.all);

  useEffect(() => {
    getProducts(FilterEnum.all);
  }, []);

  useEffect(() => {
    if (error) {
      Alert.alert('Error', `${t(error)}`);
    }
  }, [error]);

  const filterBy = (status: FilterEnum) => {
    getProducts(status);
    setFilter(status);
  };

  const goDetail = (params: TProduct) => {
    navigation.navigate('MovementDetail', params);
  };

  return (
    <Container>
      <Section>
        <Typography variant="heavy" marginTop={20} size={20}>
          {t('home.welcome')}
        </Typography>
        <Typography>Ruben Rodriguez</Typography>

        <Typography
          size={14}
          color={theme.primary.caption}
          variant="heavy"
          marginTop={20}>
          {t('home.yourPoints')}
        </Typography>

        <PointCard>
          <Typography color="#fff" variant="heavy">
            {t('home.december')}
          </Typography>

          <Typography
            color="#fff"
            variant="heavy"
            size={32}
            marginTop={7}
            align="center">
            {formatNumber(totalPoints?.toString())} {t('home.pointsAbbr')}
          </Typography>
        </PointCard>

        <Typography variant="heavy" color={theme.primary.caption}>
          {t('home.yourMovements')}
        </Typography>
      </Section>

      <MovementsContainer>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={products}
            style={{ paddingHorizontal: 10 }}
            refreshing={isLoading}
            onRefresh={() => getProducts(filter)}
            renderItem={({ item }) => (
              <Movement data={item} onPress={goDetail} />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </MovementsContainer>

      <Section>
        {filter !== FilterEnum.all ? (
          <ButtonStyled onPress={() => filterBy(FilterEnum.all)}>
            <Typography color="white" variant="heavy">
              {t('home.all')}
            </Typography>
          </ButtonStyled>
        ) : (
          <Row>
            <Item>
              <ButtonStyled onPress={() => filterBy(FilterEnum.earned)}>
                <Typography color="white" variant="heavy">
                  {t('home.earned')}
                </Typography>
              </ButtonStyled>
            </Item>

            <Separator />
            <Item>
              <ButtonStyled onPress={() => filterBy(FilterEnum.redeemed)}>
                <Typography color="white" variant="heavy">
                  {t('home.redeemed')}
                </Typography>
              </ButtonStyled>
            </Item>
          </Row>
        )}
      </Section>
    </Container>
  );
};
