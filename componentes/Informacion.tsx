import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

type InformacionProps = {
  name: string;
};

export default function Informacion({ name }: InformacionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});
