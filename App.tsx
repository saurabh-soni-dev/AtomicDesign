import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageList from './src/screens/ImageList';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageList />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
