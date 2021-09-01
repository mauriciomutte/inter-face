import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../components/Card/Card';
import Balance from '../components/Balance/Balance';
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Balance />
      <View style={styles.cards}>
        <Card icon="credit-card-outline" name="Cartões" />
        <Card icon="chart-line-variant" name="Investir" />
        <Card icon="bank-transfer" name="Transferir" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 20,
  },
  cards: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Home;
