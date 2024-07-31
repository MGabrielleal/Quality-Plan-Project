import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import LoginButton from '../components/Common/LoginButton';
import PlanosButton from '../components/Common/PlanosButton';
import FuncionalidadesButton from '../components/Common/FuncionalidadesButton';


interface Props {
  navigation: NavigationProp<any>;
}

const MainScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navItems}>
          <PlanosButton onPress={() => navigation.navigate('Planos')} />
          <FuncionalidadesButton onPress={() => navigation.navigate('Funcionalidades')} />
        </View>
        <LoginButton onPress={() => navigation.navigate('src/screens/LoginScreen.tsx')} style={styles.loginButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%', // Garantir que a navbar ocupe 100% da largura da tela
  },
  navItems: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  loginButton: {
    backgroundColor: '#4CAF50',
  },
});

export default MainScreen;
