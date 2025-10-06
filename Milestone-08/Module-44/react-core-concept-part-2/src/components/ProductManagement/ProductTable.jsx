import React from 'react';

const ProductTable = ({ products }) => {
    console.log(products);

    return (
        <div>
            <h3>Products: {products.length}</h3>
            <table style={{textAlign: 'center', margin: "0 auto"}}>
                <thead>
                    <tr>
                        <td>No.</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;