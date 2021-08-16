import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../components/Card/Card';

const Home = () => {
  return (
    <View style={styles.container}>
      <Card icon="credit-card-outline" name="Cartões" />
      <Card icon="chart-line-variant" name="Investir" />
      <Card icon="bank-transfer" name="Transferir" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});

export default Home;
