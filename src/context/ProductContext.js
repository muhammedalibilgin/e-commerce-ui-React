import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0);
    const [basket, setBasket] = useState([]);

    const values = { product, setProduct, count, setCount, basket, setBasket };

    return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>;
};

export default ProductContext;
