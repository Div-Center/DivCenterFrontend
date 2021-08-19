import React from 'react';
// import { connect } from 'react-redux';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';



const styles = StyleSheet.create({
  container: {
    // marginTop: '10%',
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#31364a',
    // borderWidth: 5,
    // borderColor: 'black',
  },
  text: {
    color: 'white',
    marginBottom: 20,
    fontSize: 30,
    textAlign: 'center',
  }
});


function TopHeader() {

  return (

    <SafeAreaView style={styles.container}>
      {/* <Text styles={styles.header}> DivCenter </Text> */}
      {/* <Header
        barStyle='light-content'
        containerStyle={{
          backgroundColor: '#31364a', marginBottom: 10, borderWidth: 5,
        }}
        // leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'DivCenter', style: { color: '#fff', fontSize: 40 } }}
      // rightComponent={{ icon: 'home', color: '#fff' }}
      /> */}
      <Text style={styles.text}> DivCenter </Text>
    </SafeAreaView >
  )
}



export default TopHeader;
