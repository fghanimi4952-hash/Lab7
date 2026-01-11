import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';

/**
 * Composant LoginScreen
 * Affiche l'écran de connexion avec des champs email et mot de passe
 */
export default function LoginScreen() {
  // État local pour stocker l'email
  const [email, onChangeEmail] = useState('');
  
  // État local pour stocker le mot de passe
  const [password, onChangePassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      {/* Titre de l'écran de connexion */}
      <Text style={styles.headerText}>Welcome</Text>
      
      {/* Texte descriptif */}
      <Text style={styles.regularText}>Login to continue</Text>

      {/* Champ de saisie pour l'email */}
      <TextInput
        style={styles.inputBox}
        value={email} // La valeur du champ est liée à l'état email
        onChangeText={onChangeEmail} // Chaque frappe met à jour l'état
        placeholder="Email" // Texte affiché quand le champ est vide
        keyboardType="email-address" // Affiche un clavier adapté à la saisie d'email
      />

      {/* Champ de saisie pour le mot de passe */}
      <TextInput
        style={styles.inputBox}
        value={password} // La valeur du champ est liée à l'état password
        onChangeText={onChangePassword} // Chaque frappe met à jour l'état
        placeholder="Password" // Texte affiché quand le champ est vide
        keyboardType="default" // Clavier par défaut
        secureTextEntry={true} // Masque les caractères (nécessaire pour les mots de passe)
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
