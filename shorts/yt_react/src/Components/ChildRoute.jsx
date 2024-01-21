import React from 'react'
import { useOutletContext } from 'react-router-dom';


const ChildRoute = () => {

    // Accesses the context set by the ParentRoute
    const { products, setProducts } = useOutletContext();

    return (
        <div>
            {products && products.map(product => (
                <div key={product.id} className="product">
                    <img src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Category: {product.category}</p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default ChildRoute