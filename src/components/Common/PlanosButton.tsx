import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  onPress: () => void;
  style?: ViewStyle;
}

const PlanosButton: React.FC<Props> = ({ onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>Planos</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#888',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
  },
});

export default PlanosButton;
