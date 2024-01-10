import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const addToProduct = (productData) => {
    setProduct([...product, productData]);
  };



  useEffect(() => {
    console.log(product);
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
