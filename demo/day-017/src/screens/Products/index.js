import React, {useContext} from 'react';
import {ActivityIndicator, Button, Text, View} from 'react-native';

import ProductsContext, {ProductProvider} from '../../context/Product.context';

const Products = () => {
  const MasterProduct = useContext(ProductsContext);
  // console.log({MasterProduct});
  const {loading, data, getData} = MasterProduct;
  console.log({data});
  return (
    <View>
      <Text>Product</Text>
      <Button title="Load Data" onPress={getData} />
      {loading && (
        <View style={{padding: 5, justifyContent: 'center'}}>
          <ActivityIndicator color="red" />
        </View>
      )}
    </View>
  );
};

export default (props) => (
  <ProductProvider>
    <Products {...props} />
  </ProductProvider>
);
