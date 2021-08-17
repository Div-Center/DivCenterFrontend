// this is the product details page (when you click 'view details' on a specific product)
// '/products/:id' route

import React from 'react';
import { useSelector } from 'react-redux';
import { addToCart } from '../../store/cart.js';

// import { useParams } from 'react-router-dom';
import { Link, NativeRouter } from "react-router-native";

import { Text, View, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';



export default function Details(props) {

  let products = useSelector(state => state.products)
  const { id } = useParams();
  console.log('🎨', products)
  const result = products.productList.filter(product => product._id === id);
  let shownItem = result[0];


  const styles = StyleSheet.create({
    root: {
      margin: '0 auto',
      marginBottom: '0em',
      maxWidth: '45em',
      color: 'white',
      background: 'linear-gradient(75deg, #000000 30%, #31364a 90%)',
      border: 0,
      borderRadius: 3,
      // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    title: {
      fontSize: 30,
      textAlign: 'center',
      marginBottom: '-1em',
    },
    p: {
      textAlign: 'center',
      marginBottom: 12,
    },
    buy: {
      marginTop: 1,
      marginBottom: 0.5,
      backgroundColor: 'green',
      color: 'white',
    },
    description: {
      marginTop: '1em',
    },
    accordion: {
      color: 'white',
      maxWidth: '45em',
      minWidth: '45em',
      padding: '-2em',
      margin: '.5em',
      background: 'linear-gradient(45deg, #000000 30%, #31364a 90%)',
      textAlign: 'center',
    },
    productDetails: {
      marginBottom: '0em',
    }
  });


  function productImage(description) {
    if (!description) {
      return 'https://picsum.photos/200/300';
    }
    return description.split('$')[1]
  }


  return (
    <>
      <NativeRouter>
        <Button
          component={Link} to={'/'}
        >
          Back to Store
        </Button>
      </NativeRouter>

      <Text style={styles.title}>
        {shownItem.name}
      </Text>

      <Card className={classes.root}>
        <Card
          image={productImage(shownItem.description)}
          style={{ maxWidth: '50em', height: 10, paddingTop: '100%' }}
        />

        <Text className={classes.p}>
          <p>${shownItem.price}</p>
          <p>{shownItem.inStock} in stock</p>
        </Text>
      </Card>


      <Button style={styles.buy} variant="contained"  onClick={() => addToCart(shownItem)} > Add to Cart </Button>


      {/* <Accordion className={classes.accordion}>
          <AccordionSummary>
            <Typography className={classes.productDetails}>
              <p>Product Details</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.description}>
            <Typography>
              <p>{shownItem.description}</p>
              <p>Category: {shownItem.category}</p>
            </Typography>
          </AccordionDetails>
        </Accordion> */}

      {/* 
      <Accordion className={classes.accordion}>
        <AccordionSummary>
          <Typography className={classes.productDetails}>
            <p>User Reviews</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.description}>
          <Typography>
            <p>Reviews Go Here...</p>
          </Typography>
        </AccordionDetails>
      </Accordion> */}


    </>
  )
}