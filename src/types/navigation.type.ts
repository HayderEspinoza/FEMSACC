import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TProduct } from './response.type';

export type RootStackParamList = {
  Movements: undefined;
  MovementDetail: TProduct;
};

export type MovementsProps = NativeStackScreenProps<
  RootStackParamList,
  'Movements'
>;

export type MovementDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'MovementDetail'
>;
