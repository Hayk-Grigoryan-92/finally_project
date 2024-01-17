import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const addToProduct = (productData) => {
    const findProduct = product.find(x=>x._id === productData._id)
    if(findProduct){
      findProduct.count = productData.count
    }else{
      setProduct([...product, productData]);
    }
  };



  useEffect(() => {

  }, [product]);

  return (
    <ProductsContext.Provider value={{ product, addToProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const testProduct = useContext(ProductsContext);

  return {
    product: testProduct.product,
    addToProduct: testProduct.addToProduct,
  };
};
