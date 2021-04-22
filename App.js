import React from 'react';
import { StyleSheet } from 'react-native';
import Card from './components/Card';
import ListItem from './components/ListItem';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import ListingsScreen from './screens/ListingsScreen';
import Welcome from './screens/Welcome';

export default function App() {
  return <ListingsScreen />;
}

const styles = StyleSheet.create({});
