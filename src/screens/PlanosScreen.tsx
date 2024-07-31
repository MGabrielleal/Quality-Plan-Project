// PlanosScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlanosScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Informações sobre os Planos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlanosScreen;
