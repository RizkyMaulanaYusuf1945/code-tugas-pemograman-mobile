// components/About.js
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function About({ route, navigation }) {
const { friend } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: friend.photo }} style={styles.photo} />
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.description}>{friend.description}</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Daftar Teman')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center'
  }
});
