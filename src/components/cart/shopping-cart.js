import React from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, NativeRouter } from "react-router-native";

import { Text, View, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';


function ShoppingCart(props) {

  let { cart } = useSelector(state => state.cart);
  // console.log('🥅', products)

  return (
    <>
      <NativeRouter>
        <Button
          component={Link} to={'/'}
        >
          Back to Store
        </Button>
      </NativeRouter>

      <Text>
        <h1>Product Detail</h1>
      </Text>

      {cart.map(rendered => {
        return (
          <>
            <Card style={{ margin: '1em', maxWidth: '15em', padding: '2em' }}>
              <Text>
                <p >{rendered.name}</p>
                <p>${rendered.price}</p>
                <p>{rendered.inStock} in stock</p>
                <p>Category: {rendered.category}</p>
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
