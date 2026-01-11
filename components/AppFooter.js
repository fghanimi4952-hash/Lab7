import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Composant AppFooter
 * Affiche le pied de page de l'application
 */
export default function AppFooter() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>All rights reserved</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#495E57',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
