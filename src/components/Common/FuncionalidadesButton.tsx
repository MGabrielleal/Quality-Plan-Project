import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type FuncionalidadesButtonProps = {
  onPress: () => void;
};

const FuncionalidadesButton: React.FC<FuncionalidadesButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Funcionalidades</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default FuncionalidadesButton;
