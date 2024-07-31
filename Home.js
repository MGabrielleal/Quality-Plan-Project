// Home.js
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import MainScreen from './src/screens/MainScreen'; // Importando MainScreen

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <MainScreen /> {/* Usando MainScreen */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
