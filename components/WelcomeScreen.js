import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';

/**
 * Composant WelcomeScreen
 * Affiche l'écran d'accueil avec un champ de saisie pour le prénom
 */
export default function WelcomeScreen() {
  // État local pour stocker la valeur du champ "First Name"
  // firstName : valeur actuelle du champ
  // onChangeFirstName : fonction pour mettre à jour cette valeur
  const [firstName, onChangeFirstName] = useState('');

  return (
    <ScrollView style={styles.container}>
      {/* Titre de bienvenue */}
      <Text style={styles.headerText}>Welcome to My App</Text>
      
      {/* Texte descriptif */}
      <Text style={styles.regularText}>
        This is a simple demo application. Please enter your name below.
      </Text>

      {/* Champ de saisie pour le prénom */}
      <TextInput
        style={styles.inputBox}
        value={firstName} // La valeur du champ est liée à l'état firstName
        onChangeText={onChangeFirstName} // Chaque frappe met à jour l'état
        placeholder="First Name" // Texte affiché quand le champ est vide
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    marginHorizontal: 20,
    marginVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#EDEFEE',
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
});
