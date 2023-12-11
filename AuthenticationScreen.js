import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const AuthenticationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleRegister = () => {
    registerUser(email, password, setStatusMessage);
  };

  const handleLogin = () => {
    loginUser(email, password, setStatusMessage);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text>{statusMessage}</Text>
    </View>
  );
};

const registerUser = (email, password, setStatusMessage) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      setStatusMessage('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        setStatusMessage('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        setStatusMessage('That email address is invalid!');
      } else {
        setStatusMessage(error.message);
      }
    });
};

const loginUser = (email, password, setStatusMessage) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      setStatusMessage('User signed in!');
    })
    .catch(error => {
      setStatusMessage(error.message);
    });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default AuthenticationScreen;
