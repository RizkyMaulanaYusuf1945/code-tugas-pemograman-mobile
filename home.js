import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';

const friends = [
  { id: '1', name: 'Mamat Batman', 
    description: 'NO WA : 082113141867', 
    photo: require('../assets/mamatbatman.jpg') },
  { id: '1', name: 'Joker LingFeng', 
    description: 'NO WA : 082113141111.', 
    photo: require('../assets/jokerlingfeng.jpg') },
  { id: '1', name: 'Jokowi', 
    description: 'NO WA : 082113141113.', 
    photo: require('../assets/jokowi.jpg') },  
];

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.photo} style={styles.photo} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Button
                title="Lihat"
                onPress={() => navigation.navigate('Detail Informasi', { friend: item })}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 16
  },
  details: {
    flex: 1
  },
  name: {
    fontSize: 25,
    marginBottom:15,
    
  }
});
