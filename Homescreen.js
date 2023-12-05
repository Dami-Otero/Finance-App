import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const Homescreen = ({ navigation }) => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');

  const deposit = () => {
    setBalance(prevBalance => prevBalance + parseFloat(amount));
    setAmount('');
  };

  const withdraw = () => {
    setBalance(prevBalance => prevBalance - parseFloat(amount));
    setAmount('');
  };

  const updateBalance = () => {
    setBalance(parseFloat(amount));
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Balance: ${balance.toFixed(2)}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAmount}
        value={amount}
        placeholder="Enter amount"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Deposit" onPress={deposit} />
        <Button title="Withdraw" onPress={withdraw} />
        <Button title="Set Balance" onPress={updateBalance} />
      </View>
      <View style={styles.lowerButtonContainer}>
        <Button 
          title="Go to Savings Goals" 
          onPress={() => navigation.navigate('SavingsGoals')} 
        />
        <Button 
          title="Live Market Updates" 
          onPress={() => navigation.navigate('LiveMarketUpdates')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  lowerButtonContainer: {
    marginTop: 10,
    width: '60%',
  },
});

export default Homescreen;
