import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native';


export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Adicione a lógica de autenticação aqui
    Alert.alert('Login Info', `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Você pode adicionar a funcionalidade de anexar uma imagem aqui */}
        <Image source={{ uri: 'src/assets/teste.jpg' }} style={styles.image} />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Bem Vindo ao Quality Plan</Text>
        <Text style={styles.subtitle}>Digite seus dados abaixo</Text>

        <Text style={styles.label}>E-mail de acesso</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail de acesso"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha de acesso</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha de acesso"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Azul claro
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 750,
    height: 900,
    borderRadius: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  loginContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: '#666',
  },
  label: {
    fontSize: 14,
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#28a745',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#007bff',
    marginTop: 16,
  },
});
