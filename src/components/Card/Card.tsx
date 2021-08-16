import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

type CardProps = {
  name: string;
  icon: any;
};

const Card = ({ name, icon }: CardProps) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={32} color="#FF7A01" />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#ff7c0134',
    borderWidth: 2,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
});

export default Card;
