import {Link} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.scrollView}>
      <ScrollView
        style={[styles.container]}
        contentContainerStyle={[styles.contentContainer]}>
        <Text style={[styles.text]}>Home</Text>

        <Link to={{screen: 'Page'}} style={[styles.linkText]}>
          <View style={[styles.link]}>Go to Page</View>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  link: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    padding: 4,
    backgroundColor: 'blue',
  },
  linkText: {
    color: 'white',
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    fontweight: '600',
    marginBottom: 20,
  },
});

export default Home;
