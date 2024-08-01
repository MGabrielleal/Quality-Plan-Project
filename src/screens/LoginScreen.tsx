import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../types'; // Importe os tipos de navegação
import Footer from '../components/Common/Footer'; // Importa o Footer

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
    navigation.navigate('ModuleSelectionScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/images/flag.png')} style={styles.flag} />
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageButtonText}>Português</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Entrar no sistema</Text>
        <Text style={styles.subtitle}>Digite seus dados abaixo</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>E-mail de acesso</Text>
          <TextInput
            style={styles.input}
            placeholder="nome@empresa.com.br"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Senha de acesso</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <Footer /> {/* Adiciona o Footer aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Cor de fundo
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  flag: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  languageButtonText: {
    fontSize: 16,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPasswordButton: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: '#0066cc',
    fontSize: 14,
  },
});

export default LoginScreen;
