import React from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, NativeRouter, Route } from "react-router-native";

import { Text, View, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';


function ShoppingCart(props) {

  let { cart } = useSelector(state => state.cart);
  // console.log('🥅', products)

  return (
    <>

      <Link
        to={'/'}
      >
        <Text>Back to store</Text>
      </Link>


      <Text>
        Hello
      </Text>

      {cart.map(rendered => {
        return (
          <>
            <Card style={{ margin: '1em', maxWidth: '15em', padding: '2em' }}>
              <Text>
                <Text >{rendered.name}</Text>
                <Text>${rendered.price}</Text>
              </Text>
            </Card>
          </>
        )
      })}

      <View >

        <Link style={styles.button} to={{ pathname: '/checkout' }}>
          <Text style={styles.text}>Checkout</Text>
        </Link>

      </View>


    </>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'white',
  },
  button: {
    borderRadius: 25,
    borderColor: '#ffffff',
    borderWidth: 0.3,
    backgroundColor: 'green',
    opacity: 100,
    width: '80%',
    height: 50,
    alignItems: 'center',
    padding: 10,
    margin: 40,
  },
})

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(ShoppingCart);
