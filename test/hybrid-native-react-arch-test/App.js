import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import score from './web/src/score/html';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView source={score}/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
