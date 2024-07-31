import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const App = () => {
  const handlePress = (page) => {
    console.log(`Navigating to ${page}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => handlePress('Início')}>
          <Text style={styles.navItem}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Funcionalidades')}>
          <Text style={styles.navItem}>Funcionalidades</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Planos')}>
          <Text style={styles.navItem}>Planos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => handlePress('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      {/* Other components or screens would go here */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 5,
    borderBottomColor: '#ddd',
  },
  navItem: {
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#4CAF50', // Green background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#388E3C', // Darker green border
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;







import FuncionalidadesScreen from '../../screens/FuncionalidadesScreen';
<Stack.Screen name="Funcionalidades" component={FuncionalidadesScreen} />


import FuncionalidadesScreen from '../src/screens/FuncionalidadesScreen';
<Stack.Screen name="Funcionalidades" component={FuncionalidadesScreen} />