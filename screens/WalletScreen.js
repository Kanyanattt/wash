import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WalletScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Wallet Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
