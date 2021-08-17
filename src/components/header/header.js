import React from 'react';
// import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';



// const styles = StyleSheet.create({
//   header: {
//     fontSize: 40,
//     marginTop: '10%',
//     color: 'black',
//     textAlign: 'center',
//   },
// });


function TopHeader() {

  return (
    <View>
      {/* <Text styles={styles.header}> DivCenter </Text> */}
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'DivCenter', style: { color: '#fff', fontSize: 40 } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    </View >
  )
}



export default TopHeader;
