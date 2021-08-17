import { NativeRouter, Route } from "react-router-native";
import { Provider } from 'react-redux';
// import { Provider } from 'react-redux';
// import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// === === Components === === //
import TopHeader from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Products from "./components/storefront/products.js";
import store from './store/index.js';
// import SimpleCart from './components/cart/simplecart';
import Details from './components/product-details/details';
import ShoppingCart from './components/cart/shopping-cart';


function App() {
  return (
    <NativeRouter>
      <Provider store={store()}>
        <SafeAreaProvider>
          {/* <Provider store={store()}> */}
          <TopHeader />
          <Route exact path='/' component={Products} />
          <Footer />
          {/* </Provider> */}
        </SafeAreaProvider>
      </Provider>
    </NativeRouter>
  );
}

export default App;
