import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/icon.png')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket </AppText>
        <AppText style={styles.details}>In good condition</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/foysal.jpg')}
            title="foysal Mohammad"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  details: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },

  image: {
    width: '100%',
    height: 300,
  },

  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
