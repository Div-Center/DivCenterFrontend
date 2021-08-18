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
        <TouchableOpacity style={styles.button} onPress={() => props.active('Accessibility', 'Accessibility')}>
          <Text style={styles.text}>
          Accessibility
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => props.active('Web Design', 'Web Design')}>
          <Text style={styles.text}>
          Web Design
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => props.active('Design', 'Design')}>
          <Text style={styles.text}>
          Design
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => props.active('Apps', 'Apps')}>
          <Text style={styles.text}>
          Apps
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => props.active('Tutoring', 'Tutoring')}>
          <Text style={styles.text}>
          Tutoring
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => props.active('Misc', 'Misc')}>
          <Text style={styles.text}>
          Misc
          </Text>
        </TouchableOpacity>
      </View>

      <Text> {props.activatedDescription}</Text>

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
