import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ModuleSelectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Teste 01</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Teste 02</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Teste 03</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Module Selection Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Cor de fundo
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    elevation: 4, // Sombra para a navbar (Android)
    shadowColor: '#000', // Sombra para a navbar (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  navButton: {
    padding: 10,
    backgroundColor: '#4CAF50', // Cor verde para os botões de navegação
    borderRadius: 5,
  },
  navButtonText: {
    color: 'white',
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default ModuleSelectionScreen;
