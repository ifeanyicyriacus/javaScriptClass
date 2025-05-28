import React from "react";

const Product = (props) => {
    const {data, isLoading} = props.data;

    console.log(data);
    console.log(isLoading);

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }


    return (
        <div>
            {
                data?.map((result) => (
                    <div key={result.id}>
                        <img src={result.image} alt="image"/>
                        <div>
                            <p>{result.title}</p>
                            <p>price: ₦ {result.price}</p>
                        </div>
                        <p>description</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Product;