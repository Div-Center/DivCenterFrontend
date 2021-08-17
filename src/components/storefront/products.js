import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, NativeRouter } from "react-router-native";

import { Text, ScrollView, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import { inactive, active } from '../../store/categories.js';
import { getProducts } from '../../store/products.js';
import { addToCart } from '../../store/cart.js';
import CategoryViewer from './categories.js';
import { loadProducts } from '../../store/products';



const ProductsViewer = ({ loadProducts, products, activatedCategory, addToCart }) => {
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // hello
  // === === PRODUCT IMAGES ARE COMING FROM HERE === === //
  function productImage(description) {
    if (!description) {
      return 'https://picsum.photos/200/300'; // either random image generator
    }
    return description.split('$')[1] // or from the product description of Code Fellows API
  }


  return (
    <ScrollView>
      <CategoryViewer />
      {products.productList.map((product, index) => {
        if (product.category === activatedCategory.toLowerCase()) {
          console.log('🎭product: ', product);

          return (
            <View item key={index}>
              <Card style={{ backgroundColor: '#e6e8bc' }}>
                <Image
                  // source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
                  source={{ uri: productImage(product.description) }}
                  style={{ height: 10, paddingTop: '100%' }}
                />
                <Card.Title> {product.name} </Card.Title>

                <Text> ${product.price} - In Stock: {product.inStock} </Text>
                <Button onPress={() => addToCart(product)} > Add to Cart </Button>
                <Button component={Link} to={`/products/${product._id}`}> View Details </Button>


              </Card>

            </View>
          )

        } else {
          return null;
        }

      })}

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


export default connect(mapStateToProps, mapDispatchToProps)(ProductsViewer);
