import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {

    const [error, setError] = useState("");

    const handleFormSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        const newProduct = {name, price, quantity}
        // console.log(newProduct);

        // authentication
        if(name.length === 0) {
            setError("provide a product name");
            return;
        } else if (price.length === 0) {
            setError("provide the product price");
            return;
        } else if (price < 0) {
            setError("price can not be negative");
            return;
        } else {
            setError("");
        }

        handleAddProduct(newProduct);
    }

    return (
        <div>
            <h3>Add a Product</h3>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder='Product Name' />
                <br />
                <input type="text" name='price' placeholder='Product Price' />
                <br />
                <input type="text" name='quantity' placeholder='Product Quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: "red"}}>{error}</p>
        </div>
    );
};

export default ProductForm;