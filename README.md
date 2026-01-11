# Lab 7 : TextInput et écrans de connexion

Ce projet React Native démontre l'utilisation des composants `TextInput` pour créer des écrans de saisie avec gestion d'état.

## 📋 Objectifs

- Configurer un composant `TextInput` pour saisir du texte
- Stocker le texte dans l'état local avec `useState`
- Utiliser les props de `TextInput` : `placeholder`, `keyboardType`, `secureTextEntry`
- Appliquer un style simple pour une interface propre

## 🏗️ Structure du projet

```
Lab 7/
├── App.js                      # Composant principal
├── components/
│   ├── AppHeader.js           # En-tête de l'application
│   ├── AppFooter.js           # Pied de page de l'application
│   ├── WelcomeScreen.js       # Écran d'accueil avec champ "First Name"
│   └── LoginScreen.js         # Écran de connexion avec email et mot de passe
└── README.md                   # Ce fichier
```

## 🚀 Installation

1. Assurez-vous d'avoir un projet React Native configuré (Expo ou React Native CLI)

2. Copiez les fichiers dans votre projet

3. Installez les dépendances (si nécessaire) :
   ```bash
   npm install
   # ou
   yarn install
   ```

## 💻 Utilisation

### Écran d'accueil (WelcomeScreen)

L'écran d'accueil affiche :
- Un titre de bienvenue
- Un texte descriptif
- Un champ de saisie pour le prénom

**Fonctionnalités :**
- Utilisation de `useState` pour gérer l'état du prénom
- Champ `TextInput` avec placeholder "First Name"

### Écran de connexion (LoginScreen)

L'écran de connexion affiche :
- Un titre "Welcome"
- Un texte "Login to continue"
- Un champ email avec clavier adapté
- Un champ mot de passe avec texte masqué

**Fonctionnalités :**
- Utilisation de `useState` pour gérer l'état de l'email et du mot de passe
- `keyboardType="email-address"` pour le champ email
- `secureTextEntry={true}` pour le champ mot de passe

## 🔄 Basculer entre les écrans

Pour afficher l'écran de connexion au lieu de l'écran d'accueil dans `App.js` :

1. Décommentez l'import de `LoginScreen`
2. Remplacez `<WelcomeScreen />` par `<LoginScreen />`
3. (Optionnel) Commentez l'import de `WelcomeScreen`

## 📱 Props TextInput utilisées

- **`value`** : Lie le champ à une valeur d'état
- **`onChangeText`** : Fonction appelée à chaque modification du texte
- **`placeholder`** : Texte affiché quand le champ est vide
- **`keyboardType`** : Type de clavier affiché ("email-address", "default", etc.)
- **`secureTextEntry`** : Masque les caractères (pour les mots de passe)

## 🎨 Styles

Les styles utilisent une palette de couleurs sombre :
- Fond : `#333333`
- Texte : `#EDEFEE`
- Champs de saisie : Fond blanc avec bordure claire

## 📚 Concepts React Native abordés

- Composants fonctionnels
- Hook `useState` pour la gestion d'état
- Composant `TextInput`
- `StyleSheet` pour le styling
- `ScrollView` pour le défilement

## 🔮 Améliorations possibles

- Ajouter un bouton "Valider" qui affiche le prénom/email dans une alerte
- Validation simple (email non vide, mot de passe avec longueur minimale)
- Intégration dans une navigation (Stack Navigator)
- Gestion des erreurs de validation
- Animation lors de la soumission

## 📝 Notes

Ce projet est conçu pour un environnement d'apprentissage. Les composants `AppHeader` et `AppFooter` sont supposés exister dans le projet.
