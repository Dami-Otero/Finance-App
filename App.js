import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from './firebaseConfig'; 
import Homescreen from './Homescreen';
import SavingsGoals from './SavingsGoals';
import LiveMarketUpdates from './LiveMarketUpdates';
import AuthenticationScreen from './AuthenticationScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) return null; 

  return (
    <View style={styles.appContainer}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName={user ? "Home" : "Auth"}
          screenOptions={{
            headerStyle: styles.header,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitle
          }}
        >
          {user ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="SavingsGoals" component={SavingsGoals} />
              <Stack.Screen name="LiveMarketUpdates" component={LiveMarketUpdates} />
            </>
          ) : (
            <Stack.Screen 
              name="Auth" 
              component={AuthenticationScreen} 
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#e9ecef',
  },
  header: {
    backgroundColor: '#007bff',
  },
  headerTitle: {
    fontWeight: 'bold',
  },
});
