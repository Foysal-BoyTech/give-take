import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'a jacket',
    description: 'Few months used still in nice condition',
    image: require('../assets/take.jpg'),
  },
  {
    id: 2,
    title: 'a jacket',
    description: 'Few months used still in nice condition',
    image: require('../assets/helping.jpg'),
  },
  {
    id: 3,
    title: 'a jacket',
    description: 'still in nice condition',
    image: require('../assets/helping.jpg'),
  },
  {
    id: 4,
    title: 'a jacket',
    description: 'Few months used still in nice condition',
    image: require('../assets/helping.jpg'),
  },
];

function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
