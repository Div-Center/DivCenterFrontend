import React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import { Link } from "react-router-native";
import { connect } from 'react-redux';
import { NativeRouter, Route } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    color: 'white',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    backgroundColor: '#31364a',
  },
  footer: {
    fontSize: 20,
    marginBottom: '5%',
    marginTop: '3%',
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#31364a',
  },
});


function Footer(props) {
  return (

    <SafeAreaView style={styles.container}>
      <Link style={styles.footer} to='/cart'>
        <Text style={styles.footer}>
          🛒 ({props.cart.cart.length})
        </Text>
      </Link>
      <Link style={styles.footer} to='/'>
        <Text style={styles.footer}>
          🏠
        </Text>
      </Link>

      {/* <Text style={styles.footer}> 🛒: {props.cart.cart.length} </Text> */}
    </SafeAreaView >

  )
};



const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Footer);
// export default (Footer);
