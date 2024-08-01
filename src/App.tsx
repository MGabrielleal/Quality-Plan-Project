import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../src/screens/MainScreen';
import LoginScreen from '../src/screens/LoginScreen';
import PlanosScreen from '../src/screens/PlanosScreen';
import FuncionalidadesScreen from '../src/screens/FuncionalidadesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Planos" component={PlanosScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
