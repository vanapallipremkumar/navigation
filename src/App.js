import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './Home';
import linking from './linking';
import Page from './Page';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.scrollView}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Page" component={Page} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
