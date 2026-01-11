import * as React from 'react';
import { View, StyleSheet } from 'react-native';

// Import des composants
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import WelcomeScreen from './components/WelcomeScreen';
// Décommenter la ligne suivante pour utiliser LoginScreen à la place de WelcomeScreen
// import LoginScreen from './components/LoginScreen';

/**
 * Composant principal de l'application
 * Intègre les différents écrans et composants
 */
export default function App() {
  return (
    <>
      {/* Conteneur principal avec l'en-tête et l'écran */}
      <View style={styles.container}>
        <AppHeader />
        <WelcomeScreen />
        {/* Pour utiliser l'écran de connexion, remplacer WelcomeScreen par LoginScreen */}
        {/* <LoginScreen /> */}
      </View>
      
      {/* Conteneur pour le pied de page */}
      <View style={styles.footerContainer}>
        <AppFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});
