// src/components/Common/Footer.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerTitle}>CONTATO</Text>
      <Text style={styles.footerText}>(85) 99997-6330</Text>
      <Text style={styles.footerSubtext}>WhatsApp</Text>
      <View style={styles.divider} /> {/* Divisória */}
      <View style={styles.attendance}>
        <Text style={styles.attendanceTitle}>HORÁRIO DE ATENDIMENTO</Text>
        <Text style={styles.attendanceText}>De segunda a sexta:</Text>
        <Text style={styles.attendanceText}>9h às 12h e 13h às 17h</Text>
        <Text style={styles.attendanceText}>Fortaleza - CE - Brasil</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 15,
    backgroundColor: '#00796b', // Cor de fundo para o footer
    alignItems: 'center',
  },
  footerTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  footerSubtext: {
    color: 'white',
    fontSize: 14,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#004d40', // Cor da divisória
    marginVertical: 10,
  },
  attendance: {
    alignItems: 'center',
  },
  attendanceTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  attendanceText: {
    color: 'white',
    fontSize: 14,
  },
});

export default Footer;

