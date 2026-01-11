import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Composant AppHeader
 * Affiche l'en-tête de l'application
 */
export default function AppHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>My App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#495E57',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 28,
    color: '#EDEFEE',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
