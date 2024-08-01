// MainNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../../screens/MainScreen';
import ModuleSelectionScreen from '../../screens/ModuleSelectionScreen';
import EngenhariaScreen from '../../screens/EngenhariaScreen';
import AgendaLembretesScreen from '../../screens/AgendaLembretesScreen';
import RDoScreen from '../../screens/RDoScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="ModuleSelection" component={ModuleSelectionScreen} />
      <Stack.Screen name="Engenharia" component={EngenhariaScreen} />
      <Stack.Screen name="AgendaLembretes" component={AgendaLembretesScreen} />
      <Stack.Screen name="RDo" component={RDoScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
