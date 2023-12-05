import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const LiveMarketUpdates = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=869Y0IANIUBYUSVE')
      .then(response => response.json())
      .then(json => {
        setData(json["Global Quote"]);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      {data ? (
        <Text style={styles.text}>Symbol: {data['01. symbol']}\nPrice: {data['05. price']}</Text>
      ) : (
        <Text style={styles.text}>Failed to load data.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default LiveMarketUpdates;
