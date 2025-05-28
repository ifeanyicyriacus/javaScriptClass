import React from 'react';
import {useGetAllProductsQuery} from "../../service/productStoreApi.jsx";
import Product from "../../reusable/Product.jsx";

const Products = () => {
    const query = useGetAllProductsQuery();
    // console.log(query);
    return (
        <div className="products">
            <Product data={query} />
        </div>
    )
}

export default Products;