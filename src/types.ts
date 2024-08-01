import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  MainScreen: undefined;
  LoginScreen: undefined;
  PlanosScreen: undefined;
  FuncionalidadesScreen: undefined;
  ModuleSelectionScreen: undefined;
};

export type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;


