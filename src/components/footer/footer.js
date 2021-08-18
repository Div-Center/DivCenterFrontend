import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Link } from "react-router-native";
import { connect } from 'react-redux';


const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    marginBottom: '5%',
    width: '100%',
    marginTop: '3%',
    color: 'white',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    backgroundColor: '#31364a',
  },
  footer: {
    fontSize: 30,
    marginBottom: '5%',
    marginTop: '3%',
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#31364a',
  },
});


function Footer(props) {
  return (

    <View style={styles.container}>
      <Button style={styles.footer} title={`🛒: ${props.cart.cart.length}`} component={Link} to={`/cart`}/>
      <Button style={styles.footer} title={`🏠`} />
      {/* <Text style={styles.footer}> 🛒: {props.cart.cart.length} </Text> */}
    </View >
  )
};



const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Footer);
// export default (Footer);
