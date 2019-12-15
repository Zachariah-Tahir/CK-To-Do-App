import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const Header = ({ title }) => (
  <View style={styles.headerContainer}>
  <Image 
  style={styles.image}
  source={require('../../assets/icon.png')}/>
    <Text style={styles.headerText}>{title.toUpperCase()}</Text>
  </View>
);
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40,
    alignItems: "center"
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500'
  },
  image: {
      width: 40,
      height: 40,
    
  }
});
export default Header;