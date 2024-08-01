// Home.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import PlanosScreen from './src/screens/PlanosScreen';
import FuncionalidadesScreen from './src/screens/FuncionalidadesScreen';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="PlanosScreen" component={PlanosScreen} />
        <Stack.Screen name="FuncionalidadesScreen" component={FuncionalidadesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  // Adicione estilos aqui se necessário
});

export default Home;
