import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Inter
        <Text style={styles.logoLight}>face</Text>
      </Text>

      <View style={styles.buttons}>
        <Icon name="menu" size={30} color="#FF7A01" />
        <Icon name="search" size={30} color="#FF7A01" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 25,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logo: {
    color: '#FF7A01',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoLight: {
    fontWeight: '300',
  },
});

export default Header;
