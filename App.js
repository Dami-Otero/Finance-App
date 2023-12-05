import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Homescreen'; // Import HomeScreen
import SavingsGoals from './SavingsGoals'; // Import SavingsGoals
import LiveMarketUpdates from './LiveMarketUpdates'; // Import LiveMarketUpdates

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SavingsGoals" component={SavingsGoals} />
        <Stack.Screen name="LiveMarketUpdates" component={LiveMarketUpdates} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
