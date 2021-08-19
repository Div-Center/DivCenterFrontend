// this is the product details page (when you click 'view details' on a specific product)
// '/products/:id' route

import React from 'react';
import { useSelector } from 'react-redux';
import { addToCart } from '../../store/cart.js';

// import { useParams } from 'react-router-dom';
import { Link, NativeRouter } from "react-router-native";

import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { Card, Tile, AirbnbRating } from 'react-native-elements';



function ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}



export default function Details(props) {

  const { currentProduct } = props.location.state;
  console.log('props', currentProduct);

  const styles = StyleSheet.create({
    root: {
      margin: '0 auto',
      marginBottom: '0',
      maxWidth: '45',
      color: 'white',
      backgroundColor: '#262423',

      borderRadius: 3,
      // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    title: {
      fontSize: 30,
      color: 'white',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 0,
    },
    card: {
      backgroundColor: 'orange',
      borderRadius: 10,
    },
    productDetails: {
      marginBottom: 0,
      textAlign: 'center',
      backgroundColor: 'brown',
    },
    text: {
      textAlign: 'center',
      marginBottom: 12,
    },
    button: {
      marginTop: 1,
      marginBottom: 0.5,
      backgroundColor: 'green',
      color: 'white',
      marginVertical: 8
    },
    description: {
      marginTop: '1em',
    },
    image: {
      paddingTop: '100%',
      borderRadius: 10
    }
  });



  return (
    <>
      <Text style={styles.title}>
        {currentProduct.name}
      </Text>

      <Card style={styles.card}>
        <Image
          source={{ uri: currentProduct.image }}
          style={styles.image}
        />

        <Card style={styles.productDetails}>
          <Text>${currentProduct.price}</Text>
          <Text>Freelancer: {currentProduct.freelancer}</Text>
          <Text>{currentProduct.details}</Text>
        </Card>

      </Card>


      <Button title={'Add to Cart'} style={styles.button} onClick={() => addToCart(currentProduct)} />


      {/* <AirbnbRating /> */}
      <AirbnbRating count={10} reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "👍"]} defaultRating={8} size={20} />




    </>
  )
}
