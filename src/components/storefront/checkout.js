'use strict'

import React from 'react';
import { Text, Card, View } from 'react-native';
import { useSelector } from 'react-redux';

function Checkout(props) {
  let { cart } = useSelector(state => state.cart);

  return (
    <>
      <Text style={{ fontSize: 50, color: 'white' }}> Thank you!! </Text>
      <Text style={{ color: 'white' }}>Ordered items go here</Text>
    </>
  )
}

export default Checkout;
