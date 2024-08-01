import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/Common/Footer'; // Importe o Footer

const FuncionalidadesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.containerOne}>
            <Text style={styles.text}>Container 1</Text>
          </View>
          <View style={styles.containerTwo}>
            <Text style={styles.text}>Container 2</Text>
          </View>
          <View style={styles.containerThree}>
            <Text style={styles.text}>Container 3</Text>
          </View>
        </View>
      </View>
      <Footer /> {/* Adiciona o Footer aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Adiciona uma cor de fundo, se desejado
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerOne: {
    backgroundColor: '#e0f7fa', // Cor azul clara
    width: '50%', // Largura do primeiro container
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 550, // Altura dos containers
    borderRadius: 10, // Adiciona bordas arredondadas
  },
  containerTwo: {
    backgroundColor: '#4CAF50', // Cor verde
    width: '50%', // Largura do segundo container
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 550, // Altura dos containers
    borderRadius: 10, // Adiciona bordas arredondadas
  },
  containerThree: {
    backgroundColor: '#ffeb3b', // Cor amarela
    width: '50%', // Largura do terceiro container
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 550, // Altura dos containers
    borderRadius: 10, // Adiciona bordas arredondadas
  },
  text: {
    fontSize: 24,
  },
});

export default FuncionalidadesScreen;
