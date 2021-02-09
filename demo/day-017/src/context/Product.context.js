import React, {createContext} from 'react';
import {useState} from 'react/cjs/react.development';

import {getProducts} from '../service/product.api';

const ProductsContext = createContext();

const ProductProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const response = await getProducts();
    // console.log({response});
    setData(response.data.data);
    setLoading(false);
  };

  const allData = {
    data,
    getData,
    loading,
  };

  return (
    <ProductsContext.Provider value={allData}>
      {children}
    </ProductsContext.Provider>
  );
};

const ProductConsumer = ProductsContext.Consumer;
export {ProductProvider, ProductConsumer};
export default ProductsContext;
