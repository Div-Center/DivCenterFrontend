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


    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(ShoppingCart);
