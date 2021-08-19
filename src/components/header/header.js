import React from 'react';
// import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-elements';



const styles = StyleSheet.create({
  header: {
    // fontSize: 40,
    // marginTop: '10%',
    // color: 'black',
    // textAlign: 'center',
    backgroundColor: '#31364a',

  },
});


function TopHeader() {

  return (
    <View style={styles.header}>
      {/* <Text styles={styles.header}> DivCenter </Text> */}
      <Header
        barStyle='light-content'
        containerStyle={{ backgroundColor: '#31364a', }}
        // leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'DivCenter', style: { color: '#fff', fontSize: 40 } }}
      // rightComponent={{ icon: 'home', color: '#fff' }}
      />
    </View >
  )
}



export default TopHeader;
