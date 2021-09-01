import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const Balance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.value}>
        <Text style={styles.valueText}>R$ 1.000,00</Text>
        <Icon name="eye-outline" style={styles.valueIcon} size={28} color="#FF7A01" />
      </View>
      <Text style={styles.button}>Ver extrato</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  value: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  valueText: {
    fontSize: 26,
    fontWeight: '500',
  },
  valueIcon: {
    marginLeft: 10,
  },
  button: {
    color: '#FF7A01',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Balance;
