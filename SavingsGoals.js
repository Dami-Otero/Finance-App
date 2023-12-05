import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SavingsGoals = () => {
  const [monthlyEarnings, setMonthlyEarnings] = useState('');
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [endOfYearBalance, setEndOfYearBalance] = useState(null);

  const calculateEndOfYearBalance = () => {
    const earnings = parseFloat(monthlyEarnings);
    const expenses = parseFloat(monthlyExpenses);
    if (!isNaN(earnings) && !isNaN(expenses)) {
      const yearlySavings = (earnings - expenses) * 12;
      setEndOfYearBalance(yearlySavings);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={monthlyEarnings}
        onChangeText={setMonthlyEarnings}
        placeholder="Enter Monthly Earnings"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={monthlyExpenses}
        onChangeText={setMonthlyExpenses}
        placeholder="Enter Monthly Expenses"
        keyboardType="numeric"
      />
      <Button title="Calculate End of Year Balance" onPress={calculateEndOfYearBalance} />
      {endOfYearBalance !== null && (
        <Text>End of Year Balance: ${endOfYearBalance.toFixed(2)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default SavingsGoals;
