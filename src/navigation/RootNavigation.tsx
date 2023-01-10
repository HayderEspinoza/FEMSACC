import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { MovementDetail, Movements } from '../screens';

export const RootNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Movements'} component={Movements} />
        <Stack.Screen name={'MovementDetail'} component={MovementDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
