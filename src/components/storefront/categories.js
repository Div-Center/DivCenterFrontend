import React from 'react';
import { connect } from 'react-redux';

import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
// import { Button } from 'react-native-elements';

import { inactive, active } from '../../store/categories.js';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    backgroundColor: '#242020'

  },
  button: {
    textAlign: 'center',
    color: 'white',
    alignContent: 'center',
    textDecorationLine: "none",
    textDecorationColor: "white",
    borderWidth: 0.3,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: '#292222'

  },
  text: {
    color: 'white',
    fontSize: 20,
    
  },

});

const CategoryViewer = (props) => {
  return (
    <View >

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => props.active('Electronics', 'Electronics')}>
          <Text style={styles.text}>
            Electronics
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => props.active('Food', 'Food')}>
          <Text style={styles.text}>
            Food
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => props.active('Phones', 'Phones')}>
          <Text style={styles.text}>
            Phones
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => props.active('Console', 'Console')}>
          <Text style={styles.text}>
            Consoles
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => props.active('Shirts', 'Shirts')}>
          <Text style={styles.text}>
            Shirts
          </Text>
        </TouchableOpacity>
      </View>

      {/* <Text> {props.activatedDescription}</Text> */}

    </View>
  )
}


const mapStateToProps = (state) => {
  return {
    products: state.products,
    activatedCategory: state.categories.activatedCategory,
    activatedDescription: state.categories.activatedDescription
  }
}


const mapDispatchToProps = {
  inactive,
  active,
}



export default connect(mapStateToProps, mapDispatchToProps)(CategoryViewer);
