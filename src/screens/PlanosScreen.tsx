import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importa ícones
import Footer from '../components/Common/Footer'; // Importar o componente Footer

const PlanosScreen = () => {
  // Criar uma animação para o botão
  const buttonScale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.95, // Reduz o tamanho do botão ao pressionar
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1, // Restaura o tamanho original do botão
      useNativeDriver: true,
    }).start();
  };

  const renderPlan = (title: string, price: string, onPress: () => void) => (
    <View style={styles.plan}>
      <Text style={styles.planTitle}>{title}</Text>
      <Text style={styles.planPrice}>{price}</Text>
      <Text style={styles.planMonthly}>MENSAL</Text>
      <View style={styles.divider} />
      <View style={styles.infoWrapper}>
        <Text style={styles.infoItem}>Obras</Text>
        <Text style={styles.infoItem}>Usuários</Text>
        <Text style={styles.infoItem}>Relatórios</Text>
        <Text style={styles.infoItem}>Imagens</Text>
      </View>
      <Animated.View style={[styles.buttonContainer, { transform: [{ scale: buttonScale }] }]}>
        <TouchableOpacity
          style={styles.button}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>Obter Agora</Text>
          <Icon name="arrow-forward" size={20} color="white" style={styles.arrowIcon} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      {/* Container Principal */}
      <View style={styles.containerPrincipal}>
        <Text style={styles.title}>Relatório De Acompanhamento De Obra</Text>
        <ScrollView
          contentContainerStyle={styles.innerContainer}
          horizontal
          showsHorizontalScrollIndicator={false} // Opcional: Remove o indicador de rolagem horizontal
        >
          <View style={styles.primaryContainer}>
            <View style={styles.plansWrapper}>
              {renderPlan("Plano 01", "R$ 100", () => alert('Obter Agora Plano 01'))}
              {renderPlan("Plano 02", "R$ 200", () => alert('Obter Agora Plano 02'))}
              {renderPlan("Plano 03", "R$ 300", () => alert('Obter Agora Plano 03'))}
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Novo Container */}
      <View style={styles.newContainer}>
        <Text style={styles.newTitle}>Módulo Planejamento</Text>
        <ScrollView
          contentContainerStyle={styles.innerContainer}
          horizontal
          showsHorizontalScrollIndicator={false} // Opcional: Remove o indicador de rolagem horizontal
        >
          <View style={styles.secondaryContainer}>
            <View style={styles.plansWrapper}>
              {renderPlan("Plano 01", "R$ 100", () => alert('Obter Agora Plano 01'))}
              {renderPlan("Plano 02", "R$ 200", () => alert('Obter Agora Plano 02'))}
              {renderPlan("Plano 03", "R$ 300", () => alert('Obter Agora Plano 03'))}
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Terceiro Container */}
      <View style={styles.thirdContainer}>
        <Text style={styles.thirdTitle}>Módulo de Agenda</Text>
        <ScrollView
          contentContainerStyle={styles.innerContainer}
          horizontal
          showsHorizontalScrollIndicator={false} // Opcional: Remove o indicador de rolagem horizontal
        >
          <View style={styles.tertiaryContainer}>
            <View style={styles.plansWrapper}>
              {renderPlan("Plano 01", "R$ 100", () => alert('Obter Agora Plano 01'))}
              {renderPlan("Plano 02", "R$ 200", () => alert('Obter Agora Plano 02'))}
              {renderPlan("Plano 03", "R$ 300", () => alert('Obter Agora Plano 03'))}
            </View>
          </View>
        </ScrollView>
      </View>

      <Footer /> {/* Adiciona o Footer */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa', // Cor azul clara
  },
  scrollContainer: {
    flexGrow: 1,
  },
  containerPrincipal: {
    alignItems: 'center', // Centraliza horizontalmente
    padding: 10,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginVertical: 20, // Espaço acima e abaixo do título
  },
  newContainer: {
    alignItems: 'center', // Centraliza horizontalmente
    padding: 10,
    backgroundColor: '#4caf50', // Cor verde para o novo container
  },
  newTitle: {
    fontSize: 38,
    fontWeight: 'bold',
    marginVertical: 20, // Espaço acima e abaixo do título
  },
  thirdContainer: {
    alignItems: 'center', // Centraliza horizontalmente
    padding: 10,
    backgroundColor: '#ffeb3b', // Cor amarela para o terceiro container
  },
  thirdTitle: {
    fontSize: 38,
    fontWeight: 'bold',
    marginVertical: 20, // Espaço acima e abaixo do título
  },
  innerContainer: {
    flexDirection: 'row', // Alinha os containers de planos horizontalmente
    justifyContent: 'center', // Centraliza os planos horizontalmente
    alignItems: 'center', // Centraliza os planos verticalmente
  },
  primaryContainer: {
    borderRadius: 10,
    padding: 20,
    width: '100%',
    backgroundColor: '#e0f7fa', // Cor azul clara para o container principal
  },
  secondaryContainer: {
    borderRadius: 10,
    padding: 20,
    width: '100%',
    backgroundColor: '#4caf50', // Cor verde para o segundo container
  },
  tertiaryContainer: {
    borderRadius: 10,
    padding: 20,
    width: '100%',
    backgroundColor: '#ffeb3b', // Cor amarela para o terceiro container
  },
  plansWrapper: {
    flexDirection: 'row', // Alinha os planos horizontalmente
    alignItems: 'center',
  },
  plan: {
    backgroundColor: '#ffffff', // Cor de fundo branca para os planos
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10, // Espaço entre os planos
    width: 250, // Largura fixa para cada plano
    alignItems: 'center',
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  planPrice: {
    fontSize: 18,
    marginTop: 10,
  },
  planMonthly: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#00796b', // Cor do texto "MENSAL"
  },
  divider: {
    height: 1,
    backgroundColor: '#00796b', // Cor da divisória
    width: '100%',
    marginVertical: 10,
  },
  infoWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  infoItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#4CAF50', // Cor verde
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  arrowIcon: {
    marginLeft: 10, // Espaço entre o texto e a seta
  },
});

export default PlanosScreen;
