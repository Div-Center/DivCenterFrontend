// this is the product details page (when you click 'view details' on a specific product)
// '/products/:id' route

import React from 'react';
import { useSelector } from 'react-redux';
import { addToCart } from '../../store/cart.js';

// import { useParams } from 'react-router-dom';
// import { Link, NativeRouter } from "react-router-native";

import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Card, Tile, AirbnbRating } from 'react-native-elements';

const mapDispatchToProps = {
  addToCart
}


export default function Details(props, mapDispatchToProps) {

  const { currentProduct } = props.location.state;
  console.log('props', currentProduct);

  const styles = StyleSheet.create({

    title: {
      fontSize: 35,
      color: 'white',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: -15,
      zIndex: 1,
    },
    card: {
      backgroundColor: 'blue',
      borderRadius: 10,
    },
    productDetails: {
      marginBottom: 0,
      marginTop: 90,
      marginLeft: 30,
      marginRight: 30,
      textAlign: 'center',
      backgroundColor: '#4d72b0',
      borderColor: 'black',
    },
    text: {
      textAlign: 'center',
      marginBottom: 8,
      color: 'white',
    },
    textPrice: {
      fontSize: 25,
      textAlign: 'center',
      marginBottom: 5,
      color: 'white',
    },
    textDetails: {
      textAlign: 'left',
      marginBottom: 8,
      color: 'white',
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    button: {
      marginTop: 1,
      marginBottom: 0.5,
      padding: 4,
      width: 100,
      backgroundColor: '#47ad62',
      textAlign: 'center',
      color: 'white',
      marginVertical: 8,
      borderColor: 'black',
    },
    image: {
      paddingTop: '100%',
      borderRadius: 10
    },
    main: {
      flex: 1,
      position: 'relative',
      height: '100%',
    },
    scrollView: {
      position: 'absolute',
      height: '100%',
      marginBottom: 100,
    },
  });


  return (
    <View style={styles.main}>
      <ScrollView style={styles.scrollView}>

        <Text style={styles.title}>
          {currentProduct.name}
        </Text>

        <Tile style={styles.card}>
          <Image
            source={{ uri: currentProduct.image }}
            style={styles.image}
          />
        </Tile>

        <Card containerStyle={styles.productDetails}>
          <Text style={styles.textPrice}>${currentProduct.price}</Text>
          <Text style={styles.text}>Freelancer: {currentProduct.freelancer}</Text>
          <Text style={styles.textDetails}>{currentProduct.details}</Text>
          <TouchableOpacity style={styles.buttonContainer} onClick={() => addToCart(currentProduct)}>
            <Text style={styles.button}>Add to Cart</Text>
          </TouchableOpacity>

          {/* <AirbnbRating /> */}
          <AirbnbRating count={10} reviews={["🤮", "🤢", "🤨", "🥱", "👍", "🤔", "😃", "😲", "🤗", "‼"]} defaultRating={8} size={20} />
        </Card>

      </ScrollView>
    </View>
  )
}

