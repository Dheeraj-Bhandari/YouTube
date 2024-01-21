import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import axios from 'axios'

function ParentRoute() {
    const [products, setProducts] = useState([])

    function fetchProducts() {
        axios.get("https://dummyjson.com/products").then((data) => {
            console.log(data.data)
            setProducts(data.data.products)
        }).catch((err) => console.error(err))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div >
            
            {/* <Outlet context={{ products, setProducts }} /> */}

        </div>
    );
}

export default ParentRoute;
