import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MainScreenNavigationProp } from '../types';
import Footer from '../components/Common/Footer'; // Importa o Footer

const MainScreen = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navbarCenter}>
          <TouchableOpacity
            style={[styles.button, styles.buttonWide]}
            onPress={() => navigation.navigate('FuncionalidadesScreen')}
          >
            <Text style={styles.buttonText}>Funcionalidades</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('PlanosScreen')}
          >
            <Text style={styles.buttonText}>Planos</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {/* Outros conteúdos da tela aqui */}
      </View>
      <Footer /> {/* Adiciona o Footer */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20, // Ajusta o padding para a altura da navbar
    backgroundColor: '#fff',
    elevation: 4, // Sombra para a navbar (Android)
    shadowColor: '#000', // Sombra para a navbar (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    height: 60, // Ajuste conforme necessário
  },
  navbarCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1, // Permite que o container use o espaço disponível entre o botão "Login" e a borda esquerda
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
    height: 40,
    justifyContent: 'center',
  },
  buttonWide: {
    width: 125,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default MainScreen;
