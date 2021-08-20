import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, NativeRouter } from "react-router-native";

import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity, FlatList, } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { inactive, active } from '../../store/categories.js';
import { getProducts } from '../../store/products.js';
import { addToCart } from '../../store/cart.js';
import { detailReducer } from '../../store/productDetails.js';
import CategoryViewer from './categories.js';
import { loadProducts } from '../../store/products';
import { render } from 'react-dom';



const ProductsViewer = ({ loadProducts, products, activatedCategory, addToCart, detailReducer }) => {
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const renderProducts = (productList, isCatActivated) => {
    if (isCatActivated) { return productList.filter(product => product.category === activatedCategory) }
    else { return productList }
  }

  return (
    <ScrollView >
      <CategoryViewer />
      <View style={styles.outerView}>
        {renderProducts(products.productList, activatedCategory).map((product, index) => {
          return (
            <View style={{ backgroundColor: 'red', alignItems: 'center' }} item key={index}>

              <Card containerStyle={{
                width: 300, height: 400, backgroundColor: '#262423', borderRadius: 25, borderWidth: 0, shadowRadius: 25, shadowColor: 'black', alignContent: 'center'
              }}>
                <Image
                  // source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
                  source={{ uri: product.image }}
                  style={{ paddingTop: '100%', borderRadius: 50 }}
                />
                <Card.Title style={styles.title}> {product.name} </Card.Title>

                <Text style={styles.stock}> ${product.price} </Text>
                <View style={{ flexDirection: "row", alignSelf: 'center', }}>
                  <TouchableOpacity style={styles.button}
                    onPress={() => addToCart(product)}>
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                  <Link
                    style={styles.button} to={{ pathname: `/services/${product._id}`, state: { currentProduct: product } }} >

                    <Text style={styles.buttonText}>?</Text>

                  </Link>

                </View>


              </Card>

            </View>
          )


        })}
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    activatedCategory: state.categories.activatedCategory,
    activatedDescription: state.description
  }
}

const mapDispatchToProps = {
  inactive,
  active,
  getProducts,
  addToCart,
  loadProducts,
}


const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'white'
  },
  stock: {
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 25,
    borderColor: '#ffffff',
    borderWidth: 0.3,
    backgroundColor: '#211e1e',
    opacity: 100,
    width: 75,
    height: 50,
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 25,
    color: 'white'
  },
  outerView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#262222',
    justifyContent: 'center'



  }
})



export default connect(mapStateToProps, mapDispatchToProps)(ProductsViewer);
